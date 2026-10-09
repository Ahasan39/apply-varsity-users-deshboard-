# Role experiences

**Planned:** three primary authenticated dashboard experiences with shared visual primitives and different priorities. These are UX responsibilities, not an implemented permission matrix. See [Product Context](PRODUCT_CONTEXT.md) for visibility constraints.

## Admin: management and operational command center

**Questions:** What needs management attention right now? How is the consultancy performing?

**Primary goals:** understand business state, address operational exceptions, balance team workload and evaluate branch/acquisition outcomes within authorized scope.

**Information priorities:** overall lead acquisition; response SLA and follow-up health; unassigned leads; counsellor/team workload; student/application/offer/admission progress; branch performance; website/marketing attribution; tasks/approvals; notifications/escalations; authorized financial summaries; configuration/system access.

**Typical target actions:** inspect a branch or time period, open an overdue queue, review assignment gaps, investigate application/document issues, review an approval, follow a metric into its records or open authorized configuration. Action availability must eventually reflect real authorization.

**Should not dominate:** a personal to-do list, the full communications composer, every CMS function, decorative charts or every module's data. Use the [Admin information hierarchy](ADMIN_DASHBOARD_REQUIREMENTS.md) for progressive disclosure.

## Counsellor: daily operational work queue

**Question:** What should I work on next?

**Primary goals:** respond to assigned prospects, complete meaningful follow-ups and move owned students/applications forward.

**Information priorities:** assigned leads and students; today's and overdue follow-ups; SLA warnings; upcoming appointments; communications; tasks; student/application actions; personal workload/progress.

**Typical target actions:** open an owned lead, confirm first contact when appropriate, complete a follow-up with interaction details, reschedule with a reason, initiate scoped Email/SMS, prepare an appointment or address student/application work.

**Should not dominate:** agency-wide revenue, cross-branch ranking, CMS administration or broad staff controls. Do not implement this by copying Admin and hiding cards. Shared components may render different scopes, but the page order and actions should serve daily work.

## Student: journey and progress portal

**Question:** Where am I in my study-abroad journey, and what do I need to do next?

**Primary goals:** understand progress and deadlines, complete required actions and stay connected with the assigned counsellor.

**Information priorities:** profile completion; assigned counsellor; university/course shortlist; documents; applications; offers/admission; visa journey; required tasks; appointments; communications; notifications and important deadlines.

**Typical target actions:** complete profile information, review requested documents, inspect application progress, review a shortlist, prepare for an appointment or respond to a required action. Upload/messaging/backend behavior must be defined before implementation.

**Should not dominate:** internal lead status, staff workload, acquisition attribution, branch finance or internal escalation terminology. Present understandable journey language rather than exposing CRM implementation details.

## Scope and shared behavior

Counsellor visibility centers on owned work; Branch Manager context adds branch queue/team visibility; Admin can see authorized cross-branch records. Students must receive only data authorized for their journey. These are conceptual constraints, not security enforced by prototype routes.

All roles share accessible controls, consistent status meanings, deliberate responsive behavior and honest mock/loading/empty/error states. Navigation should later reflect actual authorization. UI hiding is not access control; see [Working Rules](CODEX_WORKING_RULES.md).
