import type { Metadata } from 'next'
import { ClipboardListIcon, PackageIcon, ShoppingBagIcon, UsersIcon } from 'lucide-react'
import { InfoCard } from '@/components/info-card'
import { PageHero } from '@/components/page-hero'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  dashboardStats,
  employees,
  ingredients,
  menuRows,
  orders,
  reservations,
} from '@/lib/data'

export const metadata: Metadata = {
  title: 'All Screens - Il Gusto',
  description:
    'Operational screens for reservations, orders, stock, menu items and restaurant staff.',
}

const screenCards = [
  {
    title: 'Reservations',
    text: 'Confirm tables, check covers and prepare guest notes.',
    icon: ClipboardListIcon,
  },
  {
    title: 'Orders',
    text: 'Track delivery status, payment method and order totals.',
    icon: ShoppingBagIcon,
  },
  {
    title: 'Stock',
    text: 'Monitor expiry dates and low ingredients before service.',
    icon: PackageIcon,
  },
  {
    title: 'Staff',
    text: 'Review contracts, roles and current availability.',
    icon: UsersIcon,
  },
]

export default function ScreensPage() {
  return (
    <>
      <PageHero
        eyebrow="Operations"
        title="All restaurant screens in one place"
        description="A compact staff view for the operational data already defined in the project."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dashboardStats.map((stat) => (
            <InfoCard key={stat.label} title={stat.label}>
              <p className="font-serif text-4xl text-accent">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.delta}</p>
            </InfoCard>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {screenCards.map((card) => {
            const Icon = card.icon

            return (
              <InfoCard key={card.title} title={card.title}>
                <Icon className="size-5 text-accent" />
                <p className="text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </InfoCard>
            )
          })}
        </div>

        <div className="mt-10 grid gap-8">
          <InfoCard title="Reservations" eyebrow="Room">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Guest</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Table</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reservations.map((reservation) => (
                  <TableRow key={reservation.id}>
                    <TableCell>{reservation.guest}</TableCell>
                    <TableCell>
                      {reservation.date}, {reservation.time}
                    </TableCell>
                    <TableCell>{reservation.table}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{reservation.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </InfoCard>

          <div className="grid gap-8 lg:grid-cols-2">
            <InfoCard title="Orders" eyebrow="Delivery">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.total} DH</TableCell>
                      <TableCell>{order.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </InfoCard>

            <InfoCard title="Stock" eyebrow="Kitchen">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ingredient</TableHead>
                    <TableHead>Qty</TableHead>
                    <TableHead>Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ingredients.map((ingredient) => (
                    <TableRow key={ingredient.id}>
                      <TableCell>{ingredient.name}</TableCell>
                      <TableCell>{ingredient.quantity}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            ingredient.level === 'ok' ? 'secondary' : 'destructive'
                          }
                        >
                          {ingredient.level}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </InfoCard>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <InfoCard title="Menu status" eyebrow="Board">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Available</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {menuRows.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.price} DH</TableCell>
                      <TableCell>{item.available ? 'Yes' : 'No'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </InfoCard>

            <InfoCard title="Staff" eyebrow="People">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        {employee.firstName} {employee.lastName}
                      </TableCell>
                      <TableCell>{employee.role}</TableCell>
                      <TableCell>{employee.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </InfoCard>
          </div>
        </div>
      </section>
    </>
  )
}
