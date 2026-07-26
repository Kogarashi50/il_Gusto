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
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboardIcon, exact: true },
  { href: '/dashboard/orders', label: 'Orders', icon: ShoppingBagIcon },
  { href: '/dashboard/reservations', label: 'Reservations', icon: CalendarCheckIcon },
  { href: '/dashboard/stock', label: 'Ingredients', icon: ClipboardListIcon },
  { href: '/dashboard/users', label: 'Employees', icon: UsersRoundIcon },
  { href: '/dashboard/menu', label: 'Menu', icon: UtensilsCrossedIcon },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-full shrink-0 lg:w-60">
      <div className="lg:sticky lg:top-28">
        <p className="eyebrow mb-3 hidden px-2 lg:block">Navigation</p>
        <nav
          aria-label="Back office"
          className="-mx-4 flex gap-1 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 lg:flex-col lg:overflow-visible"
        >
          {navItems.map((item) => {
            const Icon = item.icon
            const active = item.exact
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex shrink-0 items-center gap-3 rounded-full px-4 py-2.5 text-sm transition-colors lg:rounded-lg',
                  active
                    ? 'bg-secondary font-medium text-accent'
                    : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                )}
              >
                <Icon className="size-4 shrink-0" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
