# Terminology

## Domain vocabulary

These definitions guide target UI language. They do not establish new backend schemas or status enums. Known context comes from the supplied brief; unresolved semantics need confirmation during integration.

| Term | Meaning and UI distinction |
| --- | --- |
| Lead | Prospective student before conversion; has ownership, branch, contact and lifecycle context |
| Student | Converted/registered student record with an ongoing consultancy journey; not synonymous with every lead |
| Counsellor | Staff member responsible for assigned counselling and related lead/student work |
| Branch | Operational unit within the current single consultancy; scope for staff, leads, queues and performance |
| Follow-up | Owned, branch-scoped scheduled operational record with context, due time, completion details and rescheduling history; not just a reminder |
| SLA | Service-level response expectation; here initial contact concepts include OK, Warning, Red, Contacted, Inactive and Legacy/Unverified; distinct from follow-up lateness |
| Application | Student's application to a university/program; one student may have multiple applications |
| Offer | Offer/decision outcome in the application journey; not automatically confirmed admission |
| Admission | Successful progression/confirmation in the application journey; exact counting criteria remain to be confirmed |
| Communication | Email/SMS interaction initiated through lead selection/filter workflows, with eligibility, permission and delivery/history context |
| Task | Operational work requiring an action, owner and relevant context; not necessarily an approval |
| Approval | Authorized decision on a request/action, distinct from task completion; exact approval flows are planned |
| Event | Organized engagement such as a public recruitment/information event; registrations may contribute to marketing conversions |
| Notification | Message about an underlying record/event requiring awareness or action; not a replacement for the record |

An appointment is a scheduled meeting/interaction; an event may involve broader attendance; a deadline is a time constraint. Do not collapse these into a single ambiguous event counter.

## Legacy-to-target UI mapping

| Current / legacy label | Preferred target concept | Required caution |
| --- | --- | --- |
| Client | Student | Confirm record semantics before changing visible labels or integration mapping |
| Clients (legacy compatibility) | Student CRM / Active Students where semantically correct | Active Students needs its own agreed definition; do not copy a legacy count blindly |
| Branch Revenue (legacy payment domain) | Branch Performance / financial reporting in the appropriate domain | Operational performance is broader than revenue; preserve payment meaning and permissions |
| Task | Tasks & Approvals | Completing a task and approving a request are different operations |
| Team | Staff, Counsellors, Roles or workload views | Placement depends on whether the context is identity, assignment, access or capacity |

This is terminology migration for UI only. Do not blindly rename backend entities, API fields or database structures. Eventual adapters may preserve backend compatibility while presenting target language.

## State and metric interpretation

Initial contact: under 24 hours is OK; 24 to under 48 is Warning; 48 or more is Red/attention. First-contact confirmation/attestation can stop the initial clock. Inactive and Legacy/Unverified require distinct treatment rather than being presented as healthy. The clock's start and detailed eligibility are unresolved.

Upcoming/due/overdue describes follow-up timing; completed describes recorded work, and rescheduled requires a reason. Follow-up lateness is not initial contact SLA. A queued communication is not necessarily delivered. A lead, student, application, offer and admission must retain distinct units in counters and charts.

For conceptual relationships see [Module Architecture](MODULE_ARCHITECTURE.md); for metric expectations see [Admin Requirements](ADMIN_DASHBOARD_REQUIREMENTS.md).
