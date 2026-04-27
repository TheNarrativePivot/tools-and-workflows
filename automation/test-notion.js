#!/usr/bin/env node
/**
 * Test Notion API Connection
 *
 * Verifies that your Notion API credentials are working
 * Usage: node test-notion.js
 */

require('dotenv').config({ path: '../.env' });
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

async function testConnection() {
  console.log('Testing Notion API connection...\n');

  // Check environment variables
  if (!process.env.NOTION_API_KEY) {
    console.error('✗ NOTION_API_KEY not found in .env file');
    process.exit(1);
  }
  console.log('✓ NOTION_API_KEY found');

  if (!process.env.NOTION_DATABASE_ID) {
    console.error('✗ NOTION_DATABASE_ID not found in .env file');
    process.exit(1);
  }
  console.log('✓ NOTION_DATABASE_ID found');

  // Test database access
  try {
    const response = await notion.databases.retrieve({ database_id: databaseId });
    console.log('✓ Successfully connected to database');
    console.log(`✓ Database name: ${response.title[0]?.plain_text || 'Untitled'}`);
    console.log(`✓ Database URL: https://notion.so/${databaseId.replace(/-/g, '')}`);

    // List properties
    console.log('\nDatabase properties:');
    Object.keys(response.properties).forEach(prop => {
      const type = response.properties[prop].type;
      console.log(`  - ${prop} (${type})`);
    });

    console.log('\n✓ All tests passed! You\'re ready to sync ideas to Notion.');
  } catch (error) {
    console.error('✗ Failed to connect to database');
    console.error('Error:', error.message);
    console.error('\nTroubleshooting:');
    console.error('1. Make sure you created a Notion integration at https://www.notion.so/my-integrations');
    console.error('2. Make sure you connected the integration to your database (click "..." → "Add connections")');
    console.error('3. Make sure your database ID is correct (from the database URL)');
    process.exit(1);
  }
}

testConnection();
