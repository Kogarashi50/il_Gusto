import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function InfoCard({
  title,
  eyebrow,
  children,
  className,
}: {
  title: string
  eyebrow?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        'flex flex-col gap-4 rounded-xl border border-border bg-card p-6',
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="font-serif text-xl leading-tight">{title}</h2>
      </div>
      {children}
    </section>
  )
}
