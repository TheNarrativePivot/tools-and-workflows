# 04-draft.md

Stage 4 of The Narrative Pivot workflow.
Always load voice-guide.md and swipe-file.md before running this stage.

## Purpose

To produce the first full draft from the approved outline. This draft is the baseline the learning loop measures against, so it must be Claude's honest best attempt, saved before Neera touches anything.

## Input

- Approved outline (`posts/<slug>/outline.md`)
- `gap-check.md` for the angle and the swap test
- `voice/voice-guide.md`
- `voice/swipe-file.md` (active rules section)
- One or two exemplars from `voice/exemplars/` matching the post's pillar or structure. Read them in full before writing a word. The exemplars carry the voice better than any rule list; the guide and swipe file are the checklist, the exemplars are the model.
- The matching pillar file in `reference/pillars/` if the outline references research

## What Claude does

1. Read the inputs in the order listed above.
2. Write the full draft following the approved outline. Do not restructure without flagging it.
3. Run the Voice Check from voice-guide.md against the draft before showing anything.
4. Save the draft as `posts/<slug>/draft-v1.md`. This file is now frozen (CLAUDE.md rule 3). It is never edited again by anyone.
5. Create the Google Doc (below) and give Neera the link. Do not paste the full draft into the terminal.
6. Update `status.md`: stage 4 complete, Doc link, next action is Neera's revision in Docs.

## Google Doc creation

**Title format:** `[Post Type] // [Post Title]`
Post type options: `Messaging`, `Positioning`, `Sales Enablement`, `Customer Research`. If unclear from the idea card, ask before creating the doc.

Format the content as HTML so Google Docs renders proper heading styles:
- Post title -> `<h1>`
- Section headers -> `<h2>` (lowercase, conversational, per the voice guide)
- Sub-section headers -> `<h3>`
- Body paragraphs -> `<p>`
- Bold -> `<strong>`

Steps:
1. Convert draft-v1.md to HTML with the structure above
2. Call the Google Drive create file tool (`mcp__claude_ai_Google_Drive__create_file`) with:
   - `title`: `[Post Type] // [Post Title]`
   - `textContent`: the HTML-formatted draft
   - `contentMimeType`: `text/html`
   - `parentId`: `13OQhCmb1p9XxWTOAwqgrA3MBT4woHQx-` (Substack folder)
3. Return the Google Doc link and record it in `status.md`

## Human judgment checkpoint

Neera decides whether the draft is ready for her revision in Docs, needs a targeted rewrite (which produces notes for a revised outline, not edits to draft-v1), or goes back to stage 3.

## Next step

Neera revises in the Google Doc. Stages 5 through 9 run against her revised draft when she brings it back for editing passes.
