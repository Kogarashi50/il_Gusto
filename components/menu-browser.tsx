'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { MenuCategory, MenuItem } from '@/lib/data'

type MenuChoice = MenuItem & {
  key: string
  categoryId: string
  categoryLabel: string
  categoryItalian: string
  image: string
}

type StoredCartItem = {
  key: string
  name: string
  description: string
  price: number
  image: string
  quantity: number
}

const CART_KEY = 'il-gusto-cart'

const itemImages: Record<string, string> = {
  'Spaghetti Bolognese': '/images/dish-bolognese.png',
  'Shrimp Spaghetti': '/images/hero-pasta.png',
  'Lasagne al Forno': '/images/dish-bolognese.png',
  "Penne all'Arrabbiata": '/images/dish-bolognese.png',
  'Chicken Alfredo': '/images/dish-bolognese.png',
  'Risotto ai Funghi': '/images/dish-bolognese.png',
  'Margherita Classica': '/images/dish-pizza.png',
  'Chicken BBQ': '/images/dish-pizza.png',
  'Quattro Stagioni': '/images/dish-pizza.png',
  'Ricotta & Pesto': '/images/dish-pizza.png',
  'Calzone del Chef': '/images/dish-pizza.png',
  'Insalata Caesar': '/images/dish-salad.png',
  'Burrata & Peach': '/images/dish-salad.png',
  'Caprese di Bufala': '/images/dish-salad.png',
  'Tiramisu della Casa': '/images/dish-tiramisu.png',
  'Panna Cotta': '/images/dish-tiramisu.png',
  'Cannoli Siciliani': '/images/dish-tiramisu.png',
  'Aperol Spritz (0%)': '/images/dish-spritz.png',
  'Virgin Mojito': '/images/dish-spritz.png',
  Espresso: '/images/dish-spritz.png',
  'Limonata Siciliana': '/images/dish-spritz.png',
  'Pistacchio di Bronte': '/images/dish-gelato.png',
  'Mint & Lemon': '/images/dish-gelato.png',
  Stracciatella: '/images/dish-gelato.png',
}

function normalizeName(name: string) {
  return name.replace('TiramisÃ¹', 'Tiramisu')
}

function getItemImage(item: MenuItem, category: MenuCategory) {
  return itemImages[normalizeName(item.name)] ?? category.image
}

function readCart() {
  try {
    const stored = window.localStorage.getItem(CART_KEY)
    return stored ? (JSON.parse(stored) as StoredCartItem[]) : []
  } catch {
    return []
  }
}

function writeCart(items: StoredCartItem[]) {
  window.localStorage.setItem(CART_KEY, JSON.stringify(items))
}

function getCartCount(items: StoredCartItem[]) {
  return items.reduce((total, item) => total + item.quantity, 0)
}

export function MenuBrowser({ categories }: { categories: MenuCategory[] }) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id)
  const [selectedKey, setSelectedKey] = useState('')
  const [cartCount, setCartCount] = useState(0)

  const choices = useMemo<MenuChoice[]>(
    () =>
      categories.flatMap((category) =>
        category.items.map((item) => ({
          ...item,
          key: `${category.id}-${item.name}`,
          categoryId: category.id,
          categoryLabel: category.label,
          categoryItalian: category.italian,
          image: getItemImage(item, category),
        })),
      ),
    [categories],
  )

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0]
  const visibleChoices = choices.filter(
    (choice) => choice.categoryId === activeCategory.id,
  )
  const selectedChoice =
    visibleChoices.find((choice) => choice.key === selectedKey) ?? visibleChoices[0]

  useEffect(() => {
    setCartCount(getCartCount(readCart()))
  }, [])

  function selectCategory(categoryId: string) {
    const nextCategory = categories.find((category) => category.id === categoryId)
    setActiveCategoryId(categoryId)
    setSelectedKey(
      nextCategory ? `${nextCategory.id}-${nextCategory.items[0].name}` : '',
    )
  }

  function addToCart(choice: MenuChoice) {
    const cart = readCart()
    const existing = cart.find((item) => item.key === choice.key)
    const nextCart = existing
      ? cart.map((item) =>
          item.key === choice.key
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      : [
          ...cart,
          {
            key: choice.key,
            name: choice.name,
            description: choice.description,
            price: choice.price,
            image: choice.image,
            quantity: 1,
          },
        ]

    writeCart(nextCart)
    setCartCount(getCartCount(nextCart))
  }

  return (
    <section className="relative border-y border-[oklch(1_0_0_/_0.1)] bg-[oklch(0.12_0.018_50)] text-[oklch(0.96_0.012_84)]">
      <div className="border-b border-[oklch(1_0_0_/_0.08)]">
        <div className="mx-auto flex w-full max-w-6xl gap-8 overflow-x-auto px-4 sm:px-6">
          {categories.map((category) => (
            <button
              className={cn(
                'shrink-0 border-b-2 border-transparent px-2 py-5 text-sm text-[oklch(0.68_0.032_65)] transition-colors hover:text-accent',
                activeCategory.id === category.id && 'border-accent text-[oklch(0.96_0.012_84)]',
              )}
              key={category.id}
              onClick={() => selectCategory(category.id)}
              type="button"
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto flex min-h-[500px] w-full max-w-6xl flex-col lg:flex-row">
        <aside className="relative h-[420px] shrink-0 overflow-hidden lg:sticky lg:top-20 lg:w-80">
          <Image
            alt={selectedChoice.name}
            className="object-cover transition-opacity duration-500"
            fill
            priority
            sizes="(min-width: 1024px) 320px, 100vw"
            src={selectedChoice.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.014_50_/_0.92)] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 flex flex-col gap-2 p-5">
            <p className="text-xs tracking-[0.22em] uppercase text-accent">
              {selectedChoice.categoryItalian}
            </p>
            <h2 className="font-serif text-xl leading-tight">{selectedChoice.name}</h2>
            <p className="text-sm leading-relaxed text-[oklch(0.68_0.032_65)]">
              {selectedChoice.description}
            </p>
            <Button
              className="mt-2 h-10 w-fit bg-accent px-5 text-sm text-accent-foreground hover:bg-accent/90"
              onClick={() => addToCart(selectedChoice)}
              type="button"
            >
              + Ajouter au panier
            </Button>
          </div>
        </aside>

        <ul className="flex min-w-0 flex-1 flex-col px-4 py-6 sm:px-6 lg:px-10">
          {visibleChoices.map((choice) => {
            const active = choice.key === selectedChoice.key

            return (
              <li
                className="group grid grid-cols-[1fr_auto] items-start gap-4 border-b border-[oklch(1_0_0_/_0.08)] py-4 sm:grid-cols-[1fr_auto_auto]"
                key={choice.key}
              >
                <button
                  className="min-w-0 text-left"
                  onClick={() => setSelectedKey(choice.key)}
                  type="button"
                >
                  <span className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        'font-serif text-lg leading-tight transition-colors',
                        active ? 'text-accent' : 'text-[oklch(0.96_0.012_84)]',
                      )}
                    >
                      {choice.name}
                    </span>
                    {choice.tag && (
                      <Badge
                        className={cn(
                          choice.tag === 'Vegetarian'
                            ? 'bg-[oklch(0.25_0.065_135)] text-[oklch(0.78_0.13_135)]'
                            : 'bg-[oklch(0.24_0.052_55)] text-accent',
                        )}
                        variant="secondary"
                      >
                        {choice.tag}
                      </Badge>
                    )}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-[oklch(0.68_0.032_65)]">
                    {choice.description}
                  </span>
                </button>

                <button
                  className="shrink-0 pt-1 text-sm font-medium text-accent"
                  onClick={() => setSelectedKey(choice.key)}
                  type="button"
                >
                  {choice.price} <span className="text-[11px]">DH</span>
                </button>

                <Button
                  className="hidden h-8 border-[oklch(0.42_0.07_55)] bg-[oklch(0.2_0.04_50_/_0.25)] px-3 text-xs text-accent opacity-0 transition-opacity hover:bg-[oklch(0.24_0.052_55)] group-hover:opacity-100 sm:inline-flex"
                  onClick={() => addToCart(choice)}
                  type="button"
                  variant="outline"
                >
                  + Panier
                </Button>
              </li>
            )
          })}
        </ul>
      </div>

      {cartCount > 0 && (
        <Button
          className="fixed bottom-5 right-5 z-50 h-12 rounded-full bg-accent px-6 text-sm text-accent-foreground shadow-lg hover:scale-[1.02] hover:bg-accent/90"
          render={<Link href="/order" />}
        >
          Panier
          <span className="ml-2 grid size-6 place-items-center rounded-full bg-[oklch(0.12_0.018_50)] text-xs text-accent">
            {cartCount}
          </span>
        </Button>
      )}
    </section>
  )
}
