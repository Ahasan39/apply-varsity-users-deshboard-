import PrimitivePreview from './PrimitivePreview'
import DataDisplayPreview from './DataDisplayPreview'

// Local visual specimens, not business data or reusable production components.
const brandSamples = [
  ['Navy', 'bg-brand-navy'], ['Primary Blue', 'bg-primary'],
  ['Brand Red', 'bg-brand-red'], ['Background', 'bg-background'], ['Surface', 'bg-surface'],
]
const semanticSamples = [
  ['Success', 'bg-success-subtle text-success'], ['Warning', 'bg-warning-subtle text-warning'],
  ['Danger', 'bg-danger-subtle text-danger'], ['Info', 'bg-info-subtle text-info'],
  ['Neutral', 'bg-neutral-subtle text-neutral'],
]
const typeSamples = [
  ['Page Heading', 'Your next chapter', 'text-page'],
  ['Section Heading', 'A clear path forward', 'text-section'],
  ['Card Heading', 'Every detail matters', 'text-card'],
  ['Body', 'Clarity at every step of the student journey.', 'text-body'],
  ['Small Body', 'Useful context, without unnecessary noise.', 'text-body-sm'],
  ['Label', 'Assigned counsellor', 'text-label'],
  ['Caption', 'Supporting information and context', 'text-caption'],
  ['Metric', '1,234.56', 'text-metric tabular-nums'],
]
const surfaceSamples = [
  ['Primary surface', 'bg-surface'], ['Subtle surface', 'bg-surface-subtle'],
  ['Hover surface', 'bg-surface-hover'], ['Selected surface', 'bg-surface-selected'],
  ['Muted surface', 'bg-surface-muted'],
]
const radiusSamples = [
  ['Small', 'rounded-sm'], ['Medium', 'rounded-md'], ['Large', 'rounded-lg'],
  ['Extra-large', 'rounded-xl'], ['Full', 'rounded-full'],
]
const shadowSamples = [
  ['None', 'shadow-none'], ['XS', 'shadow-xs'], ['SM', 'shadow-sm'],
  ['MD', 'shadow-md'], ['Overlay', 'shadow-overlay'],
]
const statusSamples = [
  ['Healthy', 'bg-success-subtle text-success'], ['Warning', 'bg-warning-subtle text-warning'],
  ['Critical', 'bg-danger-subtle text-danger'], ['Contacted', 'bg-info-subtle text-info'],
  ['Inactive', 'bg-neutral-subtle text-neutral'],
  ['Unverified', 'border border-dashed border-strong bg-surface text-text-secondary'],
]

export default function FoundationPage() {
  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-reading">
      <header className="mb-8 border-b border-border pb-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-section text-brand-navy">Apply Varsity<span className="text-brand-red">.</span></p>
          <p className="text-label text-text-secondary">Sprints 1.1–1.3</p>
        </div>
        <h1 className="text-page text-brand-navy">Design Foundation</h1>
        <p className="mt-2 max-w-prose text-body-sm text-text-secondary">
          A shared visual language for the student journey. Light, clear, operational.
        </p>
        <p className="mt-2 text-body-sm text-text-secondary">Visual verification preview · No live data</p>
      </header>

      <section aria-labelledby="colors-heading" className="mb-8">
        <h2 id="colors-heading" className="text-section">01 / Color foundations</h2>
        <h3 className="mt-4 mb-3 text-label text-text-secondary">Brand colors</h3>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {brandSamples.map(([name, color]) => (
            <li key={name} className="min-w-0">
              <div aria-hidden="true" className={`h-16 rounded-md border border-border ${color}`} />
              <p className="mt-2 text-label">{name}</p>
            </li>
          ))}
        </ul>
        <h3 className="mt-6 mb-3 text-label text-text-secondary">Semantic colors</h3>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {semanticSamples.map(([name, color]) => (
            <li key={name} className={`rounded-md px-3 py-4 text-label ${color}`}>{name}</li>
          ))}
        </ul>
      </section>

      <div className="grid items-start gap-8 lg:grid-cols-2">
        <section aria-labelledby="type-heading">
          <h2 id="type-heading" className="mb-4 text-section">02 / Typography</h2>
          <dl className="divide-y divide-border-subtle rounded-lg border border-border bg-surface px-5">
            {typeSamples.map(([name, sample, typography]) => (
              <div key={name} className="py-4">
                <dt className="mb-1 text-caption text-text-muted">{name}</dt>
                <dd className={typography}>{sample}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="space-y-8">
          <section aria-labelledby="surfaces-heading">
            <h2 id="surfaces-heading" className="mb-4 text-section">03 / Surfaces &amp; structure</h2>
            <ul className="grid grid-cols-2 gap-3">
              {surfaceSamples.map(([name, surface]) => (
                <li key={name} className={`rounded-lg border border-border px-3 py-4 text-body-sm ${surface}`}>{name}</li>
              ))}
            </ul>
            <h3 className="mt-5 mb-3 text-label text-text-secondary">Radius</h3>
            <ul className="flex flex-wrap gap-3">
              {radiusSamples.map(([name, radius]) => (
                <li key={name} className={`border border-border-strong bg-surface px-3 py-2 text-caption ${radius}`}>{name}</li>
              ))}
            </ul>
            <h3 className="mt-5 mb-3 text-label text-text-secondary">Elevation</h3>
            <ul className="flex flex-wrap gap-3">
              {shadowSamples.map(([name, shadow]) => (
                <li key={name} className={`rounded-md border border-border bg-surface px-4 py-3 text-caption ${shadow}`}>{name}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="status-heading">
            <h2 id="status-heading" className="mb-2 text-section">04 / Status language</h2>
            <p className="mb-4 text-body-sm text-text-secondary">Visual samples only. Meaning always includes a label.</p>
            <ul className="flex flex-wrap gap-2">
              {statusSamples.map(([name, color]) => (
                <li key={name} className={`rounded-sm px-3 py-1 text-label ${color}`}>{name}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="focus-heading" className="rounded-lg border border-border bg-surface p-5">
            <h2 id="focus-heading" className="text-section">05 / Keyboard focus</h2>
            <p id="focus-help" className="mt-2 mb-4 text-body-sm text-text-secondary">
              Press Tab to focus the field and checkbox. Shift + Tab moves back.
            </p>
            <label htmlFor="focus-field" className="mb-2 block text-label">Sample text field</label>
            <input id="focus-field" type="text" autoComplete="off" aria-describedby="focus-help"
              placeholder="Try typing here" className="min-h-(--control-height-touch) w-full rounded-md border border-border-strong bg-surface px-3 text-body placeholder:text-text-muted" />
            <label className="mt-3 flex min-h-(--control-height-touch) w-fit cursor-pointer items-center gap-3 text-body-sm">
              <input type="checkbox" className="size-5 accent-primary" />
              Try a selected control
            </label>
          </section>
        </div>
      </div>
      </div>
      <PrimitivePreview />
      <DataDisplayPreview />
      <footer className="mx-auto mt-8 max-w-[160rem] border-t border-border pt-4 text-body-sm text-text-secondary">
        Foundation and primitive specimens only. No live data or dashboard workflows.
      </footer>
    </main>
  )
}
