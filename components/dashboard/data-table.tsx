'use client'

import { type ReactNode, useMemo, useState } from 'react'
import { PencilIcon, PlusIcon, SearchIcon, Trash2Icon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type Column<T> = {
  key: string
  label: string
  className?: string
  render?: (row: T) => ReactNode
}

type DataTableProps<T> = {
  title: string
  subtitle?: string
  columns: Column<T>[]
  rows: T[]
  searchKeys: (keyof T)[]
  searchPlaceholder?: string
}

const STATUS_TONES: Record<string, string> = {
  active: 'positive',
  confirmed: 'positive',
  delivered: 'positive',
  'paid online': 'positive',
  pending: 'warning',
  'on the way': 'warning',
  'on leave': 'warning',
  card: 'warning',
  'cash on delivery': 'warning',
  ended: 'negative',
  cancelled: 'negative',
  canceled: 'negative',
}

function StatusBadge({ value }: { value: string }) {
  const tone = STATUS_TONES[value.toLowerCase()] ?? 'neutral'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium',
        tone === 'positive' &&
          'border-accent/30 bg-accent/12 text-accent',
        tone === 'warning' &&
          'border-primary/25 bg-secondary text-secondary-foreground',
        tone === 'negative' &&
          'border-destructive/25 bg-destructive/10 text-destructive',
        tone === 'neutral' && 'border-border bg-muted text-muted-foreground',
      )}
    >
      <span
        className={cn(
          'size-1.5 rounded-full',
          tone === 'positive' && 'bg-accent',
          tone === 'warning' && 'bg-primary/60',
          tone === 'negative' && 'bg-destructive',
          tone === 'neutral' && 'bg-muted-foreground/50',
        )}
      />
      {value}
    </span>
  )
}

export function DataTable<T extends Record<string, unknown>>({
  title,
  subtitle,
  columns,
  rows,
  searchKeys,
  searchPlaceholder = 'Search',
}: DataTableProps<T>) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return rows
    return rows.filter((row) =>
      searchKeys.some((key) =>
        String(row[key] ?? '')
          .toLowerCase()
          .includes(q),
      ),
    )
  }, [query, rows, searchKeys])

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">
            {subtitle ?? `${filtered.length} of ${rows.length} records`}
          </p>
          <h1 className="mt-2 font-serif text-4xl leading-none text-balance sm:text-5xl">
            {title}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <ToolbarButton label="Add row" disabled>
            <PlusIcon className="size-4" />
          </ToolbarButton>
          <ToolbarButton label="Edit row" disabled>
            <PencilIcon className="size-4" />
          </ToolbarButton>
          <ToolbarButton label="Delete row" disabled>
            <Trash2Icon className="size-4" />
          </ToolbarButton>
        </div>
      </div>

      <label className="relative w-full sm:max-w-sm">
        <span className="sr-only">Search {title}</span>
        <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          className="h-11 w-full rounded-full border border-border bg-card pl-10 pr-4 text-sm text-foreground outline-none ring-ring/40 placeholder:text-muted-foreground focus:border-accent focus:ring-2"
        />
      </label>

      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[46rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    scope="col"
                    className={cn(
                      'px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground',
                      column.className,
                    )}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-5 py-16 text-center text-sm text-muted-foreground"
                  >
                    No matching records.
                  </td>
                </tr>
              ) : (
                filtered.map((row, index) => (
                  <tr
                    key={String(row.id ?? index)}
                    className="border-b border-border/60 transition-colors last:border-0 hover:bg-secondary/40"
                  >
                    {columns.map((column) => {
                      const content = column.render
                        ? column.render(row)
                        : String(row[column.key] ?? '')

                      return (
                        <td
                          key={column.key}
                          className="px-5 py-4 align-middle text-foreground"
                        >
                          {column.key === 'status' &&
                          typeof content === 'string' ? (
                            <StatusBadge value={content} />
                          ) : column.key === 'id' ? (
                            <span className="font-mono text-xs tracking-wide text-muted-foreground">
                              {content}
                            </span>
                          ) : (
                            content
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function ToolbarButton({
  children,
  label,
  disabled,
}: {
  children: ReactNode
  label: string
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:border-border disabled:hover:text-foreground"
    >
      {children}
    </button>
  )
}
