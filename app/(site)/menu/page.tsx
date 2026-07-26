import type { Metadata } from 'next'
import { MenuBrowser } from '@/components/menu-browser'
import { menu } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Menu - Il Gusto',
  description:
    'Pasta, wood-fired pizza, salads, dolci, drinks and gelato. Prices in DH.',
}

export default function MenuPage() {
  return (
    <>
      <section className="bg-[oklch(0.12_0.018_50)] text-[oklch(0.96_0.012_84)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-12 sm:px-6 sm:py-16">
          <p className="eyebrow">La carta</p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
            Everything on the board today
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[oklch(0.72_0.032_65)] sm:text-base">
            Prices in dirham. Service included. Tell us about allergies and the
            kitchen will work around them.
          </p>
        </div>
      </section>
      <MenuBrowser categories={menu} />
    </>
  )
}
