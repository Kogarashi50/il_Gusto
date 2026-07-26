import Link from 'next/link'
import {
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
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <p className="eyebrow">Back office</p>
        <h1 className="mt-2 font-serif text-4xl text-primary-foreground sm:text-5xl">Dashboard</h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-card/85 p-5 ring-1 ring-sidebar-border backdrop-blur"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="mt-1 font-serif text-4xl text-accent">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.delta}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between rounded-2xl bg-card/85 p-5 ring-1 ring-sidebar-border backdrop-blur transition-colors hover:bg-card"
            >
              <div>
                <p className="font-serif text-xl text-foreground">{link.label}</p>
                <p className="text-sm text-muted-foreground">
                  {link.value} {link.hint}
                </p>
              </div>
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="size-5" />
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
