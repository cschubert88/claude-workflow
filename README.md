# claude-workflow

Install a gated AI development workflow for Claude Code into any project.

## Install

```bash
npx github:cschubert88/claude-workflow init
```

Use `--force` to overwrite existing files.

## What gets installed

```
.claude/
  commands/
    create-issue.md
    explore.md
    create-plan.md
    execute.md
    review.md
    peer-review.md
    document.md
    learning-opportunity.md
CLAUDE.md
tasks/
  todo.md
  lessons.md
```

## Workflow

The pipeline is gated: `/explore` -> `/create-plan` -> `/execute` -> `/review`.

- **/explore** -- Investigate the codebase and gather context before touching anything.
- **/create-plan** -- Lock in a step-by-step execution plan written to `tasks/todo.md`.
- **/execute** -- Implement the plan, updating progress as each step completes.
- **/review** -- Run a structured code review against the changes.

`CLAUDE.md` enforces the gates -- Claude will push back if you try to skip steps.

## Commands

| Command | Description |
|---------|-------------|
| `/explore` | Analyze the codebase and surface questions before any implementation |
| `/create-plan` | Generate a tracked execution plan in `tasks/todo.md` |
| `/execute` | Implement the plan step by step, updating progress |
| `/review` | Structured code review with severity levels |
| `/peer-review` | Critically evaluate feedback from other AI models |
| `/create-issue` | Capture bugs or features quickly mid-development |
| `/document` | Update documentation from actual code changes |
| `/learning-opportunity` | Pause and learn a concept at three depth levels |

## Options

`--force` overwrites all existing workflow files with the latest versions from the package.

## Updating

Re-run with `--force` to overwrite existing files with the latest versions.
