'use client'

import { type ReactNode, useMemo, useState } from 'react'
import { BellIcon, PencilIcon, PlusIcon, SearchIcon, Trash2Icon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type Column<T> = {
  key: string
  label: string
  className?: string
  render?: (row: T) => ReactNode
}

type DataTableProps<T> = {
  title: string
  columns: Column<T>[]
  rows: T[]
  searchKeys: (keyof T)[]
  searchPlaceholder?: string
}

export function DataTable<T extends Record<string, unknown>>({
  title,
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
      searchKeys.some((key) => String(row[key] ?? '').toLowerCase().includes(q)),
    )
  }, [query, rows, searchKeys])

  const gridTemplate = { gridTemplateColumns: `repeat(${columns.length}, minmax(7rem, 1fr))` }

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-center font-serif text-4xl text-primary-foreground sm:text-5xl">
        {title}
      </h1>

      <div className="flex flex-wrap items-center justify-end gap-3">
        <div className="flex items-center gap-2">
          <ToolbarButton label="Add row" disabled>
            <PlusIcon className="size-4" />
          </ToolbarButton>
          <ToolbarButton label="Delete row" disabled>
            <Trash2Icon className="size-4" />
          </ToolbarButton>
          <ToolbarButton label="Edit row" disabled>
            <PencilIcon className="size-4" />
          </ToolbarButton>
        </div>

        <label className="relative flex-1 sm:max-w-xs">
          <span className="sr-only">Search {title}</span>
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            className="h-10 w-full rounded-full border border-sidebar-border bg-card/70 pl-9 pr-4 text-sm text-foreground outline-none ring-ring/40 backdrop-blur placeholder:text-muted-foreground focus:ring-2"
          />
        </label>

        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-foreground"
          aria-label="Notifications"
        >
          <BellIcon className="size-5" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[46rem]">
          <div
            className="grid gap-x-4 border-b border-foreground/25 pb-3"
            style={gridTemplate}
          >
            {columns.map((column) => (
              <div
                key={column.key}
                className={cn(
                  'px-2 text-center font-serif text-base uppercase tracking-wide text-primary-foreground sm:text-lg',
                  column.className,
                )}
              >
                {column.label}
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2.5">
            {filtered.length === 0 ? (
              <p className="py-10 text-center text-sm text-primary-foreground/80">
                No matching records.
              </p>
            ) : (
              filtered.map((row, index) => (
                <div
                  key={String(row.id ?? index)}
                  className="grid items-center gap-x-4"
                  style={gridTemplate}
                >
                  {columns.map((column) => (
                    <div
                      key={column.key}
                      className="flex min-h-9 items-center justify-center rounded-full bg-dash-pill px-3 py-1.5 text-center text-xs text-dash-pill-foreground sm:text-sm"
                    >
                      <span className="truncate">
                        {column.render ? column.render(row) : String(row[column.key] ?? '')}
                      </span>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
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
      className="flex size-9 items-center justify-center rounded-full bg-sidebar text-sidebar-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
    >
      {children}
    </button>
  )
}
