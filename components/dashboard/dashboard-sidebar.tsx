'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  CalendarCheckIcon,
  ClipboardListIcon,
  LayoutDashboardIcon,
  ShoppingBagIcon,
  UsersRoundIcon,
  UtensilsCrossedIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/dashboard/orders', label: 'Orders', icon: ShoppingBagIcon },
  { href: '/dashboard/reservations', label: 'Reservations', icon: CalendarCheckIcon },
  { href: '/dashboard/stock', label: 'Ingredients', icon: ClipboardListIcon },
  { href: '/dashboard/users', label: 'Employees', icon: UsersRoundIcon },
  { href: '/dashboard/menu', label: 'Menu', icon: UtensilsCrossedIcon },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-full shrink-0 lg:w-64">
      <div className="flex h-full flex-col gap-6 rounded-2xl bg-sidebar/80 p-4 text-sidebar-foreground ring-1 ring-sidebar-border backdrop-blur">
        <div className="flex items-center gap-3 px-2 pt-2">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-sidebar-primary/60 font-serif text-sm font-bold text-sidebar-primary">
            IG
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-base font-bold tracking-[0.14em]">IL GUSTO</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-sidebar-foreground/60">
              Back office
            </span>
          </div>
        </div>

        <Link
          href="/dashboard"
          className={cn(
            'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors',
            pathname === '/dashboard'
              ? 'bg-sidebar-primary text-sidebar-primary-foreground'
              : 'bg-sidebar-accent/60 text-sidebar-foreground hover:bg-sidebar-accent',
          )}
        >
          <LayoutDashboardIcon className="size-5" />
          Dashboard
        </Link>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors',
                  active
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground',
                )}
                aria-current={active ? 'page' : undefined}
              >
                <Icon className="size-5 shrink-0" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
