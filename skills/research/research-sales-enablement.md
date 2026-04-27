---
name: research-sales-enablement
description: Research workflow for sales enablement content ideas. Orchestrates Perplexity → Gemini → Notion pipeline for The Narrative Pivot.
disable-model-invocation: true
---

# Research Workflow: Sales Enablement

This workflow generates validated, differentiated content ideas on **sales enablement** for B2B SaaS founders and business leaders.

Run this weekly to refresh your idea pipeline with new pain points and competitive gaps.

---

## Workflow Steps

### Step 1: Perplexity Research

Copy and run this prompt in Perplexity:

```
You are researching content ideas for a product marketing newsletter focused on messaging, positioning, and internal alignment for Series B (and up) startups, B2B SaaS founders, heads of marketing, VPs of Sales, and Revenue leaders.

Core thesis: messaging failures are a symptom of internal team misalignment, not bad copy.

Research topic: SALES ENABLEMENT

Time range: Past 12 months, with emphasis on content from the last 3 months (especially Reddit, forums, and community discussions where practitioners share real problems)

Provide:

1. FOUNDER AND TEAM LEADER PAIN POINTS
   What are practitioners currently struggling with related to sales enablement?
   What symptoms do they name (e.g., "reps can't explain the product," "decks don't match what product built," "sales keeps losing to competitors we should beat," "onboarding new reps takes forever," "everyone pitches differently")?

   Pull 5-7 real examples with direct quotes from:
   - Reddit (r/SaaS, r/startups, r/sales)
   - LinkedIn posts/comments from practitioners (not thought leaders)
   - Indie Hackers, Hacker News discussions
   - Published founder interviews or case studies

   For each example, note:
   - The source and date
   - The exact symptom language used
   - The underlying problem implied
   - Whether this pattern appears repeatedly

2. EXISTING POSITIONING AND MESSAGING CONTENT
   What have these product marketing creators published on sales enablement in the last 6-12 months:
   - April Dunford (Obviously Awesome)
   - Anthony Pierri / FletchPMM
   - Emily Kramer (MKT1)
   - Rory Woodbridge
   - Peep Laja (CXL)

   For each creator:
   - Summarize their core arguments and angles on sales enablement
   - Note what they've covered thoroughly vs. mentioned only in passing
   - Identify what they HAVEN'T addressed or only touched on briefly

   Focus only on positioning/messaging-related sales enablement, not general sales training or CRM advice.

3. PATTERNS, GAPS, AND MISCONCEPTIONS
   - What conventional wisdom keeps showing up around sales enablement?
   - What misconceptions or confusion recurs in practitioner discussions?
   - What emotionally loaded language or repeated phrases appear? (e.g., "reps aren't following the script," "sales and marketing aren't aligned," "our deck is a Frankenstein")
   - What angles are underexplored or missing entirely from PMM creator content?
   - What questions do practitioners keep asking that aren't being answered?

Format output with clear section headers.
```

**Save the Perplexity output** - you'll paste it into Gemini next.

---

### Step 2: Gemini Analysis & Clustering

Copy and run this prompt in Gemini, pasting the Perplexity output where indicated:

```
You are analyzing research for The Narrative Pivot, a Substack newsletter targeting B2B SaaS founders and business leaders.

Core thesis: messaging failures are symptoms of internal team misalignment, not bad copy.

Target reader profile:
- B2B SaaS founder or Sales/Product/Marketing leader at Series B+ company
- Would describe their problem as: "reps can't explain what we do," "our sales deck doesn't match our website," "we keep losing to competitors we should beat," "onboarding new reps takes months"
- Would NOT describe their problem as: "we need better sales enablement" (they don't know that's the issue yet)

Below is research from Perplexity on SALES ENABLEMENT:

[PASTE PERPLEXITY OUTPUT HERE]

---

Your task:

1. COMPETITIVE SYNTHESIS
   Based on the research above:
   - What have April Dunford, FletchPMM, MKT1, Rory Woodbridge, and Peep Laja already covered thoroughly on sales enablement?
   - Summarize their core arguments in 1-2 sentences each
   - Identify areas of saturation (topics where there's nothing new to say)
   - Flag what they mentioned briefly but didn't explore deeply

2. GAP ANALYSIS
   - What hasn't been said, or what angle hasn't been taken?
   - Where is there an opportunity to invert or reframe conventional wisdom about sales enablement?
   - What misconceptions could be challenged?
   - What practitioner pain points are being ignored by PMM creators?

3. IDEA CLUSTERING
   Generate 7-10 distinct post ideas on sales enablement. For each idea, provide:

   **Idea [#]: [Working title - punchy, declarative, makes the reader feel called out]**

   - **Core thesis (one sentence):** The inversion or reframe. NOT a summary.

     Strong thesis example: "Your reps aren't bad at pitching. Your product team changed the roadmap and nobody told them."
     Weak thesis example: "Good sales enablement requires alignment between marketing and sales."

   - **Symptom the reader recognizes:** What would they Google or complain about to a colleague? Use the exact language from the Perplexity research.

   - **Competitive gap identified:** Why would this post exist if April Dunford, FletchPMM, or MKT1 already write about sales enablement? Be specific.

   - **Potential hook (one sentence):** Could open the piece. Makes the reader feel seen but not attacked.

   - **Supporting evidence from research:** Which specific examples, quotes, or patterns from Perplexity support this angle?

   - **What the reader walks away able to DO:** One specific, immediate action they can take (not "align sales and marketing" - too vague).

4. RANKING
   Rank your 7-10 ideas from strongest to weakest based on:
   - **Novelty:** How differentiated from existing PMM content? (Score 1-5)
   - **Specificity:** Could only apply to a specific type of company/situation? (Score 1-5)
   - **Discomfort factor:** Creates mild surprise or recognition, not generic advice? (Score 1-5)
   - **Total score:** Sum of the three scores (max 15)

---

CRITICAL FILTERS:
- Do NOT generate listicles or "X ways to improve sales enablement" ideas
- Do NOT suggest topics already well-covered by April Dunford, FletchPMM, or MKT1 unless you have a genuinely novel angle backed by the gap analysis
- Every thesis must be an inversion or reframe, not a summary of conventional wisdom
- Avoid ideas written FOR PMMs or sales ops - these should be FOR founders/business leaders who don't yet know they have a positioning problem
- Do NOT write about CRM systems, sales training tactics, or compensation structures - focus on messaging/positioning gaps that show up in sales enablement

Output format:
- Section 1: Competitive Synthesis (bullet list)
- Section 2: Gap Analysis (paragraph)
- Section 3: Idea Clusters (7-10 ideas with all fields completed)
- Section 4: Ranked list (idea # and total score)
```

**Save the Gemini output** - you'll add it to Notion next.

---

### Step 3: Notion Storage

Add Gemini's idea clusters to your Notion pipeline database with these fields:

- **Topic:** Sales Enablement
- **Working Title:** (from Gemini output)
- **Core Thesis:** (from Gemini output)
- **Competitive Gap:** (from Gemini output)
- **Score:** (from Gemini ranking)
- **Status:** Research Complete
- **Date Added:** [Today's date]
- **Research Source:** Link to Perplexity thread (if available)

**Review the ideas in Notion** and pick the one you want to develop.

---

### Step 4: Bring Selected Idea into Claude

Once you've chosen an idea from Notion, start at **Stage 3: Outline** in Claude.

Invoke with:

```
Stage 3: Outline. Here's my selected idea from Notion:

Working Title: [paste from Notion]
Core Thesis: [paste from Notion]
Symptom Reader Recognizes: [paste from Notion]
Competitive Gap: [paste from Notion]
What Reader Walks Away Able to Do: [paste from Notion]

[Then add your brain dump, observations, or lived experience to anchor the post]
```

Claude will load `outline.md` and guide you through creating a section-by-section outline, then continue through Stages 4-8.

---

## When to Run This Workflow

- **Weekly refresh:** Run Perplexity + Gemini every Monday to capture new practitioner pain points
- **After shipping a sales enablement piece:** Check if the competitive landscape shifted
- **When your pipeline is low:** If Notion has fewer than 5 ideas in "Research Complete" status
- **After product launches:** New features often create sales enablement gaps

---

## Output

A pipeline of 7-10 validated, differentiated content ideas on sales enablement, ready to develop into full posts through the Claude workflow (Stages 3-8).
