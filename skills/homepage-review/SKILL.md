---
name: homepage-review
description: Analyze B2B SaaS homepages using The Narrative Pivot's positioning framework. Evaluates specificity, "So What?" moments, and pain-point-driven messaging. Use when the user asks to review a homepage, analyze website messaging, evaluate positioning on a website, or critique B2B SaaS homepage copy. Use this whenever someone mentions homepage reviews, website analysis, or asks about homepage effectiveness.
version: 1.0.0
---

# Homepage Review Skill

## Purpose
Evaluate B2B SaaS homepages against The Narrative Pivot's framework, which prioritizes **specificity over cleverness**, **emotional "So What?" moments**, and **pain-point-driven features** over generic B2B jargon.

## Philosophy

**What makes this different from other frameworks:**
- We don't require competitive comparison on the homepage (many companies won't name competitors publicly)
- We focus on the transformative "So What?" moment that shows emotional understanding of customer pain
- We value depth over breadth: better to nail ONE positioning component deeply than touch all five shallowly
- We penalize generic B2B jargon ("save time," "generate revenue," "AI-powered") heavily
- We grade on natural language recognition: "Would the target buyer immediately see themselves in this copy?"

## The Evaluation Process

### Step 1: Get the Homepage URL
Ask the user for the homepage URL if not provided.

### Step 2: Fetch the Homepage
Use WebFetch to retrieve the homepage content:
```
WebFetch the URL with prompt: "Extract all text content from the homepage, organized by section. Include:
- Header/hero section (headline, subheadline, CTAs)
- All section headings and body copy
- Feature descriptions
- Customer testimonials and case study snippets
- Any 'Why [Company]' or differentiation sections
Preserve the order they appear on the page."
```

### Step 3: Evaluate Using the Framework

Run through these evaluations in order:

#### A. Hero Section Evaluation (Weak/Moderate/Strong)

**Who It's For:**
- **Strong**: Names specific type of team ("data team," "go-to-market teams," "technical teams") or uses natural language that target buyers immediately recognize themselves in. **Note:** Headlines don't always need explicit job titles if the full hero section (headline + subheadline) makes the audience clear and easily inferable.
- **Moderate**: Mentions teams but with some qualifier ("analytical teams," "revenue teams"), or uses a semi-specific term (like "builders") that requires the subheadline to clarify but flows better than forcing explicit job titles
- **Weak**: Generic ("your team," "your whole team," "businesses," "anyone") even after reading the full hero section

**What It Is:**
- **Strong**: Clear product category + function, not generic ("AI analytics platform" alone is weak)
- **Moderate**: Product category mentioned but function unclear
- **Weak**: Vague or overly broad

**Specificity Check - Auto-flag as GENERIC if hero contains:**
- "AI-powered" without specifics on what it powers
- "Save time" or "generate revenue" without quantification
- "For teams" or "for businesses" without role specification
- "Your whole team" / "everyone" / "anyone"
- Buzzwords without substance: "trusted," "powerful," "seamless," "cutting-edge"

**Specificity Check - Flag as SPECIFIC if hero contains:**
- Named job titles/roles or team types
- Named pain points ("rambled thoughts," "manual survey workflows," "hours mapping logic")
- Quantified outcomes ("90% time savings," "hours not weeks")
- Concrete workflows or processes described
- Transformation language ("from X to Y")

#### B. "So What?" Section Analysis

**Step 1: Look for Dedicated Section**
Check if there's a dedicated section that answers "Why should I care?"
- Could be titled "Why [Company]," "What makes us different," etc.
- Or just a clear section addressing customer value
- Note location: near top (ideal) vs. buried at bottom

**Step 2: If No Dedicated Section**
Check if "So What?" is addressed throughout the copy (scattered across features, hero, etc.)

**Step 3: Evaluate Against Dunford's 5 Components**

Grade each component that's present as Weak/Moderate/Strong based on DEPTH and CLARITY:

**1. Competitive Alternatives** - What would customers use instead?

*Weak:*
- "Unlike other tools..." (which tools? what's the difference?)
- "Better than alternatives..." (vague)

*Moderate:*
- Names category ("Unlike traditional survey builders...") but doesn't show specific contrast

*Strong:*
- Clear alternative (status quo, category, OR specific competitor)
- Specific pain point with the alternative
- Clear contrast of what this does differently
- Example: "Unlike manual survey tools where you spend hours mapping conditional logic, Sprig's agent handles all branching automatically"
- **Note:** Doesn't need to name specific competitors—clear comparative points are sufficient

**2. Distinct Capabilities** - What can this do that alternatives cannot?

*Weak:*
- "AI design agent builds the study" (vague, doesn't explain how)

*Moderate:*
- Shows input → output but missing the specific manual work it removes
- Example: "AI design agent builds the study from your questionnaire"

*Strong:*
- Shows specific process (step-by-step)
- Names the exact manual work removed
- Clear transformation
- Example: "AI design agent reads your questionnaire, outlines the mapping logic, and automatically builds the study without manual setup"

**3. Differentiated Value** - What value do these capabilities enable?

*Weak:*
- "Save time on surveys" (generic, no specificity)

*Moderate:*
- Shows transformation but doesn't quantify or specify
- Example: "Move from question to insight faster"

*Strong:*
- Quantified transformation
- Addresses concerns
- Clear value proposition
- Example: "Move from question to defensible insight in hours, not weeks, without compromising research rigor"

**4. Best-Fit Accounts** - What types of companies care most about this value?

*Weak:*
- "For growing companies" (too broad)

*Moderate:*
- Some qualification but not specific
- Example: "For mid-market teams"

*Strong:*
- Specific company type, stage, or situation
- Example: "Enterprise teams moving from manual workflows to scaled research programs"

**5. Market Category** - What context makes your value obvious?

*Weak:*
- Just names a category without context

*Moderate:*
- Provides some context but doesn't make value obvious

*Strong:*
- Context that immediately clarifies the value
- Example: "Studio-quality videos in 160+ languages" (context for global teams)

**Overall "So What?" Grade:**
- **Strong**: If ANY component is graded Strong (better to nail one deeply)
- Include notes about other components present
- Note what's missing

#### C. Full Page Evaluation (Weak/Moderate/Strong)

**Pain-Point-Driven Features:**
- **Strong**: Features explicitly address specific pain points, show transformation, explain how it solves the problem
- **Moderate**: Features mention pain points but don't develop them deeply
- **Weak**: Just feature lists without connection to pain ("here's what it does")

**Interactive Demo or Video:**
- **Strong**: Interactive demo or video showing common use cases, buyers can see themselves using it
- **Moderate**: Static screenshots or basic demo
- **Weak**: No visual demonstration

**Specificity Throughout:**
- Apply same specificity checks as hero section
- Check if copy avoids generic B2B jargon
- Look for concrete examples, customer stories near top of page

**Credibility Signals:**
- Logos, case studies, proof points (should be present but are table stakes)

### Step 4: Assign Overall Tier

**Bare Minimum:**
- Generic headline that lightly describes product/audience
- Feature/benefit callouts (just lists)
- Some logos and case studies
- Example: "AI platform for teams" + feature list + logos

**Good:**
- Specific copy throughout
- Clear product definition and audience in hero
- Features listed but not deeply connected to pain

**Better:**
- Everything in "Good"
- Features explicitly address pain points (not just capabilities)
- Clear "So What?" present somewhere on page

**Excellent:**
- Crystal clear hero (specific product + specific audience)
- Interactive demo or video showing use cases
- Pain-point-driven feature descriptions
- Dedicated "So What?" section (ideally near top)
- Clear differentiation (one or more Dunford components done deeply)
- Social proof present
- Avoids generic jargon throughout

### Step 5: Generate the Output

## Output Format

```markdown
# Homepage Review: [Company Name]

**What this is:** [One-line description of what the product/service actually does before analyzing how well they communicate it]

## Overall Assessment
**Hero Section:** [Weak/Moderate/Strong]
**Full Page:** [Weak/Moderate/Strong]
**Tier:** [Bare Minimum/Good/Better/Excellent]

---

## Positioning Table

| Element | Answer | Hero | Full Page | Strength | Notes |
|---------|--------|------|-----------|----------|-------|
| **Who it's for** | [The actual target audience/persona] | [Present/Absent] | [Specific/Generic/Implied] | [Weak/Moderate/Strong] | [Additional context] |
| **What it is** | [The actual product category/function] | [Present/Absent] | [Clear/Generic/Confusing] | [Weak/Moderate/Strong] | [Additional context] |
| **"So What?" moment** | [What differentiated value they claim] | [Present/Absent] | [Present/Absent/Weak] | [Weak/Moderate/Strong] | [Where it appears, depth] |
| **Pain-point features** | [How features connect to pain] | N/A | [Present/Generic/Absent] | [Weak/Moderate/Strong] | [Additional context] |
| **Interactive demo/video** | [What visual proof exists] | [Present/Absent] | [Present/Absent] | [Weak/Moderate/Strong] | [Type and quality] |

---

## Hero Section Analysis

[Paragraph explaining what works and what doesn't in above-the-fold]

**Current Hero Copy:**
- Headline: "[exact copy]"
- Subheadline: "[exact copy]"

**What's Working:**
- ✓ [Specific callouts of good elements]

**What's Missing/Weak:**
- ❌ [Critical gaps]
- ⚠️ [Conditional issues]

**Specificity Grade:** [Weak/Moderate/Strong]
- [Explanation of why, with examples from the copy]

---

## "So What?" Analysis

**Dedicated Section:** [Present at top/Present mid-page/Present at bottom/Absent]
**Full Page "So What?":** [Addressed throughout/Scattered weakly/Absent]
**Overall "So What?" Grade:** [Weak/Moderate/Strong]

**Dunford Components Present:**

[For each component found, include:]

- ✓/⚠️/❌ **[Component Name] ([Weak/Moderate/Strong]):** [Detailed explanation of what they said, how deep it goes, what's missing]

**Missing Components:**
- [List any of the 5 components not addressed]

**Recommendations:**
[If weak or absent, suggest what to add/strengthen]

---

## Full Page Analysis

**Pain-Point-Driven Features:** [Weak/Moderate/Strong]
[Explanation of whether features connect to pain points or just list capabilities]

**Interactive Elements:** [Present/Absent/Weak]
[Assessment of demos, videos, visual explainers]

**Specificity Throughout:** [Weak/Moderate/Strong]
- ✓/❌ Avoids generic jargon
- ✓/❌ Uses concrete examples
- ✓/❌ Names specific pain points
- ✓/❌ Quantifies outcomes where possible

**Customer Examples:** [Present near top/Buried/Absent]
[Where are logos, case studies, testimonials positioned?]

---

## Key Issues Found

**Critical (Must Fix):**
1. [Most important problems that hurt conversion]

**Important (Should Fix):**
1. [Secondary issues that weaken positioning]

**Nice to Have:**
1. [Improvements that would elevate to next tier]

---

## Recommendations

**Priority 1: [Hero/So What/Features]**
[Specific, actionable recommendation]

**Example Rewrites:**

**Current:** "[Generic copy they're using]"
**Suggested:** "[More specific alternative addressing pain]"

[Include 2-3 specific copy rewrites showing how to fix the biggest issues]

**Priority 2: Structure**
[Recommendations about section placement, adding missing elements]

**What to Keep:**
- [Things they're doing well that shouldn't change]

---

## Comparable Examples

**Similar to:** [Name 1-2 homepages with similar positioning challenges]
**Best-in-class for this audience:** [Name 1-2 excellent examples in their space]
```

## Important Notes

**Grading Philosophy:**
- Be tough but fair—generic is the enemy
- Natural language recognition > rigid ICP naming
- Depth > breadth (one component done well beats five done poorly)
- Copy is king (visuals help but can't rescue weak copy)
- Specificity without jargon is the goal
- **Headline specificity:** Headlines don't need explicit job titles if the target audience is easily understood/inferred from the full hero section (headline + subheadline). Copywriting flow and clarity matter—"builders" with clear context beats awkward "engineering builders"

**Forgiveness Rules:**
- No "So What?" but highly specific everywhere else = still Good tier (can add later)
- Great visuals but weak copy = Conditional pass with note that copy needs work
- Clear who/what but jargon-heavy = Conditional pass (needs copywriter to tighten)

**Edge Cases:**
- If homepage is for a highly technical/niche product, some jargon is acceptable if the target audience uses that language
- If product serves multiple teams, hero should be specific to PRIMARY audience, can expand on full page
- Visual explainers can help rescue weak copy but note it in the report

## Reference Files

For detailed explanation of Dunford's 5 positioning components, see:
- `references/dunford-framework.md`
