# Admin dashboard requirements

## Status and goals

**Sprint 2.2 implements the first Admin overview with synthetic data; integration and module workflows remain future work.** The homepage answers both “What needs management attention right now?” and “How is the consultancy performing?” Preserve the operational model in [Product Context](PRODUCT_CONTEXT.md), rather than replacing it with generic SaaS statistics. Original target requirements below remain broader than the current implementation.

## Known existing dashboard coverage

The supplied product brief identifies Total Leads, Today's Leads, New Leads, Unassigned Leads, Assigned Leads, Incomplete Profiles, Follow-up Due, Today's Follow-ups, Relational Lead Pipeline and Recent Visible Leads. It also identifies Website & Marketing Performance: Unique Visitors, Sessions, Page Views, Converted Sessions, Attributed Leads, Visitor Trend, Top Traffic Sources and Marketing Conversions. Other current items include Clients (legacy compatibility), Tasks Completed, Team Members and Branch Revenue (legacy payment domain).

These are capability/metric concepts to reconcile, not instructions to copy every widget. Preserve useful acquisition, workload and exception signals. Do not silently equate Clients with Active Students or legacy payment revenue with a new financial measure; use [Terminology](TERMINOLOGY.md).

## Information hierarchy and planned sections

| Priority | Planned content | Management question / action |
| --- | --- | --- |
| 1. Executive snapshot | Total Leads, Active Students, Applications, Offers Received, Admissions, authorized revenue/financial summary, Today's Follow-ups, Unassigned Leads | What is the current scale and state? Open the relevant scoped records |
| 2. Immediate operational attention | Overdue follow-ups, due today, SLA Warning/Red, unassigned leads, pending approvals, application/document issues, escalation/notification signals | Where does management need to intervene now? Open an actionable queue |
| 3. Funnel and performance | Lead pipeline/conversion, application/admission trends, lead sources, marketing attribution, branch performance | Where are acquisition and progression improving or stalling? Inspect scope and definitions |
| 4. Recent operational data | Recent leads/applications, events/deadlines, tasks/approvals, system notifications | What changed, and what upcoming work needs coordination? Open the source record |

Progressively disclose detail through relevant module destinations. The overview must not host every module. Urgent actionable items need stronger discoverability than passive totals even when the executive snapshot appears first.

## KPI semantics and filters

Each later metric needs a readable label, unit, branch/time scope, data source or mock label, and clear treatment of unavailable values. Comparison periods must be explicit if trends are shown. Define whether a figure is a current inventory, a period event count or a rate before presenting it.

| KPI concept | Required semantic distinction |
| --- | --- |
| Total Leads | Acquisition records; not students or applications |
| Active Students | Student records meeting a still-to-be-confirmed active definition |
| Applications | Application records; a student may have several |
| Offers Received | Offers/decisions; not automatically admissions |
| Admissions | Confirmed progression under a later agreed definition |
| Financial summary | Authorized measure with period/currency/recognition basis confirmed; no inferred legacy revenue equivalence |
| Today's Follow-ups | Date/time and completion inclusion rules must be defined; distinguish due from overdue |
| Unassigned Leads | Assignment gap requiring operational attention, not a conversion stage |

Do not imply 1 lead = 1 application = 1 admission. Counts from different scopes/periods must not be used as an invented funnel. Branch filters should scope related sections consistently or clearly disclose exceptions; “all branches” means all authorized branches. The branch list must support more than Dhaka and Chattogram.

## Lead pipeline and first-contact SLA

The pipeline represents meaningful lifecycle progression and actionable records. Preserve owner, counsellor assignment, branch scope, status and first-contact context. Do not invent a finalized list of backend statuses or reduce the workflow to a decorative chart.

SLA visibility must distinguish OK (under 24 hours), Warning (24 to under 48 hours), Red (48 hours or more), Contacted, Inactive and Legacy/Unverified. A first-contact confirmation/attestation can stop the initial clock. Show text labels alongside color and allow attention signals to lead to the relevant records. Unknown history must not appear as verified healthy status. Clock origin and other unprovided timing rules remain open; see [Product Context](PRODUCT_CONTEXT.md).

## Follow-up command center

This is a management queue summary, not a generic personal checklist. Show upcoming, due and overdue work with enough owner, branch, due date/time and lead context to identify responsibility. Authorized Admin scope may span branches; branch manager and counsellor views have narrower scope.

Later completion interactions must retain interaction type, direction, outcome and completion note. Rescheduling must capture reason and preserve context. Notifications and overdue escalation should point to the underlying record. Keep follow-up lateness distinct from initial contact SLA. During eventual integration, pending changes, conflicts and failed updates must not silently appear successful; do not invent the backend concurrency mechanism now.

## Analytics and branch performance

Website/marketing summaries should retain the distinction among unique visitors, sessions, page views, converted sessions, attributed leads, traffic sources and marketing conversions. These are different units; attribution does not automatically establish causation or full lead coverage. Visitor trends, lead conversion and application/admission trends need explicit periods and definitions.

Branch performance should help compare acquisition, response/follow-up health, workload and journey outcomes under consistent scopes. Financial reporting is a separately authorized concern; legacy Branch Revenue must not be relabeled as a new measure without semantic review. Charts must support a decision and a readable data explanation, including incomplete/unavailable attribution. Full content editing belongs in CMS modules, not this homepage.

## Recent records and management work

| Section | Useful context and intended action |
| --- | --- |
| Recent leads | Recency, owner/assignment, branch, source/status where available; investigate a record within authorized visibility |
| Recent applications | Student and university/program context, current progression and issues; open the relevant application |
| Tasks/approvals | Responsible party, due/status and decision needed; distinguish completing work from approving it |
| Events/deadlines | Upcoming operational dates and affected context; distinguish a public event from an application deadline |
| Notifications | Reason, related record and relevant timing; prioritize escalations without duplicating every record as a separate task |

Exact columns and action contracts belong to their implementation sprints. Do not expose real personal data in mock examples.

## Responsive and accessibility expectations

Validate at **375, 430, 768, 1024, 1280, 1440 and 1920px**. Desktop supports sidebar/topbar and multiple columns; tablet reduces columns and adapts navigation; mobile uses a drawer, simpler topbar and stacked/reflowed content. Preserve urgent actions and readable chart/table context. Choose explicit table reflow or controlled horizontal scrolling; never create accidental page-wide overflow. These are validation targets, not mandatory CSS breakpoint values.

Keyboard access, visible focus, semantic headings/controls, descriptive icon-button labels, non-color status cues and usable touch targets are required. See [UX Principles](UX_DESIGN_PRINCIPLES.md).

## Loading, empty, error and interaction expectations

- **Loading:** preserve section geometry with appropriate placeholders and expose busy state accessibly. Do not show zero while a value is unresolved.
- **Empty:** distinguish no records, no results under filters and a completed/healthy queue; offer relevant next actions such as clearing filters.
- **Error:** identify the affected section, retain usable context and offer recovery where supported. Do not turn a failed fetch into an empty success state.
- **Unavailable/restricted:** distinguish unavailable data from zero and restricted access from missing records; do not leak protected records before hiding them.
- **Actions:** make pending/success/failure clear, prevent accidental repeated submission and confirm sensitive actions. Prototype demonstrations must not claim a real message was sent or a server record changed.

Future state previews may use explicit local fixtures; no fake network calls or artificial claims of live data. This sprint documents the states only.

## Implemented overview — Sprint 2.2

AdminPage continues to use the approved DashboardLayout. Welcome/context identifies **Synthetic preview**, the four demo branches and a fixed **11 October 2026, 09:00 Bangladesh time (UTC+6)** snapshot. No visible scope/date control implies functioning filters. The shared shell, Foundation Preview and Counsellor/Student content remain unchanged.

The operational reading priority is exceptions → attention → follow-ups → pipeline → business/record context → performance. Desktop promotes business and exception metric groups together, keeps a right-side attention/follow-up area, and introduces additional columns as space permits. Mobile presents two-column exception metrics, Needs Attention and follow-ups before pipeline, business metrics, records and analytics. This supports management oversight rather than copying a counsellor's execution queue.

| Region | Implemented scope |
| --- | --- |
| Business overview | Total leads, active students, application records and offers; confirmed admissions shown separately as supporting context |
| Operational exceptions | Unassigned leads, due-today follow-ups, overdue follow-ups and incomplete lead profiles |
| Needs Attention | First-contact SLA risk, overdue follow-ups, assignment gaps and missing application documents; counts may overlap |
| Follow-up operations | Four priority examples with due date/time, owner, branch, interest and overdue/due/upcoming state; not the entire queue |
| Lead pipeline | Current stage inventory with counts, percentages, segmented overview and explicit terminal/review states |
| Student/application snapshot | Application-stage counts with distinct student context; no one-student/one-application assumption |
| Performance | Branch comparison, seven-day lead/contact trend, lead sources and compact website metrics |
| Recent records | Five leads and four applications, with program/ownership/status context and responsive table/list representations |
| Operational updates | Three events/deadlines, task/approval counts and four relative-time notifications; no actions execute workflows |

### Synthetic definitions and consistency

All data lives in `src/data/adminDashboardData.js`. It is a small review fixture, not real people, university outcomes, backend enums, permission rules or verified operational formulas. Real university names provide familiar context only. The labels “active student” and application stages are presentation definitions requiring integration confirmation.

- Branch totals reconcile to **1,248 leads, 842 active students, 436 applications and 76 admissions**. Revenue is omitted; no legacy payment measure is relabeled.
- Primary lead stages: New 84, Assigned 160, Contacted 208, Follow-up 240, Qualified 168, Agreement 112 and Converted 176. Agreement groups **72 pending + 40 completed**. Lost 60, Unqualified 28 and Duplicate review 12 remain visible below the primary stages. All 11 underlying concepts reconcile to 1,248. Percentages use that inventory denominator; the view is not a cohort conversion funnel.
- Application stages reconcile to 436: Submitted 100, Under review 172, Documents required 36, Offer received 52 and Admission confirmed 76. The **128 offers** fixture includes 52 at offer stage plus 76 subsequently confirmed admissions. A lead conversion and an admission are different events/entities.
- Six follow-ups are due today, excluding two overdue. The four displayed priority examples are a subset, not a sum of queue totals. Unassigned/assignment tasks refer to the same 11 leads, and exception counts must not be added together.
- First-contact risk is **2 red (≥48h) + 3 warning (24–<48h)**. These are supplied presentation states, not computed clocks. Contact confirmation stops the first-contact clock conceptually; inactive and legacy/unverified states must not become healthy defaults during integration. Follow-up lateness remains a separate signal.
- The 05–11 October trend totals **168 new leads and 132 contact confirmations**. Contacts can concern earlier leads, so no conversion percentage is derived. The final day is partial through the snapshot time.
- Source counts sum to those same 168 new leads. Website's 72 match the illustrative attributed-lead count; 96 converted sessions represent a different unit. No causal attribution or session-to-lead equality is claimed.
- Relative notification timestamps are frozen against the snapshot; there are no fake live timers. Task versus approval and event versus deadline labels stay distinct.

### Interaction and state boundary

“See sample lead records” is an actual in-page link to Recent Leads; it does not filter records or open a nonexistent module. Other overview surfaces are readable sections, not fake clickable cards. The header bell remains a separate unavailable shell specimen. No notifications, assignments, approvals, completion, rescheduling, communications or other mutations occur.

Twelve important data regions accept loading/empty input. DashboardSection composes existing Skeleton/EmptyState without timers, fake requests or a global demo-state switch. Twenty-four loading/empty cases were browser-tested along with a zero/single-day trend and long mobile record text. Backend error/retry contracts remain future integration work.
