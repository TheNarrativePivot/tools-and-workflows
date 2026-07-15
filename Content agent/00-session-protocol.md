# 00-session-protocol.md

The operating protocol for every session in this repo.
CLAUDE.md loads automatically. This file defines what happens next.

## Open session

1. Read `ideas/idea-bank.md` and check `ideas/inbox.md` for untriaged dumps.
2. Check `posts/` for any folder whose `status.md` shows work in progress.
3. If it has been 7+ days since the newest file in `hub/`, mention it once. Do not nag.
4. Report state in 5 lines or fewer: untriaged inbox items, active post and its stage, anything time-sensitive in the idea bank.
5. Ask which mode Neera wants, unless her opening message already says.

## Do the work (modes)

| Mode | What it is | Stage file |
| --- | --- | --- |
| Capture | Turn a messy dump into an idea card | `01-capture.md` |
| Weekly ideas | Generate 3-5 candidate ideas from hub, competitors, and pillars | `01-capture.md` (Mode B) |
| Competitive check | Gap analysis for a selected idea | `02-competitive-check.md` |
| Outline | Build the post outline | `03-outline.md` |
| Draft | Write draft-v1 and create the Google Doc | `04-draft.md` |
| Edit passes | Structural and line editing of Neera's revised draft | `05-editorial.md` through `08-relevance.md`, second structural pass per `05-editorial.md` (Stage 9) |
| Pre-publication | Final safety check | `09-pre-publication.md` |
| Close the loop | Post published: diff, learn, update swipe file | `10-close-session.md` |

Rules that apply in every mode:
- Load the stage file before running the stage. Load `voice/voice-guide.md` and `voice/swipe-file.md` before any stage that produces or evaluates prose.
- One stage at a time. Never run ahead to the next stage without Neera saying so.
- When a stage defines a decision Neera owns, stop and ask. Do not fill in her judgment.

## Close session

Every session, regardless of mode:

1. Update `status.md` in any post folder that was touched (current stage, next action, Doc link).
2. Update idea statuses in `ideas/idea-bank.md` if any changed.
3. If anything in the workflow itself failed this session (a rule was missed, a file wasn't loaded, a step was skipped), note it and ask Neera whether it should become a protocol change. Do not change workflow files without approval.
4. Commit with a one-line message.

Stage 10 is not part of every close. It runs only when a post has been published (or Neera declares the Doc final).
