'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 py-24 text-center">
      {/* Subtle dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Toggle-off icon */}
      <div className="relative mb-8 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-28 text-muted-foreground/15"
          aria-hidden="true"
        >
          <circle cx="9" cy="12" r="3"></circle>
          <rect width="20" height="14" x="2" y="5" rx="7"></rect>
        </svg>
        <span className="absolute rounded bg-destructive/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-destructive">
          off
        </span>
      </div>

      {/* 404 */}
      <h1 className="text-9xl font-black tracking-tighter text-foreground">
        4<span className="text-primary">0</span>4
      </h1>

      {/* Headline + subtext */}
      <h2 className="mt-5 text-2xl font-semibold text-foreground">Feature not found.</h2>
      <p className="mt-2 max-w-sm text-muted-foreground">
        This page was allocated <span className="font-medium text-foreground">0% of traffic</span>.
        Either it lost the A/B test, or someone forgot to flip the flag.
      </p>

      {/* Fake code block */}
      <div className="mt-8 w-full max-w-sm rounded-lg border bg-muted/40 p-4 text-left font-mono text-xs">
        <p>
          <span className="text-primary/70">const</span>{' '}
          <span className="text-foreground">result</span>{' '}
          <span className="text-muted-foreground">=</span>{' '}
          <span className="text-primary/70">await</span>{' '}
          <span className="text-foreground">flags</span>
          <span className="text-muted-foreground">.</span>
          <span className="text-foreground">evaluate</span>
          <span className="text-muted-foreground">(</span>
          <span className="text-amber-600 dark:text-amber-400">&quot;this-page&quot;</span>
          <span className="text-muted-foreground">)</span>
        </p>
        <p className="mt-1 text-muted-foreground">
          {'// '}
          <span className="text-destructive">→ false</span>
          {' — paused, 0% rollout'}
        </p>
      </div>

      {/* CTAs */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
            aria-hidden="true"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Go back
        </button>

        <Link
          href="/"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 gap-2"
          prefetch={false}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" size-4"
            aria-hidden="true"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
          Return home
        </Link>
      </div>

      {/* Footer quip */}
      <p className="mt-16 text-xs text-muted-foreground">
        variant: <span className="font-medium">not-found</span> &middot; confidence:{' '}
        <span className="font-medium">100%</span> &middot; p-value:{' '}
        <span className="font-medium">irrelevant</span>
      </p>
    </div>
  )
}
