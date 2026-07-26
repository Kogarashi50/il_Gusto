import Link from 'next/link'
import { ClockIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Separator } from '@/components/ui/separator'

const columns = [
  {
    title: 'Visit',
    links: [
      { label: 'Menu', href: '/menu' },
      { label: 'Book a table', href: '/booking' },
      { label: 'Order in', href: '/order' },
      { label: 'Our story', href: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Staff login', href: '/login' },
      { label: 'All screens', href: '/screens' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm flex flex-col gap-5">
            <Logo tone="inverted" />
            <p className="text-sm leading-relaxed text-sidebar-foreground/70">
              A small kitchen with a wood-fired oven and a pasta board. Family
              recipes from Emilia-Romagna, cooked in Casablanca since 2016.
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-sidebar-primary" />
                <span className="text-sidebar-foreground/80">
                  42 Rue des Oliviers, Gauthier — Casablanca
                </span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 size-4 shrink-0 text-sidebar-primary" />
                <span className="text-sidebar-foreground/80">
                  +212 5 22 48 10 90
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 size-4 shrink-0 text-sidebar-primary" />
                <span className="text-sidebar-foreground/80">
                  Tue–Sun · 12:00–15:00 and 19:00–23:30
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            {columns.map((column) => (
              <div
                key={column.title}
                className="flex flex-col gap-4"
              >
                <h2 className="text-xs tracking-[0.28em] uppercase text-sidebar-primary">
                  {column.title}
                </h2>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-sidebar-foreground/75 transition-colors hover:text-sidebar-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10 bg-sidebar-border" />

        <div className="flex flex-col items-start justify-between gap-4 text-xs text-sidebar-foreground/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Il Gusto. All rights reserved.</p>
          <p className="font-serif text-sm italic text-sidebar-foreground/75">
            Mangia bene, ridi spesso, ama molto.
          </p>
        </div>
      </div>
    </footer>
  )
}
