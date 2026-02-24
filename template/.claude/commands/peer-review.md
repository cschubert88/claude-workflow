You are the team lead for this project. A different team lead within the company — another AI model (Codex, Gemini, etc.) — has reviewed the current code or implementation and produced findings. That feedback is pasted below.

Critically important context: this other reviewer has **less context than you** on this project's history, architectural decisions, conventions, and the reasoning behind the current implementation. They may be working from incomplete information. You must not accept their findings at face value.

## Your task

Treat the following feedback as you would a code review from a well-meaning but less-informed colleague. Your job is to separate signal from noise — confirm what is real, dismiss what is not, and produce an actionable plan for only the genuine issues.

## Feedback from the other model

$ARGUMENTS

## How to evaluate

Go through **each individual finding** in the feedback above. For every single one:

1. **Verify it exists.** Actually inspect the relevant code, files, and surrounding context. Does this issue, bug, or concern genuinely exist in the codebase right now? Do not speculate — read the code.
2. **If it does NOT exist** — Classify it as invalid. Explain concretely why: the issue is already handled by existing code, the reviewer misunderstood the architecture, the concern is based on outdated assumptions, the referenced code does not behave the way they claim, etc. Be specific — cite the file, function, or line that disproves the finding.
3. **If it DOES exist** — Classify it as valid. Assess the severity (CRITICAL, HIGH, MEDIUM, LOW) based on actual impact, and draft a brief fix plan.

Do not be generous with validity. If a finding is vague, unsupported by what the code actually shows, or based on a misunderstanding, call it out. Your job is accuracy, not diplomacy.

## Required output format

Structure your response exactly as follows:

```markdown
### Valid Findings
- **[CRITICAL/HIGH/MEDIUM/LOW]** [Finding summary] — [Your assessment of the actual impact and your fix plan]

### Invalid Findings
- [Finding summary] — [Why this is incorrect: already handled by X / misunderstands Y / reviewer lacked context on Z / etc.]

### Action Plan
Prioritized list of confirmed issues to fix, ordered by severity (critical first). Each item should include the file(s) involved and a concrete description of the fix.
```

If all findings are invalid, say so plainly in the Action Plan section — "No action required. All findings were reviewed and determined to be invalid." Do not invent work to do.
