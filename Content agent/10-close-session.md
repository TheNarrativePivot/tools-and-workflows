# 10-close-session.md

Stage 10 of The Narrative Pivot workflow.
Runs once per post, after publication (or when Neera declares the Doc final).
This is the highest-value stage in the system. Without it, Neera corrects the same things forever. With it, each correction becomes part of the next run.

## Purpose

To compare Claude's frozen first draft against what Neera actually published, extract the durable lessons, and update the swipe file (and occasionally the voice guide or protocol) with Neera's approval.

## Input

- `posts/<slug>/draft-v1.md` (frozen baseline)
- The final Google Doc (fetched, not pasted)
- `voice/swipe-file.md` (current state)
- Neera's optional comments on why she changed things

## What Claude does

### 1. Fetch the final

Pull the post's Google Doc using the Drive read tool and save its text as `posts/<slug>/final.md`. Then confirm with Neera in one line: "This is the version you published, correct?" Do not proceed on an unconfirmed final. If the Doc was abandoned and she published something else, get the published text from her before diffing. A diff against the wrong final teaches the swipe file wrong lessons, which is worse than no lesson.

### 2. Diff and categorize

Compare draft-v1.md against final.md. Ignore trivial wording churn. Look for patterns that would make the next draft closer to what she published. Organize meaningful changes into:

1. Voice and tone changes
2. Structure changes (sections cut, moved, added)
3. Specificity changes (where she replaced general claims with concrete examples, numbers, named scenarios)
4. Product marketing judgment changes (where she corrected the thinking, not the writing)
5. Phrases or patterns she removed
6. Phrases, moves, or structures she added that are worth reusing
7. Protocol failures, if any (a stage skipped a rule, a file wasn't loaded, the outline was ignored)

### 3. Propose swipe file updates

For each proposed lesson, show:

- Claude's version (short excerpt from draft-v1)
- Neera's version (short excerpt from final)
- What changed and why it likely matters
- Proposed destination: swipe file observation, swipe file active rule, voice guide, or protocol
- Rule or one-off? A pattern seen for the first time is an OBSERVATION, not a rule.

Propose 3 to 7 lessons maximum per post. If there are more candidates, pick the ones with the clearest pattern value. A swipe file that grows by 15 entries per post is noise by post four.

### 4. Wait for approval, then write

Neera approves, revises, or rejects each item. Only then write to the files:

- Approved observations go to the swipe file's Observation Queue with the post slug as evidence.
- An observation already in the queue that recurs in this postmortem gets promoted to Active Rules (two sightings minimum for promotion).
- Voice guide and protocol changes are rarer and need her explicit sign-off on exact wording.
- Save the full analysis as `posts/<slug>/postmortem.md`.

### 5. Prune check

If Active Rules exceeds 25, propose merges or retirements before adding anything new. Every rule added past that point should displace a weaker one.

## Human judgment checkpoint

Neera decides which lessons are true and durable. Her criteria: Did this edit reflect my actual voice or was it a one-off fix? Would this help the next draft? Is the rule too broad? Does it conflict with an existing rule? If she rejects a lesson, it is discarded without argument.

## Output

- `posts/<slug>/postmortem.md`
- Approved updates written to `voice/swipe-file.md` (and rarely voice-guide.md or workflow files)
- `status.md` updated to published

## Next step

The published post's final.md becomes a candidate exemplar. Every 3 to 4 posts, ask Neera whether the current exemplar set in `voice/exemplars/` still represents her best and most recent voice, and rotate if not.
