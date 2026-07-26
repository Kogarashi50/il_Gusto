import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  tone = 'default',
  href = '/',
}: {
  className?: string
  tone?: 'default' | 'inverted'
  href?: string
}) {
  return (
    <Link
      href={href}
      className={cn('group flex items-center gap-3', className)}
      aria-label="Il Gusto — home"
    >
      <span
        className={cn(
          'flex size-9 shrink-0 items-center justify-center rounded-full border font-serif text-sm font-bold',
          tone === 'inverted'
            ? 'border-primary-foreground/40 text-primary-foreground'
            : 'border-accent/60 text-accent',
        )}
      >
        IG
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-serif text-lg font-bold tracking-[0.14em]',
            tone === 'inverted' ? 'text-primary-foreground' : 'text-foreground',
          )}
        >
          IL GUSTO
        </span>
        <span
          className={cn(
            'mt-1 text-[10px] tracking-[0.34em] uppercase',
            tone === 'inverted'
              ? 'text-primary-foreground/70'
              : 'text-muted-foreground',
          )}
        >
          Ristorante
        </span>
      </span>
    </Link>
  )
}
