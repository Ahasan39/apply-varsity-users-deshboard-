# Implementation roadmap

This roadmap defines sequential prototype checkpoints, not permission to begin future work automatically. Detailed acceptance criteria may be refined by each sprint prompt. All UI deliverables below are planned unless explicitly marked complete. Every implementation checkpoint includes lint/build, review of changed files and preservation of prior behavior.

## Sprint 0 — Foundation & Context

- **Objective:** establish a runnable standalone frontend and durable product/architecture context.
- **Major deliverables:** Sprint 0.1 React/Vite/JavaScript/Tailwind foundation, dependencies, routing placeholders and source structure; Sprint 0.2 product, module, role, Admin, UX, terminology, roadmap and working-rules documents with README links.
- **Non-goals:** dashboard UI, design tokens, module routes, mock dashboard datasets, authentication and backend integration.
- **Expected checkpoint:** Sprint 0.1 complete; Sprint 0.2 documentation established, lint/build passing and repository-local Git configuration verified. Application remains foundation-only.

## Sprint 1 — Design System & UI Primitives

**Sub-sprint status:** Sprints 1.1, 1.2 and 1.3 are complete and approved in baseline `32716ab`. Coverage includes tokens, core primitives, semantic table composition, three responsive data strategies and navigation/action/help primitives. See [Design System](DESIGN_SYSTEM.md).

- **Objective:** translate the approved light-mode direction into reusable, accessible foundations.
- **Major deliverables:** agreed color/type/spacing and other required design tokens; scoped primitives such as buttons, badges, cards, inputs, empty/loading states and table containers, guided by actual needs.
- **Non-goals:** full dashboard shell, Admin business sections, dark mode, authentication or a speculative component library covering every future case.
- **Expected checkpoint:** approved primitive coverage and state previews, consistent semantic colors, keyboard/contrast review and responsive checks; lint/build pass. Sprint 1.1 covers tokens, Sprint 1.2 the core set and Sprint 1.3 data/navigation primitives. Complete.

## Sprint 2 — Shared Dashboard Shell

**Sprint 2.1 — Shared Dashboard Shell Foundation:** complete and approved in baseline `faed755`. All three role routes reuse one shell with a collapsible desktop sidebar, modal mobile/tablet navigation, sticky topbar, fluid workspace and page header.

**Sprint 2.2 — Admin Operational Workspace Overview:** implemented; awaiting review. Includes synthetic operational/business metrics, attention/follow-ups, lead pipeline, student/application context, branch and acquisition performance, recent records, deadlines, tasks and notifications. Responsive data alternatives and loading/empty capability are included. No real CRM modules or integrations exist.

**Next: Sprint 2.3 — Admin CRM & Lead Experience** (not started). This detailed sequence takes precedence over the older broad Sprint 3–6 milestones below; later scope is determined by explicit sprint requests rather than automatic implementation.

- **Objective:** provide reusable navigation and page composition for later dashboards.
- **Major deliverables:** DashboardLayout, sidebar/mobile drawer, topbar and page container; planned Admin navigation mapped without claiming unfinished modules work.
- **Non-goals:** complete module pages, business charts, real permissions or backend routing contracts.
- **Expected checkpoint:** shell works by keyboard and across validation widths; future role composition remains possible and placeholder destinations are honest.

## Sprint 3 — Admin Executive Overview

- **Objective:** answer the high-level consultancy state question.
- **Major deliverables:** scoped executive KPI concepts, clear units/periods and separate synthetic data for lead/student/application/offer/admission summaries; financial summary only where defined and appropriate.
- **Non-goals:** full CRM workflows, fabricated live data, equating students with applications or a complete finance module.
- **Expected checkpoint:** overview is understandable with valid metric distinctions and loading/empty/error presentations; scopes and mock status are explicit.

## Sprint 4 — Lead Operations, SLA & Follow-ups

- **Objective:** make urgent response and follow-up work actionable for management.
- **Major deliverables:** lead pipeline/assignment attention, initial-contact SLA states and follow-up command center; owner/branch context and scoped prototype completion/rescheduling interactions as authorized by the sprint.
- **Non-goals:** production escalation delivery, real messages, invented backend concurrency guarantees or replacing the entire Lead CRM.
- **Expected checkpoint:** SLA and follow-up clocks stay distinct; due/overdue, legacy/unverified and completion/rescheduling states retain their operational meaning.

## Sprint 5 — Analytics & Branch Intelligence

- **Objective:** explain acquisition, progression and branch performance.
- **Major deliverables:** useful trend/funnel/source views, website/marketing attribution summaries and scalable branch comparison/filtering with defined mock metrics.
- **Non-goals:** live analytics collection, a fixed two-branch model, unverified attribution formulas or payment-domain relabeling without review.
- **Expected checkpoint:** charts are readable and decision-useful; units, periods, branches and unavailable data are clear, with responsive and accessible alternatives.

## Sprint 6 — Admin Operational Workspace

- **Objective:** complete the homepage's recent-work and coordination surfaces.
- **Major deliverables:** recent leads/applications, tasks/approvals, events/deadlines and relevant notifications with useful record context and clear prototype actions.
- **Non-goals:** every underlying module, full communications composition, website CMS editing or real approval execution.
- **Expected checkpoint:** the homepage connects management attention to source workflows without becoming a crowded copy of all modules.

## Sprint 7 — Responsive & UX Polish

- **Objective:** refine the integrated Admin experience across sizes and interaction states.
- **Major deliverables:** review at 375, 430, 768, 1024, 1280, 1440 and 1920px; navigation, tables/charts, focus, labels, density, feedback and state consistency fixes.
- **Non-goals:** delaying basic responsiveness/accessibility until this sprint, adding unrelated features or introducing dark mode without scope.
- **Expected checkpoint:** no accidental page overflow, blocked keyboard paths or unreadable critical data; all required responsive/state behavior is reviewed.

## Sprint 8 — Multi-role Architecture Preparation

- **Objective:** ensure shared foundations support distinct future role experiences.
- **Major deliverables:** review shared component boundaries, role-aware layout/navigation composition and data boundaries; prepare documented Counsellor/Student extension points.
- **Non-goals:** implementing full Counsellor/Student dashboards, inventing a real auth system or broad refactoring without explicit sprint approval.
- **Expected checkpoint:** Admin remains stable; planned roles can reuse primitives without inheriting Admin's information priorities or treating mock roles as security.

## Sprint 9 — Admin Final QA & Documentation

- **Objective:** finish the Admin prototype and document its limitations for handoff.
- **Major deliverables:** cross-section QA, accessibility/responsive/state checks, terminology consistency, updated usage/architecture notes and integration/open-question inventory.
- **Non-goals:** production rollout, unrequested commits/pushes, backend integration or starting the next phase automatically.
- **Expected checkpoint:** Admin requirements are reconciled with the implemented prototype; lint/build pass and known limitations are explicit.

## Phase II — Counsellor Dashboard

- **Objective:** deliver the daily work queue described in [Role Experiences](ROLE_EXPERIENCES.md).
- **Major deliverables:** assigned work, follow-ups/SLA, appointments, communications and student/application action priorities using shared foundations.
- **Non-goals:** copying Admin with hidden cards or exposing unauthorized management data.
- **Expected checkpoint:** the experience answers “What should I work on next?” with responsive, accessible scoped mock workflows.

## Phase III — Student Dashboard

- **Objective:** deliver a clear journey/progress portal.
- **Major deliverables:** profile/actions, counsellor context, shortlist/documents, application/offer/admission/visa progress, appointments and deadlines.
- **Non-goals:** exposing internal CRM/admin concepts or pretending document/message actions reach a production backend.
- **Expected checkpoint:** the student can understand progress and the next required action without internal operational knowledge.

## Phase IV — Cross-role polish

- **Objective:** reconcile consistency while preserving each role's job.
- **Major deliverables:** shared language/status/accessibility/responsive review and role-specific interaction polish.
- **Non-goals:** forcing identical page layouts or expanding backend/product scope.
- **Expected checkpoint:** shared components behave consistently and role priorities remain distinct, with regressions checked.

## Phase V — Main Apply Varsity integration planning

- **Objective:** prepare a grounded integration plan with the main product.
- **Major deliverables:** verified API/data/permission contracts, legacy adapter mapping, branch scope and audit/concurrency considerations, mock replacement plan and unresolved decision log.
- **Non-goals:** assuming backend behavior, silently renaming domains or treating planning as authorization to connect production systems.
- **Expected checkpoint:** a reviewable integration plan based on actual contracts; implementation and rollout require their own explicit scope.

## Current stop boundary

Sprint 2.2 ends after the Admin operational overview, synthetic data reconciliation, mobile/tablet-through-4K and accessibility checks, performance review, documentation and required validation. **Next: Sprint 2.3 — Admin CRM & Lead Experience**, only when requested. Follow [Codex Working Rules](CODEX_WORKING_RULES.md); do not commit, push or begin Sprint 2.3 under this task. Approved baseline `faed755` is preserved; Sprint 2.2 changes remain uncommitted for review.
