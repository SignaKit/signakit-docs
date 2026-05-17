import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { source } from '@/lib/source'
import { linkItems } from '@/components/shared'
import { getSection } from '@/lib/navigation'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      links={linkItems.filter((item) => item.type === 'icon')}
      nav={{
        title: (
          <span className="flex items-center gap-2">
            <span className="flex items-center text-fd-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 104.75 26"
                fill="currentColor"
                aria-hidden="true"
                width="104.75"
                height="26"
              >
                <path d="m39.12,19.61c-.95,0-1.76-.1-2.42-.29s-1.29-.44-1.88-.73v-2.18h.12c.57.54,1.22.96,1.95,1.25s1.43.44,2.1.44c.96,0,1.69-.2,2.18-.6s.74-.93.74-1.59c0-.52-.13-.95-.39-1.27s-.67-.57-1.23-.73c-.4-.12-.77-.21-1.11-.29s-.75-.18-1.26-.31c-.45-.12-.86-.27-1.21-.45s-.67-.42-.95-.71c-.27-.29-.48-.63-.63-1.02s-.22-.84-.22-1.35c0-1.06.41-1.95,1.24-2.67s1.88-1.08,3.16-1.08c.73,0,1.43.07,2.08.22s1.26.35,1.81.62v2.08h-.13c-.42-.38-.95-.71-1.6-1s-1.33-.43-2.05-.43c-.81,0-1.46.19-1.96.57s-.75.87-.75,1.49c0,.56.15,1,.44,1.33s.72.57,1.27.72c.37.1.82.21,1.35.34s.98.24,1.33.35c.9.28,1.56.69,1.98,1.25s.62,1.24.62,2.06c0,.51-.1,1.01-.31,1.51s-.5.92-.87,1.27c-.42.38-.9.67-1.43.88s-1.19.31-1.99.31Z" />
                <path d="m48.07,7.91h-1.88v-1.71h1.88v1.71Zm-.11,11.46h-1.65v-9.82h1.65v9.82Z" />
                <path d="m51.64,20.95c.11.05.28.11.49.19s.46.15.74.22c.3.08.59.14.84.18s.54.07.84.07c.51,0,.94-.07,1.3-.2s.63-.32.83-.56c.19-.24.32-.52.4-.83s.11-.68.11-1.08v-.86c-.45.39-.88.67-1.31.86s-.96.28-1.61.28c-1.12,0-2.01-.42-2.67-1.25s-.99-2.03-.99-3.59c0-.81.11-1.54.34-2.17s.54-1.16.92-1.6c.37-.42.81-.75,1.31-.98s1.03-.34,1.56-.34c.51,0,.95.06,1.32.18s.75.29,1.12.51l.1-.42h1.56v8.7c0,1.66-.36,2.89-1.09,3.67s-1.84,1.17-3.33,1.17c-.48,0-.97-.04-1.47-.11s-.97-.18-1.4-.31v-1.72h.09Zm5.55-4.24v-5.39c-.41-.2-.79-.34-1.14-.43s-.7-.13-1.04-.13c-.84,0-1.5.31-1.98.92s-.72,1.5-.72,2.65.18,1.92.55,2.49.96.85,1.78.85c.43,0,.87-.08,1.32-.25s.86-.41,1.23-.71Z" />
                <path d="m69.85,19.37h-1.65v-5.59c0-.45-.02-.87-.07-1.26s-.13-.7-.25-.94c-.13-.25-.32-.43-.56-.55s-.57-.18-.98-.18-.83.11-1.27.33-.86.51-1.28.86v7.33h-1.65v-9.82h1.65v1.09c.49-.44.98-.78,1.46-1.01s.99-.35,1.52-.35c.97,0,1.72.32,2.27.95s.82,1.56.82,2.76v6.37Z" />
                <path d="m78.56,18.33c-.13.1-.32.24-.54.42s-.44.32-.65.43c-.29.15-.58.27-.85.35s-.65.12-1.15.12c-.4,0-.79-.08-1.15-.23s-.68-.37-.96-.64c-.26-.27-.47-.6-.63-1s-.24-.81-.24-1.25c0-.68.14-1.26.43-1.74s.74-.86,1.36-1.14c.55-.25,1.2-.43,1.95-.52s1.56-.17,2.43-.22v-.32c0-.39-.06-.7-.18-.94s-.28-.42-.49-.55c-.21-.13-.47-.22-.77-.27s-.62-.07-.94-.07c-.38,0-.83.06-1.34.17s-1.03.28-1.55.5h-.1v-1.68c.3-.09.74-.18,1.31-.29s1.13-.16,1.69-.16c.67,0,1.24.05,1.71.16s.88.3,1.25.57c.36.27.62.62.8,1.05s.26.95.26,1.56v6.71h-1.64v-1.05Zm0-1.37v-2.72c-.39.04-.89.08-1.49.15s-1.08.15-1.45.26c-.44.13-.8.34-1.09.62s-.43.67-.43,1.16c0,.56.16.99.47,1.27s.78.43,1.39.43c.52,0,.99-.11,1.42-.34s.82-.5,1.19-.83Z" />
                <path d="m93.09,19.37h-2.26l-4.77-6.09-.76.86v5.23h-1.74V6.29h1.74v6.02l5.36-6.02h2.12l-5.41,5.84,5.73,7.24Z" />
                <path d="m96.7,7.91h-1.88v-1.71h1.88v1.71Zm-.11,11.46h-1.65v-9.82h1.65v9.82Z" />
                <path d="m102.92,19.57c-.9,0-1.61-.26-2.11-.77s-.76-1.32-.76-2.43v-5.44h-1.12v-1.37h1.12v-2.82h1.65v2.82h3.04v1.37h-3.04v4.67c0,.5,0,.88.03,1.15s.08.52.2.76c.1.21.26.36.48.46s.52.15.91.15c.27,0,.53-.04.78-.12s.43-.15.54-.2h.1v1.49c-.31.09-.62.16-.94.21s-.61.07-.88.07Z" />
                <polygon points="3.5 11.82 11.82 3.5 11.82 0 0 11.82 3.5 11.82" fill="#3b82f6" />
                <polygon points="11.82 22.5 3.5 14.18 0 14.18 11.82 26 11.82 22.5" fill="#3b82f6" />
                <polygon
                  points="22.49 14.18 14.17 22.5 14.17 26 25.99 14.18 22.49 14.18"
                  fill="#3b82f6"
                />
                <polygon points="14.17 3.5 22.5 11.83 26 11.83 14.17 0 14.17 3.5" fill="#3b82f6" />
              </svg>
            </span>
            <span className="text-fd-muted-foreground font-normal text-sm">docs</span>
          </span>
        ),
      }}
      tabs={{
        transform(option, node) {
          const meta = source.getNodeMeta(node)
          if (!meta || !node.icon) return option
          const color = `var(--${getSection(meta.path)}-color, var(--color-fd-foreground))`

          return {
            ...option,
            icon: (
              <div
                className="[&_svg]:size-full rounded-lg size-full text-(--tab-color) max-md:bg-(--tab-color)/10 max-md:border max-md:p-1.5"
                style={
                  {
                    '--tab-color': color,
                  } as object
                }
              >
                {node.icon}
              </div>
            ),
          }
        },
      }}
      sidebar={{
        footer: (
          <div className="px-2 py-2 text-xs text-fd-muted-foreground space-y-1">
            <a
              href="https://signakit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-fd-foreground transition-colors"
            >
              signakit.com ↗
            </a>
            <a
              href="https://app.signakit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-fd-foreground transition-colors"
            >
              Dashboard ↗
            </a>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  )
}
