import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, ClockIcon, QuoteIcon, StarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { featured, gallery } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/hero-pasta.png"
          alt="Shrimp spaghetti served in a ceramic bowl on a dark walnut table"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.18_0.02_50_/_0.82)] via-[oklch(0.18_0.02_50_/_0.62)] to-[oklch(0.18_0.02_50_/_0.9)]" />

        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <p className="eyebrow">Casablanca · since 2016</p>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] font-bold text-balance text-[oklch(0.97_0.012_84)] sm:text-6xl lg:text-7xl">
            Handmade pasta, wood fire, and no hurry.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-[oklch(0.9_0.014_84_/_0.8)] sm:text-lg">
            Il Gusto is a twenty-eight seat trattoria. The dough is rolled at
            seven, the ragù goes on at eight, and dinner starts when the oven
            hits 430°C.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              render={<Link href="/booking" />}
              className="h-12 px-7 text-sm"
            >
              Book a table
            </Button>
            <Button
              variant="outline"
              render={<Link href="/menu" />}
              className="h-12 border-[oklch(0.9_0.014_84_/_0.35)] bg-transparent px-7 text-sm text-[oklch(0.97_0.012_84)] hover:bg-[oklch(0.97_0.012_84_/_0.12)] hover:text-[oklch(0.97_0.012_84)]"
            >
              See the menu
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </div>

          <dl className="mt-6 grid w-full grid-cols-2 gap-6 border-t border-[oklch(0.9_0.014_84_/_0.2)] pt-8 sm:max-w-2xl sm:grid-cols-4">
            {[
              { k: 'Pasta cut', v: 'Daily' },
              { k: 'Oven', v: '430°C' },
              { k: 'Seats', v: '28' },
              { k: 'Kitchen', v: 'Til 23:30' },
            ].map((stat) => (
              <div
                key={stat.k}
                className="flex flex-col gap-1"
              >
                <dt className="text-[10px] tracking-[0.24em] uppercase text-[oklch(0.9_0.014_84_/_0.6)]">
                  {stat.k}
                </dt>
                <dd className="font-serif text-xl text-[oklch(0.97_0.012_84)]">
                  {stat.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Featured — a glimpse of Italy's savors */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <p className="eyebrow">A glimpse of Italy&apos;s savors</p>
            <h2 className="max-w-lg font-serif text-3xl leading-tight text-balance sm:text-4xl">
              Three plates that keep people coming back
            </h2>
          </div>
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 text-sm text-accent"
          >
            Full menu
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((dish, index) => (
            <li
              key={dish.name}
              className={
                index === 0
                  ? 'group overflow-hidden rounded-2xl border border-border bg-card sm:col-span-2 lg:col-span-1'
                  : 'group overflow-hidden rounded-2xl border border-border bg-card'
              }
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={dish.image || '/placeholder.svg'}
                  alt={dish.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-lg">{dish.name}</h3>
                  <p className="text-sm text-muted-foreground">{dish.note}</p>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 font-serif text-sm text-secondary-foreground">
                  {dish.price} DH
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Story strip */}
      <section className="border-y border-border bg-muted/60">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl sm:aspect-3/2 lg:aspect-4/5">
            <Image
              src="/images/chef.png"
              alt="Chef Marco rolling fresh pasta dough on a floured table"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <p className="eyebrow">The kitchen</p>
            <h2 className="font-serif text-3xl leading-tight text-balance sm:text-4xl">
              One chef, one board, thirty kilos of dough a week
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Marco learned this menu in his grandmother&apos;s kitchen outside
              Bologna. Nothing here is portioned in a factory: the tagliatelle
              is cut by hand, the ragù rests overnight, and the mozzarella
              arrives the morning it&apos;s used.
            </p>
            <figure className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
              <QuoteIcon className="size-5 text-accent" />
              <blockquote className="font-serif text-lg leading-relaxed italic">
                The best Italian food in the city, and the only place where the
                waiter argues with you about dessert. He was right.
              </blockquote>
              <figcaption className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className="size-3.5 fill-current"
                    />
                  ))}
                </span>
                Sofia B. · regular since 2019
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Gallery — Inside Il Gusto */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex flex-col gap-3">
          <p className="eyebrow">Inside Il Gusto</p>
          <h2 className="max-w-lg font-serif text-3xl leading-tight text-balance sm:text-4xl">
            The room, the pass, the light at seven
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((shot, index) => (
            <li
              key={shot.image}
              className={
                index === 0
                  ? 'group relative overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2'
                  : 'group relative overflow-hidden rounded-2xl'
              }
            >
              <div
                className={
                  index === 0
                    ? 'relative aspect-4/3 sm:aspect-square'
                    : 'relative aspect-4/3'
                }
              >
                <Image
                  src={shot.image || '/placeholder.svg'}
                  alt={shot.caption}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.02_50_/_0.75)] via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm text-[oklch(0.97_0.012_84)]">
                  {shot.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="font-serif text-3xl text-balance sm:text-4xl">
              Tonight still has a few tables
            </h2>
            <p className="flex items-center gap-2 text-sm text-primary-foreground/75">
              <ClockIcon className="size-4" />
              Last seating at 22:15 · Delivery until 23:00
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="secondary"
              render={<Link href="/booking" />}
              className="h-12 px-7 text-sm"
            >
              Reserve a table
            </Button>
            <Button
              variant="outline"
              render={<Link href="/order" />}
              className="h-12 border-primary-foreground/30 bg-transparent px-7 text-sm text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Order for delivery
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
