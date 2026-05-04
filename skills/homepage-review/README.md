# Homepage Review Skill

A B2B SaaS homepage evaluation skill built for The Narrative Pivot's consulting framework.

## What It Does

Analyzes B2B SaaS homepages and grades them on:
- **Hero Section**: Specificity of "who it's for" and "what it is"
- **"So What?" Section**: Presence and depth using April Dunford's 5 positioning components
- **Full Page**: Pain-point-driven features, interactive demos, specificity throughout
- **Overall Tier**: Bare Minimum → Good → Better → Excellent

## Philosophy

- **Specificity over cleverness** - Generic B2B jargon is heavily penalized
- **Depth over breadth** - Better to nail one positioning component deeply than touch all five shallowly
- **Natural language recognition** - Target buyers should immediately see themselves in the copy
- **Copy is king** - Visuals help but can't rescue weak copy

## How to Use

```
Review the homepage at https://example.com
```

The skill will:
1. Fetch the homepage content
2. Evaluate hero, "So What?", and full page
3. Generate a diagnostic report with specific recommendations
4. Provide copy rewrites for weak sections

## Output Format

- Overall assessment (tier + grades)
- Positioning table
- Detailed analysis of each section
- Specific recommendations prioritized
- Example copy rewrites

## Framework Components

Based on April Dunford's positioning framework, adapted for homepage evaluation:
1. Competitive alternatives
2. Distinct capabilities
3. Differentiated value
4. Best-fit accounts
5. Market category

See `references/dunford-framework.md` for detailed explanation.

## Version History

**v1.0.0** - Initial build with complete framework
- Hero section evaluation
- "So What?" detection and grading
- Full page assessment
- Tier classification
- Copy rewrite suggestions
