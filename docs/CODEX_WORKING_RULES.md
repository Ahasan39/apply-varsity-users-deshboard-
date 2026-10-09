# Codex working rules

## Before implementation

1. Read the current user sprint request and relevant repository documents before coding. Start with [Product Context](PRODUCT_CONTEXT.md), [Module Architecture](MODULE_ARCHITECTURE.md) and [Roadmap](IMPLEMENTATION_ROADMAP.md); read [Role Experiences](ROLE_EXPERIENCES.md), [Admin Requirements](ADMIN_DASHBOARD_REQUIREMENTS.md), [UX Principles](UX_DESIGN_PRINCIPLES.md) and [Terminology](TERMINOLOGY.md) for affected work.
2. Inspect existing implementation, package/lock files, Git state, branch, remotes and local identity before changes. Do not assume an empty repository. Sprint 0.1 and 0.2 files are intentionally uncommitted; preserve them.
3. Distinguish supplied facts about the wider product from implemented prototype behavior and planned UI. Never invent backend behavior, endpoints, permissions, metric formulas or concurrency guarantees.
4. If requirements conflict with existing implementation, report the conflict rather than silently changing business behavior. Preserve meaningful existing functionality during terminology/navigation migration.

## Scope and architecture

5. Implement only the current authorized sprint. Do not start future sprints automatically. Documentation of a future component is not authorization to build it.
6. Preserve established architecture unless the sprint explicitly authorizes refactoring. Do not re-bootstrap, replace the working stack or upgrade dependencies without a demonstrated need.
7. Keep `main.jsx` for mounting and global styles, `App.jsx` for composition and `app/router.jsx` for routing. Avoid giant page components or business logic concentrated in App.
8. Prefer reusable components over repeated implementation markup, while avoiding speculative abstractions. Keep primitives, layout building blocks and domain-aware components in their intended directories.
9. Keep mock data separate from presentation in `src/data/`. Use synthetic, realistic consultancy examples and no real personal data. No production API calls, fake network calls or claims that mocks are live.
10. Keep component/data boundaries replaceable for later integration. Add `config/`, `services/`, `features/` or state management only when complexity and the current sprint justify them.
11. Do not add dependencies without clear need. Preserve the JavaScript React/Vite/Tailwind foundation and lockfile unless the task requires a specific change.
12. Preserve responsive behavior and accessible keyboard interaction. Use the documented widths; do not defer basic usability to the polish sprint. Use Lucide icons and meaningful status labels.
13. Preserve role differences: Admin management attention, Counsellor daily queue, Student journey. Do not implement later roles as cosmetic copies of Admin.

## Authorization and security UX

- UI visibility is not authorization. The backend must remain the source of truth for permissions.
- Branch scope must not be enforced only in the frontend. “All branches” must later mean the authorized scope, not unrestricted access.
- Unauthorized data must never be delivered/exposed and merely hidden with CSS.
- Role-specific navigation must reflect actual authorization during integration; placeholder routes provide none.
- Sensitive actions need appropriate confirmation; audit-sensitive operations must be traceable under the eventual backend contract.
- Prototype mock permissions are not security and must never be described as such.
- Communications must preserve authorized lead selection/filter scope and preflight eligibility. Do not claim queued work is delivered.
- Do not add authentication/backend integration unless the current task explicitly authorizes it. Sprint 0.2 authorizes neither.

## Validation and reporting

14. Run `npm run lint` and `npm run build` before declaring completion; investigate and fix failures rather than weakening important rules.
15. Run `git diff --check` and inspect final Git status. For untracked files, also inspect changed-file whitespace because an ordinary diff does not include them.
16. Perform appropriate scope-specific checks: documentation links/content for documentation work; runtime, responsive and interaction checks when UI behavior changes. Do not install testing frameworks just for bootstrap/documentation work.
17. Report files created/modified/deleted, validation results, assumptions and outstanding issues. Do not present planned capabilities as completed or hide validation limitations.
18. Stop at the sprint checkpoint. Do not commit/push unless the prompt explicitly authorizes it; Sprint 0.2 also prohibits PR creation and beginning Sprint 1.

## Repository-local Git identity

Expected branch: `main`.

Expected origin: `git@github.com:Ahasan39/apply-varsity-users-deshboard-.git`.

Repository-local identity must remain:

```text
user.name = Ahasan39
user.email = 154082038+Ahasan39@users.noreply.github.com
```

Never use the user's private GitHub email addresses for commits. Never modify global Git identity. Verify with `git branch --show-current`, `git remote -v`, `git config --local user.name` and `git config --local user.email`. Report unexpected remote/branch/identity state; do not silently repoint a remote or rewrite history.
