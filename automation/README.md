# Automation Scripts for The Narrative Pivot

Automates syncing Gemini's idea clusters to your Notion database.

---

## Setup

### 1. Install Node.js

Make sure you have Node.js installed (v18 or higher):

```bash
node --version
```

If not installed, download from: https://nodejs.org/

---

### 2. Install Dependencies

```bash
cd automation
npm install
```

This installs:
- `@notionhq/client` - Official Notion API client
- `dotenv` - Loads environment variables from .env

---

### 3. Configure Your Credentials

Edit `/Users/nemo/Documents/the-narrative-pivot/.env` and add:

```
NOTION_API_KEY=secret_your_actual_token_here
NOTION_DATABASE_ID=your_actual_database_id_here
```

**How to get these:**
- **NOTION_API_KEY**: https://www.notion.so/my-integrations (create integration → copy token)
- **NOTION_DATABASE_ID**: Open your database → copy the long string from the URL

See `../skills/docs/api-setup-guide.md` for detailed instructions.

---

### 4. Test Your Connection

```bash
npm run test
```

This verifies:
- Your API key is valid
- Your database ID is correct
- The integration has access to your database

**Expected output:**
```
✓ NOTION_API_KEY found
✓ NOTION_DATABASE_ID found
✓ Successfully connected to database
✓ Database name: Content Idea Pipeline
✓ All tests passed!
```

---

## Usage

### Option 1: From a File

Save Gemini's output to a text file, then:

```bash
node notion-sync.js gemini-output.txt
```

### Option 2: From Clipboard

Copy Gemini's output, then:

```bash
pbpaste | node notion-sync.js
```

### Option 3: Direct Paste

```bash
node notion-sync.js << 'EOF'
[paste Gemini output here]
EOF
```

---

## What It Does

1. **Parses** Gemini's idea clusters
2. **Extracts** all fields:
   - Working Title
   - Core Thesis
   - Symptom Reader Recognizes
   - Competitive Gap
   - Potential Hook
   - Supporting Evidence
   - What Reader Walks Away Able to Do
3. **Creates** a new page in Notion for each idea
4. **Sets** status to "Research Complete"
5. **Adds** today's date

---

## Expected Gemini Output Format

The script expects Gemini output formatted like:

```
Idea 1: Your Working Title Here

- **Core thesis:** The one-sentence inversion or reframe.
- **Symptom the reader recognizes:** What they'd Google.
- **Competitive gap identified:** Why this post exists.
- **Potential hook:** One sentence that could open the piece.
- **Supporting evidence:** Quotes or patterns from Perplexity.
- **What the reader walks away able to DO:** One specific action.

Idea 2: Another Working Title
...
```

---

## Troubleshooting

### "No ideas found in input"
- Make sure Gemini's output follows the format above
- Check that ideas are labeled "Idea 1:", "Idea 2:", etc.

### "Failed to add: [idea title]"
- Check that all Select property options exist in Notion:
  - Topic: `Messaging Consistency`, `Positioning in the AI Era`, `Sales Enablement`
  - Status: `Research Complete`

### Rate limit errors
- The script waits 1 second between requests (Notion limit: 3 req/sec)
- If you see rate limit errors, increase the delay in notion-sync.js

---

## Next Steps

Once ideas are in Notion:

1. Open your **"Ready to Write"** view
2. Sort by **Score** to see top ideas
3. Pick one and change status to **"Outlining"**
4. Copy the idea details into Claude to start Stage 3

See `../CLAUDE.md` for the full workflow.
