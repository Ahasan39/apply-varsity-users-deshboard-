# UX design principles

## Direction and scope

**Target:** modern, premium, clean, professional and education-consultancy-specific. In practice this means clear information hierarchy, legible dense data and visible operational actions, not decorative effects. Light mode comes first. **Sprint 1 will define actual design tokens and primitives.** The following values are direction only, not implemented tokens or verified accessible color pairs.

## Brand and color semantics

| Direction | Approximate value / family | Intended role |
| --- | --- | --- |
| Deep Navy | `#061B32` | Brand depth |
| Primary Navy | `#08233F` | Main brand structure |
| Interactive Blue | `#1769E0` | Interactive emphasis |
| Apply Varsity Red | `#D52E4F` | Restrained brand accent |
| Background | `#F4F7FC` | Light blue-gray canvas |
| Surface | `#FFFFFF` | Content surfaces |
| Primary Text | `#10233F` | Primary reading hierarchy |
| Muted Text | `#64748B` | Secondary information |
| Success | Green family | Positive/completed states where semantically appropriate |
| Warning | Amber family | Attention before a breach |
| Danger | Red family | Overdue, failure or danger |
| Secondary workflow states | Purple where useful | Distinct states, not an alternative danger meaning |

Red is primarily danger/overdue/failure or an intentional brand accent. Do not make ordinary controls resemble errors. Use labels/icons as well as color, and confirm contrast for each real text/background/control pair during Sprint 1. A status must mean the same thing across roles.

## Layout, density and typography

Operational clarity takes priority over decoration. Make urgent actionable information easier to discover than passive statistics. Use progressive disclosure rather than putting every module on the homepage. Avoid giant empty cards, excessive gradients, glassmorphism and neon/gaming aesthetics.

Desktop may be data-dense when grouping, spacing and headings make comparison easy. Mobile prioritizes actions and reading. Typography should establish a clear page/section/label/value hierarchy, use readable body text and align comparable numeric values consistently. Do not solve density by shrinking critical text or relying on unexplained abbreviations. Final font choices, type scale, spacing, radii and shadows belong to Sprint 1.

## Responsive behavior

| Context | Target behavior |
| --- | --- |
| Desktop | Sidebar, topbar and multi-column dashboard with deliberate content widths |
| Tablet | Fewer columns, adaptive navigation and readable controls |
| Mobile | Drawer navigation, simplified topbar, stacked/reflowed content, accessible actions and controlled table overflow |

Validate at **375px, 430px, 768px, 1024px, 1280px, 1440px and 1920px**. These widths are checkpoints rather than prescribed breakpoints. Design responsive behavior with each component; do not postpone it until the polish sprint. Wide screens should use space meaningfully without stretching text and cards into empty expanses.

## Tables and charts

Tables need explicit mobile behavior: prioritize identifying/action columns, reflow where appropriate or contain horizontal scrolling within a labeled region. Keep essential record context available and keyboard reachable. Truncation must not be the only way to access important information; headers and reading order should remain understandable.

Charts must answer an operational question. Label axes, units, periods and relevant scope; make legends and values readable at small widths. Do not rely solely on hover or color to convey results. Provide an accessible summary or data alternative where needed. Reflow or simplify a chart deliberately rather than shrinking all labels. Do not invent rates or imply comparable denominators where lead/student/application counts differ.

## Accessibility and feedback

Accessibility and keyboard usability are implementation requirements. Use semantic elements, logical heading order, visible focus, explicit form labels and meaningful control names. Use Lucide icons; never use emoji as production navigation icons. Icon-only actions need accessible labels; decorative icons should not create duplicate announcements.

Future drawers/dialogs/dropdowns need deliberate keyboard behavior, focus handling and dismissal. Touch targets must remain usable on mobile. Do not trap users in overflow regions or make tooltip-only information essential. Screen-reader status announcements should clarify important updates without unnecessary noise.

Show pending, success and failure feedback truthfully. Confirm sensitive actions and preserve context on recoverable errors. Distinguish loading, zero, no results, unavailable and restricted states; [Admin Requirements](ADMIN_DASHBOARD_REQUIREMENTS.md) defines the operational expectations. Color alone cannot distinguish SLA states, follow-up lateness or application progress. Initial contact SLA and overdue follow-ups are different clocks.

## Reuse and role specificity

Shared primitives should serve multiple roles without forcing identical dashboards. Admin prioritizes management attention, Counsellor the next work item, and Student journey progress. Domain-aware components belong outside giant page/App components. See [Role Experiences](ROLE_EXPERIENCES.md) and [Module Architecture](MODULE_ARCHITECTURE.md).

## Prototype data integrity

Keep mock data in `src/data/`, separate from presentation. Use realistic education consultancy terms, synthetic Bangladesh-oriented staff/student names where useful, realistic branches and universities/programs. No real personal data, production API calls, fake network calls or claims that local mocks are live. Structure component inputs so later backend integration can replace mock sources without rewriting the UI. Additional synthetic branches may validate scalability; do not hardcode a two-branch product.
