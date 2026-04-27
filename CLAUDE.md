# CLAUDE.md

This file governs how Claude works on The Narrative Pivot content workflow.
Load this file at the start of every session.

## Project Overview

The Narrative Pivot is a Substack newsletter by Neera targeting B2B SaaS founders and business leaders who need help with messaging, positioning, and internal alignment. This workflow exists to help produce original, voice-consistent posts that teach something useful without regurgitating what existing PMM creators have already covered.

## Directory Structure
```
skills/
├── core/                  # Active workflow stages (Stages 3-9)
│   ├── voice.txt           # Voice rules -- load at every stage
│   ├── outline.txt         # Stage 3
│   ├── editorial.txt       # Stage 5 & 9
│   ├── line-edit.txt       # Stage 6
│   ├── suggestion.txt      # Stage 7
│   └── relevance.txt       # Stage 8
├── research/              # Pre-Claude research workflows
│   ├── research-messaging.md          # Messaging consistency
│   ├── research-positioning.md        # Positioning in AI era
│   └── research-sales-enablement.md   # Sales enablement
├── docs/                  # Documentation
│   ├── notion-database-schema.md      # Notion setup guide
│   └── api-setup-guide.md             # API access instructions
└── archive/               # Deprecated workflows
    ├── ideation.md                    # Replaced by research workflows
    ├── competitive-check.md           # Replaced by Gemini analysis
    └── content-generator.md           # Replaced by research workflows
```

## Workflow Stages

### Pre-Claude: Research & Idea Generation

**Run weekly** to refresh your idea pipeline. Choose one research workflow based on your current focus:

- **skills/research/research-messaging.md**: Messaging consistency across the brand
- **skills/research/research-positioning.md**: Positioning in the AI era
- **skills/research/research-sales-enablement.md**: Sales enablement

Each research workflow follows: **Perplexity** (research) → **Gemini** (analysis & clustering) → **Notion** (storage & selection)

You review validated ideas in Notion and pick one to develop.

---

### Claude Workflow (Stages 3-9)

Once you've selected an idea from Notion, bring it into Claude and start at Stage 3.

Every post follows these stages in order. Do not skip stages.

**Stage 3: Outline**
Input: Selected idea from Notion + your brain dump/lived experience
Skill: skills/core/outline.txt
Output: section-by-section outline with gaps explicitly flagged

**Stage 4: First Draft**
Input: completed outline from Stage 3
Skill: skills/core/voice.txt
Output: full first draft written in Neera's voice, which she then edits to refine voice and style
After Stage 4: Neera runs the edited draft through external sources (e.g., Gemini) and brings those findings back with the draft before Stage 5.

**Stage 5: Editorial Pass**
Input: Neera's voice-edited draft from Stage 4, plus any external feedback gathered after Stage 4
Skill: skills/core/editorial.txt
Output: structural and grammatical feedback only -- no rewrites, no line edits

**Stage 6: Line Edit**
Input: revised draft after Stage 5
Skill: skills/core/line-edit.txt
Output: flagged language issues across the full post (are we using the right tense accurately?)

**Stage 7: Suggestion Pass**
Input: flagged sections from Stage 6
Skill: skills/core/suggestion.txt
Output: suggested rewrites shown as options to accept, edit, or reject

**Stage 8: Relevance Check**
Input: near-final draft
Skill: skills/core/relevance.txt
Output: honest assessment from the target reader's perspective

**Stage 9: Final Pass**
Input: final draft
Skill: skills/core/editorial.txt
Output: last check on thesis clarity, hook payoff, and ending resolution

## Global Rules

These apply at every stage regardless of which skill is active:

- Always load skills/core/voice.txt before doing any work
- Never rewrite Neera's content without being asked (except at Stage 4 where Claude creates the first draft)
- When suggesting rewrites, always show them as options to accept, edit, or reject -- never apply them directly
- Flag issues clearly with the specific location in the draft
- Do not skip stages -- follow the workflow in order (structure before language, language before polish)
- If a stage has not been completed, flag it before moving on

## Invoking Skills

### For Research (Pre-Claude)

Open the relevant research workflow file and follow the prompts for Perplexity and Gemini:

- `/research-messaging` for messaging consistency ideas
- `/research-positioning` for AI positioning ideas
- `/research-sales-enablement` for sales enablement ideas

Run weekly to keep your Notion pipeline fresh.

### For Claude Workflow (Stages 3-9)

Start each session by stating which stage you are in. Example:

```
Stage 3: Outline. Here's my selected idea from Notion:

Working Title: [paste]
Core Thesis: [paste]
Symptom Reader Recognizes: [paste]
Competitive Gap: [paste]
What Reader Walks Away Able to Do: [paste]

[Add your brain dump, observations, or lived experience here]
```

Or for later stages:

```
Stage 5: editorial pass. Here is my draft: [paste draft]
```

Claude will load the relevant skill file and apply it to your input.