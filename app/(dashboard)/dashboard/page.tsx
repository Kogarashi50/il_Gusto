import Link from 'next/link'
import {
  ArrowUpRightIcon,
  CalendarCheckIcon,
  ClipboardListIcon,
  ShoppingBagIcon,
  UsersRoundIcon,
  UtensilsCrossedIcon,
} from 'lucide-react'
import {
  dashboardStats,
  employees,
  ingredients,
  menuRows,
  orders,
  reservations,
} from '@/lib/data'

const quickLinks = [
  {
    href: '/dashboard/orders',
    label: 'Orders',
    icon: ShoppingBagIcon,
    value: orders.length,
    hint: 'active orders',
  },
  {
    href: '/dashboard/reservations',
    label: 'Reservations',
    icon: CalendarCheckIcon,
    value: reservations.length,
    hint: 'upcoming tables',
  },
  {
    href: '/dashboard/stock',
    label: 'Ingredients',
    icon: ClipboardListIcon,
    value: ingredients.length,
    hint: 'tracked items',
  },
  {
    href: '/dashboard/users',
    label: 'Employees',
    icon: UsersRoundIcon,
    value: employees.length,
    hint: 'on the roster',
  },
  {
    href: '/dashboard/menu',
    label: 'Menu',
    icon: UtensilsCrossedIcon,
    value: menuRows.length,
    hint: 'dishes listed',
  },
]

export default function DashboardOverviewPage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="eyebrow">Buonasera, Salma</p>
        <h1 className="mt-2 font-serif text-4xl leading-none text-balance sm:text-5xl">
          Service at a glance
        </h1>
        <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
          Everything happening across the floor, the kitchen and the pass
          tonight. Jump into a section to see the full list.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="mt-2 font-serif text-4xl text-accent">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.delta}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <p className="eyebrow">Sections</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-serif text-xl text-foreground">
                      {link.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {link.value} {link.hint}
                    </p>
                  </div>
                </div>
                <ArrowUpRightIcon className="size-5 text-muted-foreground transition-colors group-hover:text-accent" />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
