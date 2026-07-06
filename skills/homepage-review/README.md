# Homepage Review Skill

A B2B homepage evaluation skill built for The Narrative Pivot's own audit methodology —
the same 3-question framework published in Issue No. 3, "the accidental homepage audit."

## What It Does

Grades a B2B homepage **A, B, or C** by answering three questions and checking how well
(and where on the page) each is answered:
- **What exactly is this product or service?** — the literal category/type, plus how
  it's positioned (disruptor, consolidation, status-quo alternative).
- **Who is it for?** — is there one clearly named primary buyer, and is it in the hero
  or buried further down the page?
- **Why should the target audience care?** — the "transformation moment": the
  before/after shift, and whether the copy explains *how* the features lead to it.

## Philosophy

- **Specificity over cleverness** — vague, undifferentiated language is penalized
- **Placement matters, not just presence** — a buried right answer scores lower than a
  clear one in the hero
- **One primary buyer beats trying to speak to everyone** — multiple ICPs are a penalty
  unless handled via a clean, clearly-labeled dedicated section (like Semgrep's "Built
  for every role")
- **No hallucinated claims** — every answer must trace to a verbatim quote; unanswered
  questions are reported as unanswered, never guessed at
- **Professional, objective tone** — a low grade is a diagnosis, not a criticism; the
  company being reviewed reads this about their own homepage
- **Copy is king** — visuals help but can't rescue weak copy

## How to Use

```
Review the homepage at https://example.com
```

If the page can't be fetched (JS-heavy site, blocked request, etc.), the skill will ask
you to paste the **entire homepage copy as one block** — not itemized headers/features —
and will infer the structure itself from how the text reads.

The skill will:
1. Fetch the homepage content (or take your pasted copy)
2. Answer the 3 questions with verbatim evidence
3. Assign an overall grade (A/B/C)
4. Generate a SWOT analysis of the current copy, plus 3 prioritized actions to bring back
   to your marketing team

No copy rewrite is generated — that step is left to you.

## Output Format

- Overall grade + one-line summary
- "Applying the Framework" table (the 3 questions, answered in 50 words or fewer each,
  roughly equal in length)
- SWOT analysis of the current copy — one representative highlight per category
  (Strengths, Weaknesses, Opportunities, Threats), each ~40 words, roughly equal length
- 3 things to bring back to your marketing team

## Version History

**v2.2.0** — Tightened length discipline to match the web app: framework table answers
capped at 50 words each (roughly equal length), and each SWOT category reduced from a
list to a single representative highlight (~40 words, roughly equal length across all
four). Matches the web app's fixed-size table rows and 4-square SWOT layout.

**v2.1.0** — Replaced "What Works / What Can Be Better" with a full SWOT analysis, added
the "3 things to bring back to your marketing team" action section, removed the copy
rewrite step (left to the reader), and tightened tone guidance so reports read as
objective and professional rather than critical.

**v2.0.0** — Rebuilt around Neera's own 3-question framework (Issue No. 3), replacing
the v1 Dunford-based structure entirely.
- Single overall A–C grade instead of 4-tier system
- Multi-ICP penalty with the dedicated-section exception
- Placement-aware scoring (hero vs. buried)
- Whole-page-paste fallback instead of itemized copy requests
- Feature-to-outcome causal-link check

**v1.0.0** — Initial build (Hero / "So What?" via Dunford / Full Page / 4-tier system).
Superseded by v2.0.0.
