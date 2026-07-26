'use client'

import { useRouter } from 'next/navigation'
import { UserRoundIcon } from 'lucide-react'

export function DashboardTopbar() {
  const router = useRouter()

  function handleLogout() {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('il-gusto-demo-session')
    }
    router.push('/login')
  }

  return (
    <header className="flex items-center justify-end gap-4">
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-2 text-right">
          <span className="rounded-full bg-sidebar/70 px-6 py-2 text-sm font-semibold tracking-wide text-sidebar-foreground ring-1 ring-sidebar-border">
            ID — MANAGER
          </span>
          <span className="rounded-full bg-sidebar/70 px-6 py-2 text-sm text-sidebar-foreground ring-1 ring-sidebar-border">
            Salma Benali
          </span>
          <button
            type="button"
            onClick={handleLogout}
            className="pr-2 text-xs font-semibold uppercase italic tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground"
          >
            Log out
          </button>
        </div>
        <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-secondary ring-1 ring-sidebar-border">
          <UserRoundIcon className="size-9 text-muted-foreground" />
        </span>
      </div>
    </header>
  )
}
