import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'About — Il Gusto',
  description:
    'How a family recipe book from Emilia-Romagna became a twenty-eight seat trattoria in Casablanca.',
}

const milestones = [
  {
    year: '2016',
    title: 'A twelve-seat room',
    text: 'Marco and Salma open with one pasta machine, a borrowed oven and a menu of four dishes.',
  },
  {
    year: '2019',
    title: 'The wood-fired oven',
    text: 'The oven arrives from Naples in pieces and is rebuilt on site over three weeks.',
  },
  {
    year: '2022',
    title: 'The gelateria counter',
    text: 'Giulia joins from Palermo and starts churning gelato every morning before service.',
  },
  {
    year: '2025',
    title: 'Delivery, done properly',
    text: 'Insulated boxes, a five kilometre radius, and pasta that still arrives al dente.',
  },
]

const values = [
  {
    title: 'Made the same day',
    text: 'Pasta, focaccia, gelato and dolci are all produced in-house each morning.',
  },
  {
    title: 'Short supplier list',
    text: 'Six producers, most of them within an hour of the city, all paid on time.',
  },
  {
    title: 'A calm dining room',
    text: 'Twenty-eight seats, no screens, no music louder than the conversation.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A recipe book, a wood oven, and twenty-eight chairs"
        description="Il Gusto started as a Sunday habit and turned into a restaurant. Not much else has changed."
        image="/images/interior-1.png"
        imageAlt="The Il Gusto dining room at golden hour"
      />

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className="eyebrow">Our story</p>
          <h2 className="font-serif text-3xl leading-tight text-balance sm:text-4xl">
            We cook the food we grew up eating
          </h2>
          <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              Marco Ferrara grew up in a village outside Bologna where lunch was
              a two-hour event and every family had an opinion about ragù. He
              moved to Casablanca in 2014, missed the food, and started cooking
              for friends on Sundays. Word travelled faster than the seating
              plan could handle.
            </p>
            <p>
              Ten years later the kitchen still works the way it did on those
              Sundays. Dough at seven. Sauce at eight. Mozzarella delivered the
              morning it is used, never the day before. The menu changes when
              the market changes, and the specials board is written by hand
              because the kitchen decides late.
            </p>
            <p>
              Salma runs the room. She will remember that you sat at the corner
              table last time, that you take your espresso after dessert rather
              than with it, and that your daughter only eats the margherita.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<Link href="/booking" />}
              className="h-11 px-6"
            >
              Book a table
            </Button>
            <Button
              variant="outline"
              render={<Link href="/menu" />}
              className="h-11 px-6"
            >
              Read the menu
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
            <Image
              src="/images/storefront.png"
              alt="The Il Gusto facade at dusk with a small terrace"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="/images/chef.png"
                alt="Chef Marco rolling pasta dough"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="/images/interior-3.png"
                alt="Plates being finished at the pass"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <p className="eyebrow">Milestones</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-balance sm:text-4xl">
            Ten years, four turning points
          </h2>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((item) => (
              <li
                key={item.year}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
              >
                <span className="font-serif text-2xl text-accent">
                  {item.year}
                </span>
                <h3 className="font-serif text-lg leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col gap-3 border-t-2 border-accent pt-6"
            >
              <h3 className="font-serif text-xl">{value.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
