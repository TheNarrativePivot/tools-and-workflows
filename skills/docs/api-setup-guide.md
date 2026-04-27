# API Setup Guide for Research Workflows

This guide shows you how to get API access for Perplexity, Gemini, and Notion to automate the research workflow.

**Current status:** Manual workflow (copy/paste prompts)
**Future goal:** Automated workflow (one command runs Perplexity → Gemini → Notion)

---

## 1. Perplexity API Setup

### Get API Access

1. Go to: https://www.perplexity.ai/settings/api
2. Sign up for a Perplexity account (if you don't have one)
3. Click **"Get API Key"** or **"Generate API Key"**
4. Copy your API key (starts with `pplx-...`)

### Pricing (as of 2024)

- **Pay-as-you-go**: ~$5 per 1M tokens
- **Pro users**: Get $5/month in API credits included

### Save Your API Key

Store in your environment variables:

```bash
# Add to ~/.zshrc or ~/.bashrc
export PERPLEXITY_API_KEY="pplx-your-key-here"
```

Or save in a `.env` file in your project directory:

```
PERPLEXITY_API_KEY=pplx-your-key-here
```

---

## 2. Gemini API Setup

### Get API Access

1. Go to: https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Select a Google Cloud project (or create a new one)
5. Copy your API key

### Pricing (as of 2024)

- **Free tier**: 60 requests/minute, up to 1M tokens/month
- **Paid tier**: Starts at $0.50 per 1M input tokens

### Save Your API Key

Store in your environment variables:

```bash
# Add to ~/.zshrc or ~/.bashrc
export GEMINI_API_KEY="your-gemini-key-here"
```

Or add to your `.env` file:

```
GEMINI_API_KEY=your-gemini-key-here
```

---

## 3. Notion API Setup

### Create a Notion Integration

1. Go to: https://www.notion.so/my-integrations
2. Click **"+ New integration"**
3. Fill in:
   - **Name**: The Narrative Pivot Research
   - **Associated workspace**: Select your workspace
   - **Type**: Internal
4. Click **"Submit"**
5. Copy the **Internal Integration Token** (starts with `secret_...`)

### Give Integration Access to Your Database

1. Open your **Content Idea Pipeline** database in Notion
2. Click the **"..."** menu (top right)
3. Select **"Add connections"**
4. Find **"The Narrative Pivot Research"** and click **"Confirm"**

### Get Your Database ID

1. Open your Content Idea Pipeline database in Notion
2. Copy the URL - it looks like:
   ```
   https://www.notion.so/your-workspace/DATABASE_ID?v=VIEW_ID
   ```
3. The `DATABASE_ID` is the 32-character string between the last `/` and the `?`

### Save Your Notion Credentials

Store in your environment variables:

```bash
# Add to ~/.zshrc or ~/.bashrc
export NOTION_API_KEY="secret_your-key-here"
export NOTION_DATABASE_ID="your-database-id-here"
```

Or add to your `.env` file:

```
NOTION_API_KEY=secret_your-key-here
NOTION_DATABASE_ID=your-database-id-here
```

---

## 4. Test Your API Access

### Test Perplexity

```bash
curl -X POST https://api.perplexity.ai/chat/completions \
  -H "Authorization: Bearer $PERPLEXITY_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama-3.1-sonar-small-128k-online",
    "messages": [{"role": "user", "content": "Test message"}]
  }'
```

If successful, you'll get a JSON response with a completion.

### Test Gemini

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=$GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"contents":[{"parts":[{"text":"Test message"}]}]}'
```

If successful, you'll get a JSON response with generated content.

### Test Notion

```bash
curl -X POST https://api.notion.com/v1/pages \
  -H "Authorization: Bearer $NOTION_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Notion-Version: 2022-06-28" \
  -d '{
    "parent": {"database_id": "'"$NOTION_DATABASE_ID"'"},
    "properties": {
      "Working Title": {"title": [{"text": {"content": "Test Idea"}}]},
      "Status": {"select": {"name": "Research Complete"}}
    }
  }'
```

If successful, you'll get a JSON response with the created page details.

---

## 5. Next Steps

Once all three APIs are working, you can:

1. **Create automation scripts** (Python, Node.js, etc.) that:
   - Run Perplexity research
   - Feed results to Gemini for analysis
   - Push clustered ideas to Notion automatically

2. **Set up weekly cron jobs** to run research workflows automatically

3. **Build a CLI tool** to run research with one command:
   ```bash
   npm run research-messaging
   ```

---

## Security Best Practices

- **Never commit API keys** to git
- **Add `.env` to `.gitignore`**
- **Use environment variables** instead of hardcoding keys
- **Rotate keys** periodically (especially if shared publicly)

---

## Cost Estimation

For weekly research workflows (3 topics):

- **Perplexity**: ~10K tokens/week = ~$0.05/week = **~$2.50/year**
- **Gemini**: ~50K tokens/week = free tier (1M/month limit)
- **Notion**: Free for personal use

**Total estimated cost: ~$2.50/year** (very affordable)

---

## Troubleshooting

### "Invalid API key" errors

- Double-check you copied the full key (no extra spaces)
- Make sure you're using the right environment variable name
- Try regenerating the key

### Notion "object not found" errors

- Verify you gave the integration access to your database
- Double-check your database ID is correct
- Make sure your database has the required properties (Working Title, Status, etc.)

### Rate limit errors

- Perplexity: Wait 1 minute between requests (free tier)
- Gemini: Wait 1 second between requests (free tier limit: 60/min)
- Notion: Wait 3 seconds between requests (rate limit: 3 requests/second)

---

## Future Automation

Once APIs are set up, you can build:

- **Slack bot** that posts new ideas to a channel
- **Weekly email digest** of top-scored ideas
- **Zapier/Make integration** for no-code automation
- **Custom dashboard** to visualize idea pipeline trends

Let me know when you're ready to automate, and I can help build the integration scripts.
