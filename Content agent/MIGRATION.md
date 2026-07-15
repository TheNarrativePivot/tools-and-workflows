# Migration notes (delete this file once done)

## One-time setup
1. Move this folder to /Users/nemo/Documents/the-narrative-pivot/content-loop/
2. `git init`, first commit, create a PRIVATE GitHub repo, push.
3. Separately: make TheNarrativePivot/tools-and-workflows private (or strip substack/ from it). It is currently public and contains an unpublished draft, the feedback archive, and the ICP doc.
4. Delete substack/ from tools-and-workflows once this repo is live. One home, not two.

## What changed from the old structure
- workflow/*.txt migrated to numbered .md files matching their internal stage numbers (3, 5, 6, 7, 8, 9). Content untouched.
- New stage files: 00 (session protocol), 01 (capture + weekly ideas), 02 (competitive check), 04 (drafting, extracted from the Stage 4 block that lived at the bottom of voice.txt), 10 (close the loop).
- voice.txt became voice/voice-guide.md with the Stage 4 Google Doc block removed (now in 04-draft.md). Nothing else changed.
- Old posts/CLAUDE.md replaced by the new root CLAUDE.md. Its snapshot/diff machinery is retired: Git replaces it. The repeatable editing checklist from the old CLAUDE.md overlaps stages 5-9; if anything from it is missed in practice, add it to the relevant stage file via the approval rule.
- ICP docx converted to reference/icp-reference.md (verify the conversion reads correctly).
- research/*.md moved to reference/pillars/ unchanged. Perplexity/Gemini sourcing update is a v2 item.
- Issue 3 archived under posts/issue-03-homepage-audit/ without its snapshot file.

## First session checklist
1. Open Claude Code in this folder, say "read the session protocol and report state."
2. Verify the Google Drive MCP tools are available in Claude Code (stage 4 and stage 10 depend on them). If not, connect Drive before drafting anything.
3. Skim reference/icp-reference.md for docx conversion artifacts.
4. Review voice/swipe-file.md seed rules: reject any that don't ring true. It's your file.
