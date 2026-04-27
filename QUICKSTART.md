# Quick Start: Notion Automation Setup

Complete this checklist to automate Gemini → Notion syncing.

---

## ✅ Checklist

### 1. Create Notion Integration (5 minutes)

- [ ] Go to https://www.notion.so/my-integrations
- [ ] Click "+ New integration"
- [ ] Name: "The Narrative Pivot Research"
- [ ] Type: Internal
- [ ] Click "Submit"
- [ ] **Copy the token** (starts with `secret_...`)

### 2. Connect Integration to Database (2 minutes)

- [ ] Open your "Content Idea Pipeline" database in Notion
- [ ] Click "..." menu (top right)
- [ ] Select "Add connections"
- [ ] Find "The Narrative Pivot Research"
- [ ] Click "Confirm"

### 3. Get Database ID (1 minute)

- [ ] Open your "Content Idea Pipeline" database
- [ ] Copy the URL
- [ ] Extract the database ID (the long string between last `/` and `?`)

  Example URL:
  ```
  https://www.notion.so/workspace/abc123def456ghi789?v=xyz
                                  ^^^^^^^^^^^^^^^^^^^
                                  This is your ID
  ```

### 4. Add Credentials to .env File (2 minutes)

- [ ] Open `/Users/nemo/Documents/the-narrative-pivot/.env`
- [ ] Add your credentials:

```
NOTION_API_KEY=secret_paste_your_token_here
NOTION_DATABASE_ID=paste_your_database_id_here
```

- [ ] Save the file

### 5. Install Node.js Dependencies (3 minutes)

Open Terminal and run:

```bash
cd /Users/nemo/Documents/the-narrative-pivot/automation
npm install
```

### 6. Test Your Connection (1 minute)

```bash
npm run test
```

**Expected output:**
```
✓ NOTION_API_KEY found
✓ NOTION_DATABASE_ID found
✓ Successfully connected to database
✓ All tests passed!
```

If you see errors, check:
- Your API key is correct in .env
- Your database ID is correct in .env
- You connected the integration to your database (Step 2)

---

## 🚀 You're Done!

Now when you run Gemini analysis, you can automatically sync ideas to Notion:

```bash
# Save Gemini output to a file
cat gemini-output.txt | node notion-sync.js

# Or from clipboard
pbpaste | node notion-sync.js
```

---

## Next Steps

1. **Run your first research workflow**
   - Open `skills/research/research-messaging.md`
   - Copy the Perplexity prompt and run it
   - Copy the results into the Gemini prompt
   - Save Gemini's output to a file

2. **Sync to Notion**
   ```bash
   node notion-sync.js gemini-output.txt
   ```

3. **Review ideas in Notion**
   - Open "Ready to Write" view
   - Sort by Score
   - Pick your favorite idea

4. **Start Claude workflow**
   - Copy the idea details
   - Start at Stage 3 (Outline)

---

## Troubleshooting

**"Module not found" errors**
```bash
cd automation
npm install
```

**"Permission denied" errors**
```bash
chmod +x notion-sync.js
```

**"Database not found" errors**
- Double-check your database ID in .env
- Make sure you connected the integration (Step 2)

---

## Full Documentation

- **Notion Setup**: `skills/docs/notion-database-schema.md`
- **API Setup**: `skills/docs/api-setup-guide.md`
- **Automation**: `automation/README.md`
- **Workflow**: `CLAUDE.md`
