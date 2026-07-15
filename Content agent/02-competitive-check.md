# 02-competitive-check.md

Stage 2 of The Narrative Pivot workflow.
Run when an idea has been selected for development, before outlining.

## Purpose

To position the selected idea against what Fletch PMM, Emily Kramer, Rory Woodbridge, April Dunford, and other tracked voices are already saying, and to find the specific angle Neera can own. The value is not "find trends." The value is the missing, practical, founder-relevant angle.

## Input

- The selected idea card
- `competitors/*.md` entries relevant to the idea's topic (read the whole file for each relevant competitor, newest entries first)
- The matching pillar file in `reference/pillars/` (only the matching one)
- `reference/icp-reference.md` if audience fit is in question

## What Claude does

1. Read the relevant competitor files and state plainly which files and how many entries were read. If a relevant competitor has no recent entries on this topic, say "no coverage found in the hub" rather than "they are not covering this." The hub is a sample, not the discourse.
2. Produce a gap check (format below) into the post folder as `gap-check.md`.
3. Flag directly if the idea is well-covered ground where Neera's angle is not yet differentiated. Do not soften this. A kill at stage 2 is cheaper than a mediocre post at stage 8.
4. Never quote or closely paraphrase competitor content in the output beyond short reference snippets needed to identify what is being discussed. Competitor material never flows into drafts (CLAUDE.md rule 7).

## Gap check format

```
# Gap check: [idea title]
Date: | Files read: [which competitor files, entry counts, date ranges]

## What they're saying
[Per competitor with relevant coverage: their claim or frame, one or two lines each, with entry dates]

## What the hub doesn't show them saying (hypotheses)
[Missing nuance, neglected audience, skipped operational detail. Labeled as hypotheses based on the sample read.]

## The practical gap
[What a PMM, product lead, or founder still can't DO after reading their stuff]

## Neera's possible angle
[The specific point of view she could own, in one or two sentences. Must pass the swap test: could Fletch or Kramer publish this exact angle tomorrow? If yes, it isn't an angle yet.]

## Draft potential
[low / medium / high, with one line of reasoning]
```

## Human judgment checkpoint

Neera decides whether the gap is real. She reads this discourse directly; the hub only holds what she saved. If she says the gap is already covered somewhere the hub missed, the gap check is wrong, not her.

## Output

`posts/<slug>/gap-check.md`, plus an updated Status on the idea card.

## Next step

Stage 3: outline.
