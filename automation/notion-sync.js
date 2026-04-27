#!/usr/bin/env node
/**
 * Notion Sync Script
 *
 * Takes Gemini's idea clusters and pushes them to your Notion database
 *
 * Usage:
 *   node notion-sync.js path/to/gemini-output.txt [optional-perplexity-url]
 *   OR
 *   cat gemini-output.txt | node notion-sync.js
 *
 * Examples:
 *   node notion-sync.js gemini-output.txt
 *   node notion-sync.js gemini-output.txt https://www.perplexity.ai/search/abc123
 */

require('dotenv').config({ path: '../.env' });
const { Client } = require('@notionhq/client');
const fs = require('fs');

// Initialize Notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

// Validate environment variables
if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
  console.error('Error: Missing environment variables');
  console.error('Make sure NOTION_API_KEY and NOTION_DATABASE_ID are set in your .env file');
  process.exit(1);
}

/**
 * Parse Gemini output and extract idea clusters
 */
function parseGeminiOutput(text, topic) {
  const ideas = [];

  // Split by "Idea [#]:" or "**Idea [#]:**" pattern (handles markdown bold)
  const ideaBlocks = text.split(/\*\*Idea \[\d+\]:|Idea \[\d+\]:|Idea \d+:/);

  // Skip the first element (header content before first idea)
  for (let i = 1; i < ideaBlocks.length; i++) {
    const block = ideaBlocks[i];

    // Extract working title (first line, remove any leading **)
    let workingTitle = block.match(/^\s*\*?\*?([^\n*]+)/)?.[1]?.trim() || '';
    // Remove trailing ** if present
    workingTitle = workingTitle.replace(/\*\*$/, '').trim();

    const coreThesis = block.match(/\*\*Core thesis[^:]*:\*\*\s*([^\n]+)/i)?.[1]?.trim() || '';
    const symptom = block.match(/\*\*Symptom[^:]*:\*\*\s*([^\n]+)/i)?.[1]?.trim() || '';
    const competitiveGap = block.match(/\*\*Competitive gap[^:]*:\*\*\s*([^\n]+)/i)?.[1]?.trim() || '';
    const hook = block.match(/\*\*Potential hook[^:]*:\*\*\s*([^\n]+)/i)?.[1]?.trim() || '';
    const supporting = block.match(/\*\*Supporting evidence[^:]*:\*\*\s*([^\n]+)/i)?.[1]?.trim() || '';
    const action = block.match(/\*\*What[^:]*:\*\*\s*([^\n]+)/i)?.[1]?.trim() || '';

    if (workingTitle) {
      ideas.push({
        workingTitle,
        coreThesis,
        symptom,
        competitiveGap,
        hook,
        supporting,
        action,
        topic
      });
    }
  }

  return ideas;
}

/**
 * Create a page in Notion database
 */
async function createNotionPage(idea, score = 10) {
  try {
    // Build properties object - only include fields that have content
    const properties = {
      'Working Title': {
        title: [{ text: { content: idea.workingTitle } }]
      },
      'Topic': {
        select: { name: idea.topic }
      },
      'Status': {
        select: { name: 'Research Complete' }
      },
      'Score': {
        number: score
      }
    };

    // Add optional text properties if they exist
    if (idea.coreThesis) {
      properties['Core Thesis'] = {
        rich_text: [{ text: { content: idea.coreThesis } }]
      };
    }

    if (idea.symptom) {
      properties['Symptom Reader Recognizes'] = {
        rich_text: [{ text: { content: idea.symptom } }]
      };
    }

    if (idea.competitiveGap) {
      properties['Competitive Gap'] = {
        rich_text: [{ text: { content: idea.competitiveGap } }]
      };
    }

    if (idea.action) {
      properties['What Reader Walks Away Able to Do'] = {
        rich_text: [{ text: { content: idea.action } }]
      };
    }

    // Optional properties that may not exist in all databases
    if (idea.hook) {
      properties['Potential Hook'] = {
        rich_text: [{ text: { content: idea.hook } }]
      };
    }

    if (idea.supporting) {
      properties['Supporting Evidence'] = {
        rich_text: [{ text: { content: idea.supporting } }]
      };
    }

    // Try to add date if the property exists
    try {
      properties['Date Added'] = {
        date: { start: new Date().toISOString().split('T')[0] }
      };
    } catch (e) {
      // Date Added property doesn't exist, skip it
    }

    // Add Research Source URL if provided
    if (idea.researchSourceUrl) {
      properties['Research Source'] = {
        url: idea.researchSourceUrl
      };
    }

    // Add Notes if provided
    if (idea.notes) {
      properties['Notes'] = {
        rich_text: [{ text: { content: idea.notes } }]
      };
    }

    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties
    });

    console.log(`✓ Added: ${idea.workingTitle}`);
    return response;
  } catch (error) {
    console.error(`✗ Failed to add: ${idea.workingTitle}`);
    console.error(error.message);
    return null;
  }
}

/**
 * Main function
 */
async function main() {
  // Get input (file path or stdin)
  let input;
  const filePath = process.argv[2];
  const researchSourceUrl = process.argv[3]; // Optional: Perplexity URL or research source

  if (filePath) {
    try {
      input = fs.readFileSync(filePath, 'utf8');
    } catch (error) {
      console.error(`Error reading file: ${filePath}`);
      console.error(error.message);
      process.exit(1);
    }
  } else if (!process.stdin.isTTY) {
    // Read from stdin
    const chunks = [];
    for await (const chunk of process.stdin) {
      chunks.push(chunk);
    }
    input = Buffer.concat(chunks).toString('utf8');
  } else {
    console.error('Usage: node notion-sync.js <file-path> [research-source-url]');
    console.error('   OR: cat file.txt | node notion-sync.js');
    process.exit(1);
  }

  // Detect topic from input
  let topic = 'Messaging Consistency'; // default
  if (input.toLowerCase().includes('positioning in the ai era')) {
    topic = 'Positioning in the AI Era';
  } else if (input.toLowerCase().includes('sales enablement')) {
    topic = 'Sales Enablement';
  }

  console.log(`\nParsing Gemini output for topic: ${topic}\n`);

  // Parse ideas
  const ideas = parseGeminiOutput(input, topic);

  if (ideas.length === 0) {
    console.error('No ideas found in input. Make sure the format matches Gemini output.');
    process.exit(1);
  }

  console.log(`Found ${ideas.length} ideas\n`);

  // Push to Notion
  for (const idea of ideas) {
    // Add research source URL if provided
    if (researchSourceUrl) {
      idea.researchSourceUrl = researchSourceUrl;
    }
    await createNotionPage(idea);
    // Rate limit: wait 1 second between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log(`\n✓ Successfully synced ${ideas.length} ideas to Notion`);
  console.log(`View them at: https://notion.so/${databaseId.replace(/-/g, '')}`);
}

main().catch(console.error);
