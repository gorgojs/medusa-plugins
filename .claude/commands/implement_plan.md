---
description: Implement technical plans from thoughts/shared/plans with verification
---

# Implement Plan

You are tasked with implementing an approved technical plan from `thoughts/shared/plans/`. These plans contain phases with specific changes and success criteria.

## Getting Started

When given a plan path:

- Read the plan completely and check for existing checkmarks (`- [x]`)
- Read any referenced research documents (`thoughts/shared/research/`)
- Read all files mentioned in the plan FULLY (no limit/offset)
- Think deeply about how the pieces fit together
- Create a todo list to track your progress
- Start implementing if you understand what needs to be done

If no plan path provided, ask for one.

## Implementation Philosophy

Plans are carefully designed, but reality can be messy:

- Follow the plan's intent while adapting to what you find
- Implement each phase fully before moving to the next
- Verify your work makes sense in the broader codebase context
- Update checkboxes in the plan file as you complete sections (using Edit)

When things don't match the plan exactly, STOP and think about why. Present the issue clearly:

```
Issue in Phase [N]:
Expected: [what the plan says]
Found: [actual situation]
Why this matters: [explanation]

How should I proceed?
```

## Verification Approach

After implementing a phase:

- Run the success criteria checks from the plan
- Common commands for this monorepo:
  - Build: `yarn workspace @gorgo/<plugin> build`
  - Tests: `TEST_TYPE=integration:http yarn test` (inside the corresponding `examples/<name>/medusa/`)
  - Commit lint (before committing): `yarn commitlint`
- Fix any issues before proceeding
- Update progress in both the plan and your todos
- Check off completed items in the plan file using Edit

**Pause for human verification**: After completing all automated verification for a phase, pause and inform the human:

```
Phase [N] Complete — Ready for Manual Verification

Automated verification passed:
- [List checks that passed]

Please perform the manual verification steps listed in the plan:
- [List manual verification items]

Let me know when manual testing is complete so I can proceed to Phase [N+1].
```

If instructed to execute multiple phases consecutively, skip the pause until the last phase. Otherwise, assume one phase at a time.

Do not check off manual testing items until confirmed by the user.

## Commits & Changesets

- Commits must follow Conventional Commits with the required scope (see `CLAUDE.md`). Example: `feat(feed-yandex): add price filter support`
- Do NOT create a commit unless the user explicitly asks
- Do NOT run `yarn changeset` manually — changesets are auto-generated from commits in CI (`scripts/generate-changesets.js`)

## If You Get Stuck

- Re-read relevant code fully
- Consider if the codebase has evolved since the plan was written
- Use sub-agents sparingly for targeted debugging (codebase-analyzer, codebase-pattern-finder)
- Present mismatches clearly and ask for guidance

## Resuming Work

If the plan has existing checkmarks:

- Trust that completed work is done
- Pick up from the first unchecked item
- Verify previous work only if something seems off

Remember: You're implementing a solution, not just checking boxes. Keep the end goal in mind and maintain forward momentum.
