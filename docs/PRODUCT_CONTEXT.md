# Apply Varsity product context

## Scope and evidence

Apply Varsity is an education consultancy platform supporting the student journey from public-site discovery through counselling, applications, admission, visa preparation and pre-departure.

**Known product context** in these documents comes from the supplied Sprint 0.2 brief. It describes the wider Apply Varsity ecosystem; it is not an independent audit of its backend. **Current prototype** means this repository: React/Vite/Tailwind foundation and route placeholders only. **Planned / Target UI / Future** describes subsequent work, not implemented functionality. Backend contracts, exact permissions and metric definitions require confirmation during integration.

## Public website and operational system

The public website attracts and informs prospective students. Its known brand direction includes the Apply Varsity logo, navy identity, red accents, white/light surfaces and study-abroad imagery. Entry points include Get Free Assessment, planning/contact requests, student registration, event registration and authenticated entry points. Content includes destinations, universities/courses, scholarships, visa guidance, events, blog/resources and contact/support.

Public conversion events can become operational records:

| Public interaction | Operational relationship |
| --- | --- |
| Student registration | Lead/student record, subject to confirmed conversion rules |
| Free assessment | Lead for qualification and counselling |
| Event registration | Marketing/conversion record for attribution and follow-through |

The public website and Admin Dashboard have different jobs. Website and marketing analytics may appear in Admin without making its homepage a website CMS. Exact registration, deduplication and attribution rules are not specified.

## Operational lifecycle

Public website → lead capture / student registration → Lead CRM → counsellor assignment and follow-up → Student CRM → university/course selection → application processing → offer/admission → visa/pre-departure.

A lead is a prospect; a student has an ongoing consultancy journey; an application is a university/program submission; admission is successful progression/confirmation. A student may have multiple applications. Do not imply one lead equals one application equals one admission. See [Terminology](TERMINOLOGY.md) and [Module Architecture](MODULE_ARCHITECTURE.md).

## Known Lead CRM reality

The wider product has operational concepts beyond a decorative pipeline: lead ownership, counsellor assignment, branch-aware visibility, lifecycle/status, first contact, follow-up scheduling/completion/rescheduling, due and overdue work, manager/admin visibility, notifications and escalation. Optimistic/concurrency-safe workflow concepts must remain visible in future interaction design; no API or conflict-resolution protocol is defined here.

Initial contact SLA concepts:

| State | Supplied operational interpretation |
| --- | --- |
| OK | Less than 24 hours without confirmed first contact |
| Warning | At least 24 hours and less than 48 hours |
| Red / attention | At least 48 hours |
| Contacted | First-contact confirmation/attestation can stop the initial clock |
| Inactive | Separate inactive state; exact eligibility rules require confirmation |
| Legacy/Unverified | Records whose history cannot be assumed verified |

The clock's starting event, timezone, working-hours treatment and precedence of inactive/contacted states are not supplied. Preserve these distinctions without inventing backend timing rules. Initial contact SLA and follow-up lateness are separate signals.

## Follow-ups are operational records

A scheduled follow-up carries an owner, branch scope, future due date/time and note/context. Work progresses through upcoming, due and overdue states. Completion records interaction type, direction, outcome and completion note. Rescheduling preserves the reason and context; notifications and overdue escalation support accountability.

Counsellors primarily see owned leads/follow-ups. Branch Managers need branch queues and appropriate owned/team visibility. Admin needs broader authorized cross-branch visibility. Branch Manager is an authorization/workflow context, not a fourth dashboard commitment in this prototype. Future Admin follow-up UI is a management attention surface, not a personal to-do list. Exact due windows, escalation recipients and schedules remain integration questions.

## Communications

**Known developing capability:** Email and SMS integrated with lead workflows. Selection of one or multiple leads and existing filters should feed communication actions. Preserve provider configuration/readiness, permissions, eligibility/preflight, safe recipient scoping, communication history and queued/background delivery concepts.

Do not introduce disconnected recipient management. Future UI must make selected versus filtered scope clear before an authorized send. Queue acceptance must not be presented as confirmed delivery. Provider APIs, delivery-state vocabulary and selection limits are not established by this brief. Admin's homepage should expose relevant attention/status only; full composition and history belong in the communications workflow.

## Branch model

**Current product phase:** one consultancy/agency with multiple branches. Chattogram and Dhaka are examples, not a fixed two-branch limit. Staff, leads, queues and performance have branch context; Admin cross-branch access is authorized, not automatically unrestricted. Planned selectors/filters should support additional branches. Broader multi-agency support is future potential, not the present operating model.

## Cross-cutting capabilities

Communications, notifications, tasks/approvals, appointments/meetings, branch management, staff/permissions, marketing attribution, analytics/reporting, finance-related operations, content/website administration, auditability and system configuration connect the operational journey. Their inclusion here is not a claim that every capability is complete in the existing system.

## Prototype purpose and boundary

Represent the actual education consultancy workflow through distinct Admin, Counsellor and Student experiences. Admin is implemented first in later sprints. Future local mock data must be explicit, synthetic and separate from presentation; no real personal data, production API calls or fake network calls. Integration should later replace the data boundary without requiring wholesale UI rewrites.

Sprint 0.2 documents context only. See [Role Experiences](ROLE_EXPERIENCES.md), [Admin Requirements](ADMIN_DASHBOARD_REQUIREMENTS.md) and [Roadmap](IMPLEMENTATION_ROADMAP.md).
