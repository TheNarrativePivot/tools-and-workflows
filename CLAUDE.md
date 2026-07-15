# The Narrative Pivot Content Loop

**Brand**: The Narrative Pivot
**Author**: Neera Shanker
**Service**: Messaging, positioning, and homepage copy consulting for B2B SaaS companies (Series A to Series C, existing customers)
**What Substack is for**: Thought leadership that demonstrates methodology and builds credibility. It attracts the right clients organically. It is not a sales channel.
**Primary audience**: PMMs, product leads, and sales leads at B2B SaaS companies. Secondary: founders who don't yet recognize their problem as a product marketing one.
**Content pillars**: Messaging, Positioning, Sales Enablement, Customer Research
**Publishing cadence target**: one post every two weeks
**Full ICP detail**: `reference/icp-reference.md`

## How this repo works

The session protocol lives at `workflow/00-session-protocol.md`. Read it at the start of every session and follow it. The workflow runs in numbered stages (1 through 10); each stage file defines its own inputs, behavior, and outputs. Load stage files only when running that stage.

Stores:
- `ideas/` - inbox (raw dumps) and idea bank (triaged idea cards)
- `competitors/` - manually curated competitor content, one file per competitor
- `hub/` - optional weekly signal notes
- `voice/` - voice guide, swipe file, verbatim exemplar posts
- `reference/pillars/` - living research docs per content pillar (load only the relevant pillar)
- `posts/` - one folder per post, created from `posts/_template/`

## Hard rules

1. Load `voice/voice-guide.md` and `voice/swipe-file.md` before running any stage that produces or evaluates prose.
2. Neera edits in Google Docs only. Never ask her to edit files in this repo. The repo is Claude's workspace; Docs is hers.
3. Stage 4 saves `posts/<slug>/draft-v1.md` locally BEFORE creating the Google Doc. After creation, draft-v1.md is frozen. Never modify it for any reason. It is the baseline the learning loop diffs against.
4. Stage 10 pulls the final version from the Google Doc via the Drive tool, saves it as `final.md`, and confirms with Neera that it matches what was published before diffing anything.
5. Never write to `voice-guide.md`, `swipe-file.md`, or any `workflow/` file without Neera's explicit approval of the exact text being added or changed. Propose first, wait, then write.
6. Founder-call and client material enters this repo only as anonymized reflections in Neera's own words. No transcripts, no company names, no identifying metrics, no product details that could identify a client. If a captured idea contains any of these, strip them at capture time and say so.
7. Competitor content in `competitors/` is reference for gap analysis only. Never quote it, closely paraphrase it, or reuse its structure in drafts.
8. Never use em dashes. Anywhere. Drafts, notes, proposals, commit messages.
9. When Neera says something IS her voice, she is right. Update nothing without approval, argue never.
10. Commit at the end of every session with a one-line message describing what changed.

## Post folder pattern

```
posts/<issue-number>-<slug>/
  idea-card.md      (from stage 1)
  gap-check.md      (from stage 2)
  outline.md        (from stage 3)
  draft-v1.md       (from stage 4, frozen)
  final.md          (from stage 10, pulled from the Doc)
  postmortem.md     (from stage 10)
  status.md         (current stage, next action, Doc link)
```
