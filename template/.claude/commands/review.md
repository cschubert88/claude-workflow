You are performing a comprehensive code review of the most recent implementation work. Be thorough but concise — flag what matters, skip what does not.

## Step 1 — Identify what changed

Look at recently modified and created files. If a plan exists in `tasks/todo.md`, use it to understand the scope of the implementation. Focus your review on the files that were touched during execution.

## Step 2 — Run through the checklist

Review the changed files against the following areas. Not every item applies to every project — skip what is irrelevant to the current codebase.

**Logging**
- No `console.log` statements left behind. Uses proper logger with context (if the project has one).

**Error Handling**
- Async operations wrapped in try-catch. Centralized error handlers used where they exist. Error messages are helpful, not generic.

**TypeScript**
- No `any` types. Proper interfaces and type definitions. No `@ts-ignore` or `@ts-expect-error` without justification.

**Production Readiness**
- No debug statements, no `TODO` or `FIXME` left unresolved, no hardcoded secrets or credentials, no test-only code leaking into production paths.

**React / Hooks** (if applicable)
- Effects have proper cleanup functions. Dependency arrays are complete and correct. No patterns that cause infinite re-renders.

**Performance**
- No unnecessary re-renders. Expensive computations are memoized. No N+1 queries or unbounded loops.

**Security**
- Auth checks are present where required. User inputs are validated and sanitized. RLS policies or equivalent access controls are in place for data access.

**Architecture**
- Code follows existing patterns and conventions in the codebase. Files are in the correct directories. No unnecessary new abstractions or dependencies introduced.

## Step 3 — Produce the review

Output your findings in exactly this format:

```
### Looks Good
- [Item 1]
- [Item 2]

### Issues Found
- **[SEVERITY]** [`file:line`] — [Issue description]
  - Fix: [Suggested fix]

### Summary
- Files reviewed: X
- Critical issues: X
- Warnings: X
```

Use these severity levels:

- **CRITICAL** — Security vulnerabilities, data loss risks, crash-causing bugs
- **HIGH** — Functional bugs, performance problems, bad user experience
- **MEDIUM** — Code quality issues, maintainability concerns, missing types
- **LOW** — Style inconsistencies, minor improvements, naming suggestions

## Rules

- Review only files that were part of the recent implementation. Do not review the entire codebase.
- Be specific. Every issue must include the file, line number, and a concrete fix.
- Do not pad the "Looks Good" section with filler. Only list things that are genuinely well done.
- If there are zero issues, say so clearly — do not invent problems.
- Keep the review under 600 words unless the scope is large.
