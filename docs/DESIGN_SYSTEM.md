# Apply Varsity design system

## Scope and design goals

**Sprints 1 and 2.1 complete and approved:** shared tokens/primitives, the `/` review surface and the reusable role shell. **Sprint 2.2 implemented, awaiting review:** an Admin operational workspace with synthetic data and compact SVG/CSS analytics. Real module integration and Counsellor/Student operational content remain unimplemented.

The interface should be trustworthy, professional and operational: calm surfaces, clear hierarchy and scannable information. Navy establishes Apply Varsity identity, blue identifies interactions, and brand red remains restrained. Reuse the same foundations across roles without giving every role the same page priorities. See [UX Principles](UX_DESIGN_PRINCIPLES.md) and [Role Experiences](ROLE_EXPERIENCES.md).

## Tailwind 4 implementation and token usage

`src/styles/globals.css` remains the sole stylesheet imported by `main.jsx`. It imports Tailwind and then `tokens.css`. `src/styles/tokens.css` is the single implementation source for design values.

The CSS-first `@theme static` block exposes theme values both as CSS custom properties and through Tailwind's corresponding utilities. Static emission retains even the small set of future-purpose tokens for normal CSS consumption. This follows the [Tailwind theme-variable approach](https://tailwindcss.com/docs/theme); no JavaScript Tailwind config, extra PostCSS setup or dependency is needed.

Examples:

```jsx
<section className="bg-surface text-text-primary border border-border rounded-lg shadow-xs">
  <h2 className="text-section">Section heading</h2>
</section>
```

```css
/* Normal CSS consumes the same values; do not copy their hex codes. */
.example {
  color: var(--color-text-primary);
  background: var(--color-surface);
}
```

All color names below have the `--color-` prefix and generate `bg-*`, `text-*`, `border-*` and other applicable utilities. For example, `--color-text-primary` produces `text-text-primary`; `--color-border` produces `border-border`. Typography `text-page` is a font-size utility, not a color. Use complete, statically detectable class names rather than constructing fragments such as `bg-${state}`.

Non-theme conventions live in `:root` in the same file. Consume them using CSS `var()` or Tailwind custom-property syntax, for example `min-h-(--control-height-touch)`. Existing Tailwind defaults remain available for the untouched role placeholders; new visual work should use semantic colors. No lead-specific global styles exist.

## Brand and interaction colors

| Token | Value | Meaning |
| --- | --- | --- |
| `--color-brand-deep` | `#061B32` | Deep brand context for future high-contrast identity surfaces |
| `--color-brand-navy` | `#08233F` | Primary identity; preview wordmark and heading |
| `--color-brand-red` | `#D52E4F` | Selective brand emphasis, not the default action color |
| `--color-primary` | `#1769E0` | Primary actions, links, active navigation and selected controls |
| `--color-primary-hover` | `#1257BD` | Future primary-action hover treatment |

Brand red and danger have different meanings and values. Do not make every action red. Primary may emphasize data where appropriate, but should retain its interaction meaning in control contexts. No speculative purple scale is added; secondary workflow categories can justify one later.

## Semantic colors and SLA support

| Foreground token | Value | Companion background token | Value / alias |
| --- | --- | --- | --- |
| `--color-success` | `#166534` | `--color-success-subtle` | `#ECFDF3` |
| `--color-warning` | `#854D0E` | `--color-warning-subtle` | `#FFFBEB` |
| `--color-danger` | `#B42318` | `--color-danger-subtle` | `#FFF1F0` |
| `--color-info` | `#1754A6` | `--color-info-subtle` | `var(--color-surface-selected)` → `#EAF2FF` |
| `--color-neutral` | `var(--color-text-secondary)` → `#475569` | `--color-neutral-subtle` | `var(--color-surface-muted)` → `#E8EDF3` |

Success means healthy/completed/positive; warning means approaching risk or pending attention; danger means errors, destructive actions, overdue/critical attention; info means informational operational context; neutral means inactive or unclassified context. Pair foreground with its subtle background for readable status text.

Future lead SLA mapping: OK → success; Warning → warning; Red/Critical → danger; Contacted → info in the preview (later context may justify primary or success); Inactive → neutral; Legacy/Unverified → neutral with explicit text and, in the preview, a dashed border. These are visual mappings, not timing/state logic. The preview's Healthy, Warning, Critical, Contacted, Inactive and Unverified specimens are plain list items, not StatusBadge components. Color never substitutes for text, icons or record context.

## Background and surface hierarchy

| Token | Value | Use |
| --- | --- | --- |
| `--color-background` | `#F4F7FC` | Application canvas |
| `--color-surface` | `#FFFFFF` | Primary reading/control/panel surface |
| `--color-surface-subtle` | `#F8FAFC` | Light grouping or secondary area |
| `--color-surface-hover` | `#EDF2F7` | Future neutral hover state |
| `--color-surface-selected` | `#EAF2FF` | Selected state; also info background |
| `--color-surface-muted` | `#E8EDF3` | Muted non-primary regions |
| `--color-overlay` | `rgb(6 27 50 / 48%)` | Reserved for future scrims, not a built overlay |

Prefer white/light surfaces, spacing and subtle borders over differently colored panels. Hover/selected surfaces still need appropriate semantic or selection indicators; tint alone cannot convey state. No backdrop blur or glass effect.

## Text hierarchy and contrast

| Token | Value | Use |
| --- | --- | --- |
| `--color-text-primary` | `#10233F` | Main reading and headings |
| `--color-text-secondary` | `#475569` | Supporting text, including on the page background |
| `--color-text-muted` | `#64748B` | Supporting labels on white surfaces |
| `--color-text-inverse` | `#FFFFFF` | Future dark/primary fills, with contrast checked per pair |

Calculated sRGB contrast: primary text/background **14.66:1**, secondary/background **7.06:1**, muted/white **4.76:1**, primary blue/white **5.08:1**. Muted/background is only **4.43:1**: do not use that pair for normal-size text; use secondary text there. Preview caption labels and placeholder text use white surfaces.

Semantic foreground/subtle pairs: success **6.76:1**, warning **6.61:1**, danger **5.98:1**, info **6.53:1**, neutral **6.44:1**. These calculations verify named pairs, not universal accessibility of every possible combination. Maintain at least 4.5:1 for normal text, 3:1 for qualifying large text and required control/focus boundaries. Recheck actual combinations when components arrive.

## Borders

| Token | Value / alias | Use |
| --- | --- | --- |
| `--color-border` | `#DCE3EC` | Default 1px structural separation |
| `--color-border-subtle` | `#E8EDF3` | Gentle dividers |
| `--color-border-strong` | `#7A899D` | Required control boundary or emphasized separation |
| `--color-border-focus` | `var(--color-primary)` | Keyboard focus outline |
| `--color-border-danger` | `var(--color-danger)` | Future error boundary, with explanatory text |

Default/subtle borders are decorative grouping, not sufficiently contrasted control identifiers. Strong/white is **3.56:1** and is used for the native text field. Avoid black boxes and bright borders on every panel.

## Radius scale

| Token / utility | Value | Intended use |
| --- | --- | --- |
| `--radius-sm` / `rounded-sm` | `0.25rem` / 4px | Compact controls/status samples |
| `--radius-md` / `rounded-md` | `0.375rem` / 6px | Future inputs/buttons |
| `--radius-lg` / `rounded-lg` | `0.625rem` / 10px | Panels |
| `--radius-xl` / `rounded-xl` | `0.875rem` / 14px | Selected high-level surfaces only |
| `--radius-full` / `rounded-full` | `9999px` | Future avatars/dots/pills |

Pixel equivalents assume the browser's default 16px root size. Keep normal containers restrained rather than universally pill-shaped.

## Shadows and elevation

| Token / utility | Value | Use |
| --- | --- | --- |
| Built-in `shadow-none` | No visible shadow | Default where borders suffice; no custom none token |
| `--shadow-xs` / `shadow-xs` | `0 1px 2px rgb(16 35 63 / 4%)` | Very slight lift |
| `--shadow-sm` / `shadow-sm` | `0 2px 6px rgb(16 35 63 / 6%)` | Restrained raised surface |
| `--shadow-md` / `shadow-md` | `0 4px 12px rgb(16 35 63 / 8%)` | Higher hierarchy where justified |
| `--shadow-overlay` / `shadow-overlay` | `0 12px 32px rgb(16 35 63 / 14%)` | Future dropdown/popover/drawer elevation |

Most content should rely on surface, border and spacing. No dramatic or colored glow shadows. Preview specimens demonstrate elevation without implementing overlays.

## Typography

`--font-sans`: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`. Fonts resolve locally with no download/CDN. Weight 650 uses the nearest available face where variable weights are unsupported.

Each role below defines `--text-{role}` plus `--text-{role}--line-height`, `--text-{role}--font-weight` and `--text-{role}--letter-spacing`. The `text-{role}` utility applies that complete bundle.

| Role / utility | Size token value | Line height | Weight | Letter spacing |
| --- | --- | --- | --- | --- |
| Page / `text-page` | `clamp(1.5rem, 1.25rem + 1vw, 2rem)` | 1.25 | 650 | -0.025em |
| Section / `text-section` | 1.125rem (18px) | 1.5 | 600 | -0.015em |
| Card / `text-card` | 1rem (16px) | 1.5 | 600 | -0.01em |
| Body / `text-body` | 1rem (16px) | 1.5 | 400 | 0em |
| Small body / `text-body-sm` | 0.875rem (14px) | 1.5 | 400 | 0em |
| Label / `text-label` | 0.875rem (14px) | 1.5 | 600 | 0em |
| Caption / `text-caption` | 0.75rem (12px) | 1.5 | 400 | 0.01em |
| Metric / `text-metric` | 2rem (32px) | 1.25 | 650 | -0.025em |

Use body for reading, small body for concise supporting information and captions only for nonessential annotations. Metrics use `tabular-nums` for comparable numeric widths; the specimen is a type sample, not a KPI. Use semantic heading order independently of visual type size. Do not force all headings to an oversized marketing scale.

## Spacing conventions

Retain Tailwind's default 0.25rem spacing rhythm; no duplicate spacing palette. Preferred conventions: control/icon gaps `gap-2` (8px) or `gap-3` (12px); compact panel padding `p-4` (16px), normal `p-5`/`p-6` (20/24px); section gaps `gap-6`/`gap-8` (24/32px). Preview gutters are `px-4 sm:px-6 lg:px-8` (16/24/32px). Future density adjustments must preserve readable text and target sizes.

## Control sizing conventions

| Root custom property | Value | Future purpose |
| --- | --- | --- |
| `--control-height-compact` | 2rem (32px) | Compact desktop controls with appropriate hit areas |
| `--control-height-default` | 2.5rem (40px) | Standard desktop control |
| `--control-height-touch` | 2.75rem (44px) | Minimum comfortable mobile target |
| `--control-height-large` | 3rem (48px) | Large control where appropriate |

Prefer minimum height so content can grow with zoom/wrapping. Fields and checkbox labels are at least 44px tall. Button and IconButton use 44px mobile targets, with compact/default 32/40px sizing from sm upward; large remains 48px. Touch-heavy desktop/tablet use can select large controls. Native field typography remains 16px.

## Responsive strategy and layout constants

Use existing Tailwind defaults: sm 40rem, md 48rem, lg 64rem, xl 80rem, 2xl 96rem (640/768/1024/1280/1536px at the default root size). No custom breakpoints added. Validation widths are **375, 430, 768, 1024, 1280, 1440 and 1920px**, not a new set of breakpoints.

`--container-reading: 72rem` exposes `max-w-reading` (1152px); `--container-content: 90rem` exposes `max-w-content` (1440px). These are optional local constraints, never universal authenticated-workspace limits. Sprint 1.1 specimens retain the reading cap; the Sprint 1.2 grid uses a preview-only 160rem cap with auto-fit columns. Primitives contain no dashboard max-width assumptions.

Mobile should stack content, wrap swatches and use touch-friendly controls; future navigation is a drawer. Tablet reduces density and adapts grids. Desktop can support sidebar/topbar and multiple columns in the later shell sprint. Large screens need intentional content caps. The preview moves from two to five swatch columns at sm and from stacked to two main columns at lg.

## Focus and accessibility

Global `:focus-visible` uses `--focus-width: 2px`, solid `--color-border-focus`, and `--focus-offset: 3px`. The visible outline adds geometry, not merely a text-color change. No outline reset or `!important` is used. Keep outlines unclipped by surrounding overflow. Blue/white contrast is **5.08:1**, blue/subtle **4.86:1**; future dark surfaces must receive a separately checked treatment.

Use semantic HTML, explicit labels, sensible DOM order and keyboard-operable native controls. State text remains readable without color. Do not infer authentication or authorization from styling. Global `color-scheme: light` retains light native controls even when the OS prefers dark; no theme toggle exists.

## Motion principles

Root tokens: `--motion-fast: 120ms`, `--motion-standard: 180ms`, `--motion-ease: cubic-bezier(0.2, 0, 0, 1)`. They are available for future functional hover/disclosure transitions, not decorative motion. Under `prefers-reduced-motion: reduce`, both duration tokens resolve to `0ms`.

Transitions consume those tokens, for example `duration-(--motion-fast) ease-(--motion-ease)`, and limit transitioned properties. Sprint 1.2 actions/cards use short color transitions. Loading icons use `motion-safe:animate-spin`; skeletons use `motion-safe:animate-pulse`. Both are disabled under reduced motion. Token overrides do not magically disable unrelated animation: future keyframes/transforms must explicitly honor reduced motion. No decorative looping cards, bouncing, glows or slow transitions.

## What not to do

- Do not copy raw palette hex values into JSX or create an unrelated local palette.
- Do not add large unused 50–950 scales, page-specific global tokens or independent duplicate token stores.
- Do not use brand red for every primary action, muted text on insufficiently contrasted backgrounds, or color as the only status cue.
- Do not rely on pale structural borders to identify interactive controls.
- Do not add glassmorphism, neon, excessive rounding/shadow, remote fonts, dark mode or animation libraries.
- Use the implemented primitives rather than copying their markup into future pages; do not add menus, dialogs, charts or business-domain mappings under Sprint 1.2.

## Sprint 1.1 verification record

Chromium smoke checks passed for `/`, `/admin`, `/counsellor` and `/student`, with no console/page errors. All seven target widths had no horizontal page overflow; swatches wrapped, heading sizes stayed 24–32px and the content cap held at large widths. Desktop/mobile screenshots were reviewed for surface hierarchy, type, restrained brand color, status legibility and subtle elevation.

Tab, text entry, Space checkbox toggle and reverse Tab passed; the field had a 2px outline with 3px offset and a 44px minimum height. Dark OS preference retained light rendering; reduced-motion durations resolved to 0ms. These are focused foundation checks, not a claim of exhaustive assistive-technology certification.

## Core primitive inventory and API (Sprint 1.2)

Import from `src/components/ui/index.js` or individual component files. Components forward ordinary DOM props and React 19 `ref` props to their root/control unless noted below. `className` extends styles; it is not a Tailwind conflict resolver. Prefer variant/size props for appearance and non-conflicting layout utilities for composition.

| Component | Implemented API and behavior |
| --- | --- |
| Button | `variant`: primary/secondary/outline/ghost/danger; `size`: sm/md/lg; `children`, `type`, `disabled`, `loading`, `leadingIcon`, `trailingIcon`, DOM props/ref. Safe `type="button"` default. Icons are Lucide component references. Loading retains the label's layout and accessible name, overlays a spinner, adds hidden Loading text and `aria-busy`, and natively disables activation. |
| IconButton | `icon`, required non-empty `aria-label`, `variant`: ghost/outline/primary/danger; `size`: sm/md/lg; native disabled/type/DOM props/ref. Missing labels throw an explicit error rather than silently shipping unnamed UI. Defaults to button type. |
| Card | `variant`: default/subtle/interactive; `as`: div by default, button or a for real interactions; children/className/DOM props/ref. No fixed width/height. Interactive affordances apply only to native buttons or anchors with href; static containers are not made focusable. Native button cards default to type button. |
| Badge | neutral/primary/success/warning/danger/info; sm/md sizes; children, optional `icon` or `dot`, span props/ref. Text wraps within available space, including unbroken labels. |
| StatusBadge | `status`: healthy/warning/critical/contacted/inactive/unverified; optional visible `label`; forwards Badge size/icon/dot/span props. Unknown statuses fall back to Unverified. Domain code may translate its state into these semantics later; no domain status rules are embedded. |
| Avatar | `src`, `name`, `alt`, sm/md/lg, wrapper span props/ref. 32/40/48px stable circles; first/last word initials, one initial for a single name, `?` for missing names. No external image service. A failed source falls back without changing dimensions; a different source can load on rerender. `alt=""` makes an intentionally redundant avatar decorative. |
| Input | label/id/name/placeholder/helperText/error/required/disabled, optional leadingIcon, normal input props/ref. `className` targets the input, `wrapperClassName` the field. Uses generated IDs when omitted; supports controlled value/onChange or uncontrolled defaultValue. |
| SearchInput | Input composition with native type search, Lucide Search, default visible Search label and placeholder. Supports the same props, including controlled value/onChange. No custom clear button or search service; any native browser search affordance is browser-owned. |
| Select | Native single select with label, `{ value, label, disabled? }[]` options, optional disabled placeholder, helperText/error, native required/disabled/value/onChange/defaultValue props/ref. An uncontrolled placeholder starts empty. Styling/outer wrapper props match Input. No custom dropdown/combobox. |
| Checkbox | label/id/name, description, checked/onChange or defaultChecked, disabled, indeterminate, wrapper className and native input props/ref. Clickable label has a 44px minimum target. A small effect synchronizes the native DOM-only indeterminate property; caller controls mixed-state transitions. |
| SectionHeader | title, description, optional action, `as` heading tag (h2 default), header className/DOM props/ref. Actions stack on mobile and wrap as a unit when local column space is limited. |
| EmptyState | Optional Lucide icon, title, description, action and `as` heading tag (h3 default), wrapper className/DOM props/ref. Compact and role-neutral, with no images or business behavior. |
| Skeleton | shape text/rectangle/circle, className and wrapper DOM props/ref. Decorative `aria-hidden` element. Low-priority CSS defaults allow caller sizing utilities to win. Use one named loading status on the parent region rather than announcing each shape. |

No new design token was needed. `actionStyles.js` shares literal action styles between Button and IconButton. `Field.jsx` and `fieldStyles.js` share label/description/error composition between Input and Select. These are small internal helpers, not a public form framework. Template strings suffice for class composition; no utility package/helper abstraction was introduced.

### Usage and composition

```jsx
<Button leadingIcon={Plus} onClick={handleAdd}>Add item</Button>
<IconButton icon={X} aria-label="Close panel" onClick={handleClose} />
<Input label="Name" name="name" helperText="Use the preferred name." />
<StatusBadge status="warning" label="Needs review" />
<Card as="a" href="/destination" variant="interactive">Open destination</Card>
```

These snippets illustrate API usage; destination pages and actions are not implemented by the primitive layer. Icons are component references, not emoji or a whole icon registry. Keep heading tags appropriate to the containing page. Do not nest another control inside a button/anchor Card. Card deliberately has no subcomponent hierarchy yet: compose normal headings, paragraphs and sections.

Use labels on Input/Select/Checkbox. If a visible label is intentionally omitted, the caller must supply an accessible name such as `aria-label`. Helper text and errors have stable IDs, and internal `aria-describedby` values merge with external descriptions. Error messages render visibly and set `aria-invalid`; native required semantics remain intact. Consumers must announce dynamic validation at the appropriate form boundary when needed, rather than indiscriminately making all errors live alerts.

Disabled controls use native disabled behavior and subdued styling. Loading buttons cannot submit/click repeatedly and retain approximately the same width. Do not override their disabled behavior, hide focus outlines, substitute color-only errors, or pass empty status labels. Unknown semantic statuses render a cautious Unverified fallback rather than asserting a domain outcome.

The Avatar ref/DOM props target the wrapper, not the internal image. To retry the exact same failed URL, remount with a changed React key; a changed URL retries naturally. No elaborate caching/retry system is introduced. The Checkbox effect is necessary for a DOM property, not presentational derived state. Avoid effects for things CSS/native elements already handle.

Skeleton text/rectangle/circle default dimensions are 16px high/full width, 96px high/full width and 40px square. Defaults live in `@layer components` using existing Tailwind sizing utilities; caller utilities such as `h-16 max-w-32` override them. Shape-specific radii and fill consume approved tokens. A parent owns loading semantics and actual content geometry.

## Wide-screen and mobile architecture

**24-inch+, Full HD, QHD and 4K displays are first-class supported layouts.** Future dashboards need fluid workspaces, sensible gutters, adaptive grids and local readable-width constraints. Do not place a universal narrow max-width around the authenticated dashboard. Text-heavy regions can be locally constrained; individual charts/tables can have sensible scan-width limits when needed. Additional screen area should enable useful columns and density, not infinitely scaled type or controls.

**360/375px mobile is also first-class**, not a shrunk desktop. Use stacked content, wrapping actions, readable labels and comfortable touch targets. The same principle applies across 390/430/480px phones, 768px tablets, 1024/1280px laptops and larger displays. Ordinary responsive layout uses CSS, not JavaScript viewport state.

The review page retains Sprint 1.1 specimens in a readable region and adds a separate fluid, auto-fit specimen grid. Its minimum column basis is 22rem, reduced to 100% when space is narrower, with 24px gaps. A local preview-only 160rem cap prevents extreme specimen stretching at 4K. This is not a shared layout token or dashboard width policy. Cards have no intrinsic grid width, and SectionHeader can wrap actions based on available local space.

Actual grid checks: one column at 360–768px; two at 1024px; three at 1280/1440px; five at 1920px; six at 2560/3840px. Type remains capped at 32px for page headings. Mobile buttons/icon buttons are at least 44px; large is 48px. Forms maintain 44px minimum heights. Layout growth never enlarges controls solely because the monitor is wider.

## Performance principles

- Prefer CSS-first responsiveness, native controls and simple composition. No viewport observers or global state for ordinary layout.
- Add dependencies only when a concrete need justifies them. No remote fonts, component libraries, animation libraries or utility packages were added here.
- Import named Lucide icons. No all-icons registry and no Recharts imports in this sprint.
- Keep assets small; Avatar has no remote service dependency. Optimize future image assets.
- Keep state local to the interactions that need it; do not add effects or blanket memoization to trivial components.
- Use restrained opacity/spin loading animation only when needed and honor reduced motion. Avoid layout-heavy animation.
- Monitor production bundle growth. Lazy-load genuinely heavy future modules where appropriate, not speculative routes today.
- Add charts only when they answer useful questions. Paginate/virtualize large datasets when actual scale requires it; no premature data-layer abstractions.

Lighthouse-oriented goals for later final QA remain Performance 90+, Accessibility 90+ and Best Practices 90+. These are targets, not measured or guaranteed scores for this sprint.

## Sprint 1.2 verification record

All widths **360, 375, 390, 430, 480, 768, 1024, 1280, 1440, 1920, 2560 and 3840px** passed Chromium checks for page overflow, control fit, bounded type sizing and adaptive specimen columns. Mobile buttons retained 44px minimum targets. Mobile, desktop and 4K specimens were visually reviewed; SectionHeader action wrapping was refined to prevent awkwardly compressed action text.

Keyboard traversal reached all 27 enabled preview controls with visible 2px focus and skipped native disabled/loading controls. Tested Button activation and safe form default, IconButton Enter/reset, text entry, controlled search, native Select arrows, Checkbox Space and mixed-state transition, Card link activation, and EmptyState action/ref focus. Error/helper/external descriptions were checked, including Select invalid state. Avatar image failure/source recovery retained dimensions. Loading Button width stayed stable and duplicate activation was blocked. Skeleton caller dimensions and reduced-motion animation suppression passed. All four application routes passed smoke checks with no console/page errors; role placeholders remain unchanged.

Temporary browser checks use the already available browser tooling outside the repository; no test framework/dependency or QA fixtures are shipped. These focused checks do not claim exhaustive screen-reader or Lighthouse certification. See the sprint report for measured Vite bundle sizes.

## Sprint 1.3 — Data display and navigation

These additions extend the approved tokens and core controls without introducing dependencies or new tokens. Import public components from `src/components/ui`. The root preview adds section **07 / Data display & navigation primitives**, with six fictional records in `src/data/foundationRecords.js`. None of the specimens performs business operations.

### Table composition and states

`TableContainer` provides a named, keyboard-focusable horizontal scrolling region; supply its `label`. `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell` and `TableCaption` retain native table elements. `TableHead` defaults to `scope="col"`; use `scope="row"` for record headings. DOM props and caller classes pass through these parts. A container is optional when overflow handling is unnecessary.

```jsx
<TableContainer label="Sample record comparison">
  <Table density="compact" className="min-w-[48rem]">
    <TableCaption>Fictional records for design review</TableCaption>
    <TableHeader><TableRow><TableHead>Name</TableHead><TableHead className="text-right">Count</TableHead></TableRow></TableHeader>
    <TableBody><TableRow state="attention">
      <TableHead scope="row">Sample record · Needs attention</TableHead>
      <TableCell className="text-right tabular-nums">12</TableCell>
    </TableRow></TableBody>
  </Table>
</TableContainer>
```

Density is `normal` (12px vertical cell padding) or `compact` (8px). `TableRow` accepts `default`, `selected`, `muted` or `attention`, plus optional default-row `hover`. `TableCell muted` uses secondary text. Caller classes control alignment and widths. Row states are presentation, never domain mappings or automatic selection. Add visible text/status, and caller-provided selection semantics when appropriate; do not depend on color. Rows are not clickable by default.

Actions are ordinary controls in cells. Compose an empty state inside a `TableCell colSpan={columnCount}`; compose existing Skeletons in normal rows for loading, with one parent loading status and `aria-busy` where appropriate. Table does not own sorting, filters, paging, fetching or selection logic.

### Three responsive data strategies

1. **Controlled horizontal scroll:** preserve comparison columns and set a caller-owned minimum table width. The named TableContainer contains overflow, accepts keyboard focus and allows native arrow scrolling; Tab leaves naturally. Supply a visible scrolling instruction when useful. The page must not scroll sideways.
2. **Priority columns:** apply the same responsive display classes to each secondary column's header and cells. The preview hides Branch/Owner below `lg` in its compact table. The table knows nothing about business priority. Never hide information essential to the current task without an alternative.
3. **CompactList alternative:** explicitly compose a `ul` with `CompactListItem` children for task-focused mobile records. Items accept `primary`, `secondary`, `leading`, `trailing` and `metadata` React content. They wrap naturally without fixed heights, and reserve readable primary width before wrapping trailing actions. Put an ordinary link in primary content and a separate button in trailing content; never wrap nested controls in another control.

The preview's alternative specimen uses `md:hidden` for the list and `hidden md:block` for the table, representing the same six records. Only one is displayed and exposed to accessibility APIs at a time. The separate comparison-table specimen remains visible to demonstrate strategy A. Breakpoint switching uses CSS only. Choose a representation for the task, not simply for visual consistency with desktop.

At Full HD, QHD and 4K, let containers use the workspace but distribute columns intentionally. Give text columns useful room, constrain narrow metadata columns and protect scan length; do not stretch every table to 3000px. The preview places tables beside each other from `xl`, uses a separate auto-fit grid with a 24rem basis for other specimens, and locally caps this section at 160rem. This is not a universal dashboard max-width. Type and control sizes stay stable as the workspace grows.

### Result context and separation

`DataSummary` accepts `from`, `to`, `total`, `label` (default `records`) and paragraph DOM props. With both bounds it renders “Showing 21–40 of 131 records”; otherwise it renders a count. It clamps ranges to the nonnegative total, including the final partial page. Callers can add `aria-live="polite"` when the context changes.

`Pagination` is controlled by `page`, `totalPages` and `onPageChange`. It supplies a named navigation region, previous/next boundary disabling, `aria-current="page"`, native buttons and optional `disabled`. `siblingCount` defaults to 1 and is bounded to 0–2 so even huge totals create at most seven numeric buttons, with ellipses. Total zero disables both directions. Mobile shows current/total text instead of numeric neighbors; previous/next retain touch sizing. Desktop rows may wrap within narrow cards. It reuses Button and does not fetch or slice data. In the preview its 131-result summary is explicitly independent of the six-row table.

`Separator` uses the existing border token and `role="separator"`, with horizontal default or `orientation="vertical"`. A caller provides meaningful vertical height through layout/classes.

### Navigation semantics and APIs

| Component | Contract |
| --- | --- |
| Breadcrumbs | Named `nav` and ordered list; items accept `label`, `href`, optional `id`, or a caller-supplied `link` element for router integration. Last item is current-page text. Labels wrap, and separators are decorative. Style/name custom links accessibly; no routing logic lives here. |
| Tabs | Controlled **in-page, automatic-activation** widget: `items`, `value`, `onValueChange`, `label`. Each item has unique `value`, `label`, `content`, optional `disabled` and `count`. Linked tab/panel IDs, roving tabIndex, Left/Right wrapping, Home/End and disabled skipping. Tab moves to the active focusable panel. Panels stay mounted but inactive ones are hidden. Horizontal scrolling preserves labels. Content should be immediate; this is not navigation or asynchronous panel loading. |
| NavItem | Caller-controlled `as` (anchor default), destination props, `icon`, `label`, `active`, `badge`, `trailing`, `disabled`, `collapsed`. Active navigation has a border and `aria-current`. Disabled renders a nonfocusable named link-role span and discards activation/destination props. Collapsed items need an icon and retain sr-only label. Use only navigation elements via `as`, not action buttons. |
| NavGroup | Static named group with optional `label` and children. No accordion, route configuration, authorization or sidebar behavior. |

Tabs follow the [WAI-ARIA tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/). Keep `value` synchronized in the change callback and provide unique item values. An invalid value falls back to the first enabled item; empty/all-disabled sets expose no active panel. Breadcrumbs/NavItem are navigation; Tabs is in-page state. These roles are not interchangeable.

### Dropdown and tooltip scope

`DropdownMenu` is an **action disclosure**, following [disclosure semantics](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/), not an ARIA menu widget. Its trigger render function receives a ref, button type, expanded/controls attributes and click handler; spread these onto Button/IconButton. `items` have unique `id`, `label`, optional `disabled`, `destructive`, `onSelect`, or `separator`. `label` names the open action group. Native action buttons use normal Tab/Shift+Tab; no menuitem roles or invented arrow-key model. Opening focuses the first enabled action; Escape/action activation closes and restores trigger focus. Leaving the group by Tab or pointer closes without stealing the new focus. Callbacks run once on activation.

Positioning is local absolute CSS with `align="start" | "end"` and `placement="top" | "bottom"`. There are no portals, collision detection, nested menus, custom interactive children or positioning measurements. A scroll container clips positioned descendants: choose placement with enough room, or compose actions outside the scroll region. The preview puts a dropdown only in the first table row, where its panel fits within the region; other row cells intentionally have no sample action. A document pointer listener exists only while a disclosure is open and is removed on close/unmount.

`Tooltip` accepts supplementary `content`, a child render function, top/bottom `placement`, and start/end `align`. Spread the supplied `aria-describedby` onto an independently named control. It appears on mouse/pen hover or keyboard focus, remains visible while the pointer is over the content, and dismisses on Escape even if hover began while focus was elsewhere. Touch does not require hover. A document Escape listener exists only while open and is cleaned up. The [tooltip pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) provides descriptive semantics; do not put actions or essential instructions in a tooltip. There is no animation, timer, portal, measurement or collision engine. Callers choose placement that fits visible space and avoid clipping ancestors.

### Accessibility rules and anti-patterns

- Preserve table headers/captions, native list/navigation semantics and independent action focus. Keep focus rings and readable text; active/attention/status meaning needs more than color.
- Do not squeeze desktop tables into mobile or replace semantic tables with div grids without a semantic reason.
- Do not use tooltips as accessible names, or remove the name of an icon-only control.
- Do not introduce giant generic DataTable engines, sorting/virtualization or business-specific columns before real requirements exist.
- Do not impose a universal narrow dashboard max-width or use JavaScript viewport detection/resize listeners for CSS layout problems.
- Do not call native action disclosures ARIA menus without implementing the corresponding menu keyboard model.

### Sprint 1.3 verification record

Chromium browser checks passed at **360, 375, 390, 430, 480, 768, 1024, 1280, 1440, 1920, 2560 and 3840px**: no page overflow; contained comparison-table scrolling; readable mobile lists; fitting pagination, breadcrumb, navigation, dropdown and tooltip specimens; focus outlines and mobile action sizing. Mobile, desktop and 4K captures were visually reviewed. Keyboard checks covered scroll-region exit, table/list actions, pagination boundaries/current state, tab wrapping/Home/End/disabled skipping/panel traversal, disclosure Tab/Escape/outside dismissal/focus restoration and tooltip focus/hover/Escape relationships. All four routes loaded without console or page errors; role placeholders were preserved.

This is focused browser/semantic QA, not a screen-reader audit or Lighthouse certification. No test dependencies or fixtures were added to the project. New listeners are interaction-scoped; ordinary layout remains CSS-driven. The sprint adds no Recharts imports, remote assets, datasets beyond six records, new tokens or dependencies. See the sprint report for final production bundle sizes and deltas.

## Sprint 2.1 — Shared dashboard shell

`DashboardLayout` accepts `role`, optional `user` and `navigation`, `title`, optional `description`, `breadcrumbs`, `actions` and `children`. It resolves role defaults and passes presentation inputs to `DashboardShell`. There is one implementation across Admin, Counsellor and Student. Workspace content remains a semantic `main` inside the shell rather than an unnecessary standalone wrapper component. PageHeader owns an h1, optional description, Breadcrumbs and wrapping actions. The root Foundation Preview is unchanged.

Sidebar, Topbar, MobileNavigation and PageHeader reuse NavItem, NavGroup, IconButton, Badge, Avatar and Breadcrumbs. ShellPreview reuses Card for explicitly neutral layout specimens. Existing primitive APIs and visual tokens are preserved; no replacement button/avatar/navigation styles were introduced.

### Responsive geometry and tokens

| Token | Value | Purpose |
| --- | --- | --- |
| `--shell-sidebar-expanded` | 16.5rem / 264px | Comfortable long navigation labels |
| `--shell-sidebar-collapsed` | 5rem / 80px | Named icon navigation |
| `--shell-drawer-width` | min(86vw, 20rem) | Compact drawer, visible dismissible backdrop |
| `--shell-topbar-height` | 4.5rem / 72px minimum | Stable brand/topbar alignment |
| `--shell-gutter` | clamp(1rem, 2vw, 3rem) | Fluid 16–48px gutters |
| `--layer-shell-chrome` | 20 | Sticky sidebar and topbar |
| `--layer-shell-skip` | 30 | Visible skip link above chrome |

Shell-specific rules live in `shell.css`, imported by the existing global entry. The single shell transition is **64rem / 1024px** (Tailwind `lg`): persistent sidebar at/above it, drawer navigation below. Smaller internal identity text adaptations do not change this layout model. The workspace has no max-width. Only individual reading surfaces are constrained: preview introduction at 56rem, paragraphs at readable measure. Auto-fit neutral specimens use available space without scaling type or controls.

At 1920px the expanded workspace is 1656px with four specimen columns; at 2560px it is 2296px with five; at 3840px it is 3576px with six occupied columns. Collapse adds 184px of workspace. These are viewport QA measurements, not claims about physical monitor sizes. Main content scrolls with the document; the topbar stays sticky. Min-width-zero grid children prevent content-driven page overflow.

### Sidebar and navigation

The full-height sticky sidebar separates a stable brand header, one internally scrollable navigation region and a stable footer. Long Admin navigation does not increase document height. The footer includes a working Foundation link, a preview/unavailable explanation and the desktop collapse control. The minimal AV monogram/text brand uses existing navy tokens and no external asset.

Collapse is local React state without persistence. Icon labels become visually hidden while accessible names, active border/color and `aria-current="page"` remain. Static group separators preserve structure. Native `title` text supplements collapsed labels on hover; no positioned tooltip is placed inside the clipping scroll region. Names do not depend on hover. The collapse/expand control retains focus, changes its accessible label and exposes expanded state. Mobile opening is separate state and never renders a desktop collapse control.

Admin uses all six supplied groups and their existing module vocabulary. Counsellor uses Main/My workspace; Student uses Main/My journey. Group/item config supports icons, route `to` or anchor `href`, optional badge and disabled state. Future items deliberately have no route and use the existing unavailable NavItem presentation. Dashboard uses React Router Link with exact pathname matching. This is navigation presentation, not authorization.

### Modal mobile navigation and cleanup

MobileNavigation mounts only while open and calls native `dialog.showModal()`. This puts navigation in the browser top layer and makes the background inert, following the [W3C native-dialog technique](https://www.w3.org/WAI/WCAG22/Techniques/html/H102). A named dialog contains the same Sidebar composition; its overlay uses the approved overlay token. The native top layer is above shell chrome without inflated z-index values; the panel sits on the overlay, with normal content below chrome. Existing dropdown/tooltip local layering remains unchanged.

Opening focuses the close control. Native modal semantics block background interaction, and a small local Tab/Shift+Tab boundary handler keeps traversal cycling between visible drawer controls. Escape, close button, backdrop click or a working navigation link dismisses the drawer. Disabled entries cannot navigate. Closing restores the menu trigger where still mounted/visible; crossing to desktop restores the collapse control instead. Navigating away does not focus a disconnected trigger.

Body overflow is saved before locking and restored on close/unmount, including StrictMode effect cleanup. One `matchMedia('(min-width: 64rem)')` change listener exists **only while the modal is open**, solely to close it when crossing to desktop and release inertness/scroll lock. It is not a resize listener, viewport state or JS layout calculation. It is removed on close/unmount. There are no permanent window/document interaction listeners or decorative scroll listeners.

The implementation targets current browsers with native modal-dialog support. Chromium behavior was tested; this is not formal screen-reader/WCAG certification or a cross-browser/mobile-device certification. Drawer opening/collapse are immediate; no motion or animation engine was introduced. Existing control transitions continue to honor reduced-motion tokens.

### Topbar and page composition

The sticky topbar shows role context, unavailable search/notification affordances and a fictional profile. At mobile sizes identity reduces to a named avatar and compact role context beside a 44px menu control; desktop exposes profile name/role. Long names truncate visually while the avatar accessible name and title retain the full identity. Profile presentation is not a fake interactive account menu.

Search and notification buttons remain keyboard discoverable with explicit unavailable accessible labels/descriptions and `aria-disabled`; they perform no action. The `99+` badge is a labeled fictional specimen, not a live count. Interactive shell controls use at least 44px targets. PageHeader breadcrumbs sit below the topbar; actions wrap independently of a long h1/description. A visible-on-focus skip link moves focus to the main workspace.

### Sprint 2.1 QA record

All three role routes passed actual Chromium checks at **360, 375, 390, 430, 480, 768, 1024, 1280, 1440, 1920, 2560 and 3840px**. Checks covered overflow, sidebar/internal scroll, expanded/collapsed widths, topbar/profile fit, page header/breadcrumbs, gutters, workspace grid use, named controls, focus indicators, drawer fit, background exclusion, body lock and dismissal/focus restoration. Root Foundation content remains intact. Visual captures were reviewed at mobile, expanded/collapsed desktop and 4K.

Additional temporary browser fixtures exercised long profile names, page titles, navigation labels, breadcrumbs, wrapping page actions and long document scrolling. Close/unmount restore prior overflow and remove modal breakpoint listeners. A breakpoint transition while open closes safely. Reduced-motion settings and skip-link behavior were checked. No test dependencies/fixtures were added to the repository. Lint/build/whitespace checks and bundle measurements are recorded in the sprint report.

## Sprint 2.2 — Admin operational workspace

The Admin content layer consumes the existing shell without changing its breakpoint, navigation, topbar, tokens or primitive APIs. `admin.css` defines scoped content-grid/container rules; ordinary styles continue to use approved semantic utilities. No new design token is needed. There is no viewport React state, effect, observer, chart dependency or animation loop in this layer.

### Cards and attention hierarchy

MetricCard composes Card with a label, formatted value, optional detail/icon and semantic tone. Business metrics use restrained informational color; exceptions use warning/danger borders and foregrounds plus explicit labels. Icons come from a small, explicitly imported set. There are no sparklines, decorative colors or fake comparisons. Metric cards are not click targets.

DashboardSection composes Card, SectionHeader and common loading/empty content. Each section has a meaningful accessible name; nested record headings do not break h1/h2/h3 hierarchy. Section focus targets support native in-page links with sticky-topbar scroll clearance. The data layer supplies operational labels and counts rather than modifying generic UI primitives.

### Grid and responsive order

The page remains fluid. Named CSS grid areas express these layout modes:

- **Below 768px:** two-column compact metric groups within a single content column. Exceptions → Needs Attention → follow-ups → pipeline → business/student context → recent records → deadlines/tasks → performance → notifications. DOM order follows this operational priority; desktop repositioning does not introduce a conflicting interactive tab sequence.
- **768–1279px:** two content columns for attention/follow-ups and secondary panels; metric groups use four columns. Pipeline, snapshot and comparison tables span the workspace. At 1024px the approved persistent sidebar appears; the remaining content still supports these modes without changing the shell breakpoint.
- **1280–1791px:** three content columns. Business and exception groups precede a two-column primary region and a right-side attention/follow-up rail. The trend receives the wider main region; source/website content can split internally.
- **1792–3199px:** four content columns, business/exception metrics share a row, recent tables sit side by side, and performance/attention regions distribute across the workspace.
- **3200px+:** six content columns, with bounded multi-column chart, record and operational sections. The workspace is never forced into a narrow centered container.

Panels align to their content height rather than stretching into tall empty surfaces. The trend figure is locally capped at 56rem; measured SVG widths range from 262px at 360px to 872px at 4K. Typography/control sizes do not scale with the monitor. Local constraints and additional columns protect reading/scanning quality.

### Pipeline and tables/lists

Pipeline uses a CSS segmented bar and a readable stage list with count and percentage. Seven primary stage groups expand from two to four to seven columns based on panel width. Agreement pending/completed are grouped with visible subcounts; terminal/review states remain explicit. Navy/blue categorical fills are not a red-to-green progress score. The neutral remainder corresponds to the separate terminal/review counts.

Recent Leads, Recent Applications and Branch Performance deliberately render Table and CompactList alternatives. A **42rem panel-content container query**, rather than a global viewport test, exposes exactly one representation. Comparison tables retain captions, scoped row/column headings, numeric alignment and named keyboard-scrollable containment when needed. Mobile lists show ownership, context, status and dates without squeezed columns. Only 4–5 records are duplicated in the DOM; CSS-hidden alternatives are removed from the accessibility tree. This remains suitable when panels grow after sidebar collapse.

### Analytics and text equivalents

The seven-day trend uses two SVG polylines, restrained primary/navy tokens and solid/dashed distinction. Grid lines have no data semantics. The SVG is decorative to assistive technology: nearby legend/totals and a visible, individually named daily-value list provide the complete numbers without hover. Daily counts are not a conversion-rate calculation. Sources use CSS bars beside explicit counts/percentages; website metrics are a compact definition list, not five extra KPI cards.

Recharts remains unimported. These tiny static series need neither a chart engine nor resize observers: CSS sizes the fixed-coordinate SVG and preserves readable HTML labels. Zero/single-day data was tested. No remote assets, chart animation, tooltips hiding essential values or speculative lazy-loading infrastructure were added.

### State and verification scope

Twelve data regions accept `loading` and empty inputs. Loading displays a named status, `aria-busy` and existing Skeletons; empty input displays existing EmptyState. Heading/context remains stable. Consumers provide real loading state later; there are no fake requests or timers. Metric cards are static aggregate fixtures in this sprint.

Actual Chromium QA passed **360, 375, 390, 430, 480, 768, 1024, 1280, 1440, 1920, 2560 and 3840px** for Admin, with smoke checks of the other three routes. Verified page/panel overflow, KPI fit, mobile ordering, exclusive table/list visibility, semantic tables, visible chart values, bounded chart widths, keyboard table exit and in-page navigation, shell drawer/collapse and mobile targets. Twenty-four loading/empty cases, long mobile records, zero data and reduced-motion skeletons passed. No application console/page errors were observed in final checks.

The supplied reference path was unavailable in this Windows workspace. Visual review therefore uses the sprint's written density/hierarchy/attention-rail criteria, not an asserted pixel comparison. Project documentation and approved tokens remain authoritative. No formal screen-reader, Lighthouse or cross-browser certification is claimed.
