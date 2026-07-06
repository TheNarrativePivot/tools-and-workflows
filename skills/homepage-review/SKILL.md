---
name: homepage-review
description: Grade a B2B homepage using The Narrative Pivot's 3-question audit framework (what is it, who's it for, why should they care). Use when the user asks to review a homepage, analyze website messaging, evaluate positioning on a website, or critique B2B homepage copy. Use this whenever someone mentions homepage reviews, website analysis, or asks about homepage effectiveness.
version: 2.1.0
---

# Homepage Review Skill

## Purpose
Grade a B2B homepage A, B, or C using Neera's own audit methodology (published as
"the accidental homepage audit," The Narrative Pivot, Issue No. 3) — not a third-party
framework. Every homepage gets **one overall grade**, arrived at by answering three
questions and checking how well (and where) the page answers them.

## Philosophy
- **Specificity over cleverness.** Vague, undifferentiated B2B language is penalized.
- **Placement matters, not just presence.** Answering a question late in the page counts
  for less than answering it in the hero.
- **One primary buyer, named clearly, beats a page that tries to speak to everyone.**
- **No hallucinated claims.** Every answer in the report must be traceable to a verbatim
  quote from the homepage. If a question isn't answered anywhere on the page, say so —
  don't invent an answer.
- **Copy is king.** Visuals help but can't rescue weak copy.
- **Professional, objective tone — always.** The company being reviewed will read this
  report about their own homepage. Every finding is written as an objective analyst
  would: grounded in buyer impact, never dismissive or sarcastic about the company or
  its copy. A low grade is a diagnosis, not a criticism. Never use loaded language like
  "fluff," "buzzword soup," or "jargon-heavy" — describe what the copy does or doesn't
  do, and the effect on a buyer, instead.

## The Evaluation Process

### Step 1: Get the Homepage
Ask for the URL if not provided.

### Step 2: Fetch the Homepage
Use WebFetch to retrieve the homepage content:
```
WebFetch the URL with prompt: "Extract all visible text content from the homepage, in
the order it appears on the page. Include the hero headline and subheadline, all section
headings and body copy, feature descriptions, testimonials/case studies, and any 'Why
[Company]' or differentiation section. Preserve page order."
```

**If the fetch fails, or the returned content is too thin to be real page copy** (a JS
app shell, a bot-block page, near-empty text) — **do not** ask the user to extract and
paste individual elements one by one. That's too much manual work for them. Instead, say
something like:

> "I couldn't read that page directly — mind pasting the full homepage copy here? Just
> select-all/copy the whole page (or as much of the visible text as you can grab) and
> paste it in one block, in the order it appears. I'll figure out what's the hero, what's
> a feature, what's a testimonial, from how it reads."

Then infer structure (hero vs. heading vs. feature vs. testimonial) from the flow,
formatting, and position of the pasted text yourself — the same way a human skimming the
page would. Never ask for headers, subheads, features, and testimonials as separate
itemized inputs.

Print a short witty status line before this step and each step below (see "Progress
Messages").

### Step 3: Answer the 3 Questions

Work through these in order, quoting verbatim evidence for each:

#### 1. What exactly is this product or service?
Two layers, both required for a full answer:
- **The literal category/type** — is it a CRM? an analytics tool for a specific use
  case? a lead-gen tool? a security scanner? Name the actual thing.
- **How it's positioned on top of that** — category disruptor, consolidation of
  multiple tools into one, or an alternative to some status quo/manual process.

Naming only the positioning angle without ever naming the literal product type is not a
complete answer — flag that gap explicitly if it happens.

#### 2. Who is it for?
Is there a clearly named primary buyer (role, team type, or unmistakable natural-language
description a buyer would recognize themselves in)? Note **where** this appears:
- In the hero → strong.
- Only later on the page (you have to scroll to find it) → weaker, even if the eventual
  answer is specific.
- Nowhere → weak.

**Multiple ICPs are a negative signal by default.** The ideal homepage names ONE primary
buyer and doesn't mention other personas at all. The only acceptable exception: a
distinct, clearly-labeled dedicated section (e.g. "Built for every role") that explicitly
explains how *each specific* ICP gets value — not a vague nod to "teams" or "businesses."
Anything short of that clean exception (e.g. the hero itself trying to address several
roles or industries at once) is a penalty, not a neutral pattern.

#### 3. Why should the target audience care?
Look for the "transformation moment" — the before/after shift from the buyer's current
struggle to the outcome they want. This is not the same as a feature list or a benefit
list. Specifically check whether the copy explains **how the features lead to the
outcome** — a common gap is a page that lists what the product does in one place and
what the buyer gets in another, without ever connecting the two causally.

Also look for any competitive/status-quo frame of reference: does the copy indicate what
the buyer would otherwise be doing/using, even without naming a specific competitor?

### Step 4: Assign the Overall Grade

- **Grade A** — hero at least semi-identifies the primary buyer; there's a clear,
  findable transformation moment near the top of the page; if multiple ICPs appear at
  all, it's only via the clean dedicated-section exception above.
- **Grade B** — the real answers exist somewhere on the page (a genuine differentiator,
  a genuine audience), but they're buried below the fold or require hunting; the hero
  itself leans generic even though the substance shows up eventually.
- **Grade C** — one or more of the 3 questions goes unanswered anywhere on the page, the
  hero is generic with no primary buyer named, and/or there's no transformation moment or
  status-quo frame of reference at all.

### Step 5: Generate the Output

Do NOT generate a copy rewrite (no suggested headline/subheadline) — that step is
intentionally left to the reader to do themselves.

## Output Format

```markdown
# Homepage Review: [Company Name]

**Grade: [A/B/C]** — [one-line, objective summary of why]

---

## Applying the Framework

| Question | Answer |
|---|---|
| **What is it?** | [Literal category/type + positioning angle, sourced from the copy. If unanswered anywhere on the page, say so plainly.] |
| **Who's it for?** | [Named buyer, and where on the page it appears — hero vs. buried vs. absent.] |
| **Why should a customer care?** | [The transformation moment if present, or note its absence. Flag if features/outcomes are listed but never causally connected.] |

---

## SWOT: Current Copy

**Strengths**
- "[verbatim quote]" — [why this works]

**Weaknesses**
- "[verbatim quote, or explicit note that this is absent]" — [buyer-impact framing of the gap — never dismissive]

**Opportunities**
- [an underleveraged angle already present in the copy that could be strengthened, e.g. a strong stat that's buried and could be promoted higher]

**Threats**
- [an objective risk created by the current gaps, grounded in general buyer-behavior logic — never a fabricated claim about a specific named competitor]

---

## 3 Things to Bring Back to Your Marketing Team

1. [Concrete, prioritized action specific to this homepage]
2. [Concrete, prioritized action specific to this homepage]
3. [Concrete, prioritized action specific to this homepage]
```

## Progress Messages

Print one of these (or something in the same spirit) before each major step — witty, not
rude, in keeping with the "specificity over cleverness" voice:

- "Pulling up the homepage. Let's see what we're working with."
- "Reading this like a skeptical prospect who's seen 50 of these before."
- "Checking if the hero answers 'what is this' — or just vibes at me."
- "Looking for the one buyer this is actually for (not 'everyone,' please)."
- "Hunting for the transformation moment. The 'so what,' not the feature list."
- "Checking whether the features and the outcomes are actually connected, or just neighbors."
- "Totaling it up and writing the verdict."

## Important Notes

**Grading Philosophy:**
- Be rigorous but fair — vagueness measurably costs buyer comprehension, and the report
  should say so plainly, without editorializing.
- Placement counts: a buried right answer is worth less than a clear one up top.
- One clean primary buyer beats an attempt to cover every persona at once.
- Every claim in the report must trace back to a verbatim quote. If something isn't on
  the page, the report says so — it never fills the gap with an assumption.
- Opportunities and Threats must stay grounded in what is (or isn't) present in the copy,
  or in general, defensible buyer-behavior logic (visitors decide in seconds, buyers
  often compare several tabs at once) — never invented facts about named competitors or
  markets not evidenced in the submitted copy.
- Tone is professional and constructive throughout, including in Weaknesses and Threats —
  the reader is the company being reviewed.

**Edge Cases:**
- If the homepage is for a highly technical/niche product, some jargon is acceptable if
  the target audience actually uses that language day to day.
- If a product genuinely serves multiple teams, check specifically for the
  dedicated-section exception (Step 3, Question 2) before penalizing — but default to
  penalizing if that exception isn't clearly met.

## Reference Files

See `references/homepage-audit-framework.md` for the full worked examples (Hex, Statsig,
Semgrep) that this rubric is calibrated against.
