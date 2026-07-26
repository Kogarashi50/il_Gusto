import type { Metadata } from 'next'
import { BikeIcon, ClockIcon, MapPinIcon } from 'lucide-react'
import { InfoCard } from '@/components/info-card'
import { PageHero } from '@/components/page-hero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { menu, orders } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Order - Il Gusto',
  description:
    'Order Il Gusto pasta, pizza, dolci, gelato and drinks for delivery in central Casablanca.',
}

const deliveryFacts = [
  { icon: BikeIcon, label: 'Delivery radius', value: '5 km from Gauthier' },
  { icon: ClockIcon, label: 'Delivery hours', value: '12:00-15:00 and 19:00-23:00' },
  { icon: MapPinIcon, label: 'Pickup', value: '42 Rue des Oliviers' },
]

export default function OrderPage() {
  return (
    <>
      <PageHero
        eyebrow="Order"
        title="Italian food packed for the ride"
        description="Choose from the current board and leave the address. The team confirms timing before the kitchen starts."
        image="/images/dish-bolognese.png"
        imageAlt="Fresh tagliatelle with slow cooked bolognese sauce"
      />

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.8fr]">
        <div className="flex flex-col gap-8">
          {menu.slice(0, 4).map((category) => (
            <InfoCard key={category.id} title={category.label} eyebrow={category.italian}>
              <ul className="flex flex-col">
                {category.items.slice(0, 4).map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-4 border-b border-border py-4 first:pt-0 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-serif text-lg">{item.name}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 font-serif text-lg text-accent">
                      {item.price} DH
                    </span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <InfoCard title="Delivery request" eyebrow="Basket">
            <form className="flex flex-col gap-4">
              <label className="flex flex-col gap-2 text-sm">
                Name
                <Input className="h-11" placeholder="Customer name" />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                Phone
                <Input className="h-11" placeholder="+212 ..." type="tel" />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                Address
                <Textarea className="min-h-24" placeholder="Street, building, floor, area" />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                Order
                <Textarea
                  className="min-h-32"
                  placeholder="Example: 1 shrimp spaghetti, 2 margherita, 1 tiramisu"
                />
              </label>
              <Button className="h-11 px-6">Send order</Button>
            </form>
          </InfoCard>

          <InfoCard title="Open orders" eyebrow="Kitchen">
            <ul className="flex flex-col gap-4">
              {orders.map((order) => (
                <li key={order.id} className="rounded-lg bg-muted p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-lg">{order.customer}</p>
                      <p className="text-sm text-muted-foreground">{order.address}</p>
                    </div>
                    <span className="text-sm font-medium text-accent">{order.total} DH</span>
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {order.status} - placed {order.placed}
                  </p>
                </li>
              ))}
            </ul>
          </InfoCard>

          <div className="grid gap-4">
            {deliveryFacts.map((fact) => {
              const Icon = fact.icon

              return (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <Icon className="mt-0.5 size-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium">{fact.label}</p>
                    <p className="text-sm text-muted-foreground">{fact.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
