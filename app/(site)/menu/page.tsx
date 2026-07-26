import type { Metadata } from 'next'
import { MenuBrowser } from '@/components/menu-browser'
import { PageHero } from '@/components/page-hero'
import { menu } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Menu — Il Gusto',
  description:
    'Pasta, wood-fired pizza, salads, dolci, drinks and gelato. Prices in DH.',
}

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="La carta"
        title="Everything on the board today"
        description="Prices in dirham, service included. Tell us about allergies and the kitchen will work around them."
        image="/images/dish-pizza.png"
        imageAlt="Wood-fired margherita pizza on a wooden peel"
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <MenuBrowser categories={menu} />
      </section>
    </>
  )
}
