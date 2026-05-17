# Contributing to SignaKit Docs

The docs site is built with [Next.js](https://nextjs.org) and [Fumadocs](https://fumadocs.vercel.app). All content is MDX files — most contributions only require editing those, no code changes needed.

## Requirements

- Node.js 20+ (see `.nvmrc`)
- npm

## Getting Started

```bash
cd apps/docs
npm install
npm run dev
```

The site runs at `http://localhost:3000`. Changes to MDX files hot-reload instantly.

## Project Structure

```
content/docs/               # All documentation content (MDX)
  flags/
    index.mdx               # Flags landing page
    quickstart.mdx
    changelog.mdx
    troubleshooting.mdx
    concepts/               # Concept pages (feature flags, audiences, etc.)
    sdks/                   # One page per SDK
    guides/                 # Framework integration guides
  events/
    index.mdx

src/
  app/                      # Next.js app router
    docs/[[...slug]]/       # Catch-all doc page renderer
    page.tsx                # Home page
  components/               # Shared UI components
  lib/
    source.tsx              # Fumadocs source configuration
    navigation.ts           # Sidebar and nav helpers

source.config.ts            # Fumadocs MDX pipeline config
```

## Editing Content

All docs live under `content/docs/` as `.mdx` files. Edit them directly — no build step required for content changes.

### Frontmatter

Every page needs a title and description:

```mdx
---
title: Page Title
description: One sentence describing this page.
---
```

### Adding a New Page

1. Create the `.mdx` file in the appropriate directory.
2. Register it in the directory's `meta.json` under `"pages"` — order here controls sidebar order.

Example for a new SDK page:

```bash
# Create the file
touch content/docs/flags/sdks/my-sdk.mdx

# Then add "my-sdk" to content/docs/flags/sdks/meta.json
```

### Adding a New Section

1. Create a new directory under `content/docs/flags/` or `content/docs/events/`.
2. Add a `meta.json` with `"title"` and `"pages"`.
3. Register the directory name in the parent `meta.json`.

## Code Examples

Use fenced code blocks with a language tag:

````mdx
```typescript
const decision = await client.decide('my-flag', user);
```
````

For tabbed examples across multiple languages, use the `<Tabs>` component:

````mdx
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

<Tabs items={['Node.js', 'Python']}>
  <Tab value="Node.js">
  ```typescript
  const decision = await client.decide('my-flag', user);
  ```
  </Tab>
  <Tab value="Python">
  ```python
  decision = await client.decide("my-flag", user)
  ```
  </Tab>
</Tabs>
````

## Linting

```bash
npm run lint
```

## Building

```bash
npm run build
```

A production build catches broken imports and MDX errors that the dev server may miss. Run it before opening a PR if you've made structural changes (new pages, new components, changes to `source.config.ts`).

## Making Changes

1. Fork the repo and create a branch from `main`.
2. Edit MDX files or app code.
3. Verify your changes look correct at `http://localhost:3000`.
4. Run `npm run build` to catch any build-time errors.
5. Open a pull request against `main`.

## Deployment

The docs site deploys automatically to Vercel on every merge to `main`. No manual deploy step needed.

## Reporting Issues

Open an issue on GitHub describing the problem or suggestion. For broken links, incorrect code samples, or missing SDK docs, a PR is welcome directly.
