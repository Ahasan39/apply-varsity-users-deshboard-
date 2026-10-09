# Apply Varsity design system

## Scope and design goals

**Sprint 1.1 complete and approved:** shared light-mode tokens and global foundations. **Sprint 1.2 implemented:** 13 reusable core primitives and a combined `/` review surface. This remains the visual source of truth; no dashboard shell, role dashboards, charts or business data are implemented here.

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
