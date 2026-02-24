Your task is to update documentation so it matches the current state of the code. Trust the code, not old documentation.

## Step 1 — Identify changes

- Run `git diff` or check recent commits to find modified files.
- Identify which features or modules were changed.
- Note new files, deleted files, and renames.

## Step 2 — Verify current implementation

- **CRITICAL:** Do NOT trust existing documentation. Read the actual code.
- For each changed file, read the current implementation and understand its actual behavior.
- Note any discrepancies between existing docs and reality — these are bugs in the docs, not the code.

## Step 3 — Update documentation

Update `CHANGELOG.md` with an entry under the **Unreleased** section. Use these categories:

- **Added** — new features or capabilities
- **Changed** — modifications to existing behavior
- **Fixed** — bug fixes
- **Security** — vulnerability patches or hardening
- **Removed** — deleted features or deprecated code

If `CHANGELOG.md` does not exist, create it with the Unreleased section.

## Style rules

- **Concise** — sacrifice grammar for brevity.
- **Practical** — examples over theory.
- **Accurate** — code-verified, not assumed.
- **Current** — matches actual implementation, not what docs previously claimed.

## Anti-patterns

- No enterprise fluff or marketing language.
- No outdated information carried forward from old docs.
- No assumptions without reading the code first.

## When uncertain

If you are unsure about the intent behind a change or its user-facing impact, ask the user. Do not guess.
