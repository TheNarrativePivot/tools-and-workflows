# 01-capture.md

Stage 1 of The Narrative Pivot workflow.

## Purpose

To get ideas out of Neera's head and into the idea bank with as little friction as possible. Neera's ideas are the front door of this system. Weekly generated ideas are a supplement, never the main source.

This stage has two modes.

---

## Mode A: Capture Neera's idea (primary)

### Input

Anything messy: a voice-dump transcript, a few sentences typed after a founder call, a half-formed thought, a pasted note from `ideas/inbox.md`. Neera should never have to structure an idea before saving it.

### What Claude does

1. Apply the privacy rule FIRST (CLAUDE.md rule 6). Strip company names, identifying metrics, and client-identifying product details before anything is written to disk. If something was stripped, say what kind of thing was removed.
2. Turn the dump into an idea card (format below). Fill fields from what Neera said. Where a field is a guess, mark it `(guess)`. Where there is nothing to go on, leave it blank. Do not invent a thesis Neera didn't imply.
3. Read the existing idea bank. If the new idea overlaps or combines with an existing card, say so and ask whether to merge.
4. Append the card to `ideas/idea-bank.md` and confirm in one line.

### Idea card format

```
## [short title]
- Raw idea: [the unpolished thought, in Neera's words as much as possible]
- Source: [founder call (anonymized) / event / competitor content / subreddit / personal observation / generated]
- Pillar: [Messaging / Positioning / Sales Enablement / Customer Research]
- Audience: [who this is for]
- Possible thesis: [the likely argument, or blank]
- Why now: [or blank]
- Content type: [Substack post / other]
- Confidence: [low / medium / high]
- Status: [inbox / developing / brief-ready / drafted / published / archived]
- Captured: [date]
```

### Human judgment checkpoint

Neera decides whether the idea is worth saving and whether it is safe to store. If anything in the dump feels borderline on privacy, ask before writing it.

---

## Mode B: Weekly idea generation (supplement)

Run only when Neera asks for it.

### Input

- The newest file in `hub/` (if any)
- Recent entries in `competitors/*.md` (added since the last idea-generation run)
- The pillar file(s) in `reference/pillars/` relevant to what surfaces
- The current idea bank (to avoid proposing what already exists)

### What Claude does

1. Read the inputs above. Note which competitor files and hub entries were actually read, with dates.
2. Propose 3 to 5 candidate ideas maximum. Each as a draft idea card with Source: generated.
3. For each, state in one line why Neera specifically should write it (differentiation), not just why it is topical.
4. Any claim about what competitors are NOT covering is a hypothesis, not a finding. Label it as one and name the sample it is based on ("based on the 6 Fletch entries from June"). Neera verifies; she reads this discourse daily and Claude only sees the folder.
5. Write nothing to the idea bank until Neera picks. Discard the rest without ceremony.

### Human judgment checkpoint

Neera selects which generated ideas, if any, enter the bank. Zero is a valid answer.
