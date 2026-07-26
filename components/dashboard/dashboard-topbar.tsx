'use client'

import { useRouter } from 'next/navigation'
import { LogOutIcon, UserRoundIcon } from 'lucide-react'
import { Logo } from '@/components/logo'

export function DashboardTopbar() {
  const router = useRouter()

  function handleLogout() {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('il-gusto-demo-session')
    }
    router.push('/login')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <div className="flex items-center gap-4">
          <Logo href="/dashboard" />
          <span className="hidden h-6 w-px bg-border sm:block" />
          <span className="eyebrow hidden sm:block">Back office</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden flex-col items-end leading-tight sm:flex">
            <span className="font-serif text-sm font-semibold text-foreground">
              Salma Benali
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Manager
            </span>
          </div>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground">
            <UserRoundIcon className="size-5" />
            <span className="sr-only">Manager account</span>
          </span>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <LogOutIcon className="size-4" />
            <span className="hidden sm:inline">Log out</span>
          </button>
        </div>
      </div>
    </header>
  )
}
