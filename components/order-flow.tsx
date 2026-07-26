'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type OrderStep = 'cart' | 'checkout' | 'confirmed'

type StoredCartItem = {
  key: string
  name: string
  description: string
  price: number
  image: string
  quantity: number
}

const CART_KEY = 'il-gusto-cart'

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

function getTotal(items: StoredCartItem[]) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

export function OrderFlow() {
  const [step, setStep] = useState<OrderStep>('cart')
  const [cart, setCart] = useState<StoredCartItem[]>([])
  const [form, setForm] = useState({
    name: '',
    phone: '+212 ',
    address: '',
    payment: 'card',
    notes: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    saveCard: false,
  })

  const total = getTotal(cart)

  useEffect(() => {
    setCart(readCart())
  }, [])

  function updateCart(nextCart: StoredCartItem[]) {
    setCart(nextCart)
    writeCart(nextCart)
  }

  function updateQuantity(key: string, delta: number) {
    updateCart(
      cart
        .map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + delta }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStep('confirmed')
  }

  if (step === 'confirmed') {
    return (
      <section className="min-h-[calc(100svh-5rem)] bg-[oklch(0.12_0.018_50)] px-4 py-20 text-[oklch(0.96_0.012_84)] sm:px-6">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <div className="grid size-16 place-items-center rounded-full bg-[oklch(0.24_0.052_55)] text-3xl text-accent">
            ✓
          </div>
          <h1 className="mt-6 font-serif text-4xl">Order received</h1>
          <p className="mt-4 text-sm leading-relaxed text-[oklch(0.68_0.032_65)]">
            Thank you, <strong className="text-accent">{form.name}</strong>. We will confirm by phone shortly.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[oklch(0.68_0.032_65)]">
            Delivery to: {form.address}
          </p>
          <Button
            className="mt-8 h-11 bg-accent px-6 text-accent-foreground hover:bg-accent/90"
            onClick={() => {
              updateCart([])
              setStep('cart')
            }}
            render={<Link href="/menu" />}
          >
            Back to menu
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-[calc(100svh-5rem)] bg-[oklch(0.12_0.018_50)] text-[oklch(0.96_0.012_84)]">
      <header className="border-b border-[oklch(1_0_0_/_0.08)] px-4 py-10 sm:px-6 lg:px-16">
        <p className="text-xs tracking-[0.24em] uppercase text-accent">Votre panier</p>
        <h1 className="mt-3 font-serif text-4xl">
          {step === 'cart' ? 'Your order' : 'Delivery details'}
        </h1>
      </header>

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        {step === 'cart' && (
          <>
            {cart.length === 0 ? (
              <div className="py-20 text-center">
                <h2 className="font-serif text-2xl">Your panier is empty</h2>
                <p className="mt-2 text-sm text-[oklch(0.68_0.032_65)]">
                  Browse the menu and add dishes you would like.
                </p>
                <Button
                  className="mt-8 h-11 bg-accent px-6 text-accent-foreground hover:bg-accent/90"
                  render={<Link href="/menu" />}
                >
                  Browse menu
                </Button>
              </div>
            ) : (
              <>
                <ul className="mb-8 flex flex-col">
                  {cart.map((item) => (
                    <li
                      className="grid grid-cols-[56px_1fr] gap-4 border-b border-[oklch(1_0_0_/_0.08)] py-4 sm:grid-cols-[56px_1fr_auto_auto] sm:items-center"
                      key={item.key}
                    >
                      <div className="relative size-14 overflow-hidden rounded-lg">
                        <Image
                          alt={item.name}
                          className="object-cover"
                          fill
                          sizes="56px"
                          src={item.image}
                        />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-serif text-lg leading-tight">{item.name}</h2>
                        <p className="mt-1 line-clamp-1 text-xs text-[oklch(0.68_0.032_65)]">
                          {item.description}
                        </p>
                      </div>
                      <div className="col-start-2 flex items-center gap-2 sm:col-start-auto">
                        <Button
                          className="size-7 bg-[oklch(0.2_0.04_50)] text-accent hover:bg-[oklch(0.26_0.05_50)]"
                          onClick={() => updateQuantity(item.key, -1)}
                          size="icon"
                          type="button"
                        >
                          -
                        </Button>
                        <span className="w-5 text-center text-sm">{item.quantity}</span>
                        <Button
                          className="size-7 bg-[oklch(0.2_0.04_50)] text-accent hover:bg-[oklch(0.26_0.05_50)]"
                          onClick={() => updateQuantity(item.key, 1)}
                          size="icon"
                          type="button"
                        >
                          +
                        </Button>
                      </div>
                      <span className="self-center justify-self-end text-sm text-accent sm:w-16 sm:text-right">
                        {item.price * item.quantity} DH
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6 flex items-center justify-between border-t border-[oklch(1_0_0_/_0.12)] py-4">
                  <span className="text-sm text-[oklch(0.68_0.032_65)]">Total</span>
                  <span className="font-serif text-2xl font-semibold">{total} DH</span>
                </div>

                <Button
                  className="h-12 w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => setStep('checkout')}
                  type="button"
                >
                  Proceed to order
                </Button>
              </>
            )}
          </>
        )}

        {step === 'checkout' && (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-1.5 block text-xs tracking-[0.24em] uppercase text-[oklch(0.68_0.032_65)]">
                Name
              </span>
              <Input
                className="h-12 border-[oklch(0.34_0.05_55)] bg-[oklch(0.16_0.022_50)] px-4 text-[oklch(0.96_0.012_84)] focus-visible:border-accent"
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                placeholder="Your full name"
                required
                value={form.name}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs tracking-[0.24em] uppercase text-[oklch(0.68_0.032_65)]">
                Phone
              </span>
              <Input
                className="h-12 border-[oklch(0.34_0.05_55)] bg-[oklch(0.16_0.022_50)] px-4 text-[oklch(0.96_0.012_84)] focus-visible:border-accent"
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                placeholder="+212 ..."
                required
                type="tel"
                value={form.phone}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs tracking-[0.24em] uppercase text-[oklch(0.68_0.032_65)]">
                Delivery address
              </span>
              <Textarea
                className="min-h-24 border-[oklch(0.34_0.05_55)] bg-[oklch(0.16_0.022_50)] px-4 text-[oklch(0.96_0.012_84)] focus-visible:border-accent"
                onChange={(event) => setForm({ ...form, address: event.target.value })}
                placeholder="Street, building, floor, area"
                required
                value={form.address}
              />
            </label>

            <fieldset>
              <legend className="mb-2 text-xs tracking-[0.24em] uppercase text-[oklch(0.68_0.032_65)]">
                Payment
              </legend>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'card', label: 'Credit card' },
                  { value: 'cash', label: 'Cash on delivery' },
                ].map((option) => (
                  <button
                    className={cn(
                      'h-11 rounded-lg border border-[oklch(0.34_0.05_55)] bg-[oklch(0.16_0.022_50)] text-sm text-[oklch(0.68_0.032_65)] transition-colors hover:border-accent hover:text-accent',
                      form.payment === option.value && 'border-accent bg-[oklch(0.24_0.052_55_/_0.35)] text-accent',
                    )}
                    key={option.value}
                    onClick={() => setForm({ ...form, payment: option.value })}
                    type="button"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </fieldset>

            {form.payment === 'card' && (
              <div className="space-y-4 rounded-xl border border-[oklch(1_0_0_/_0.08)] bg-[oklch(0.15_0.02_50)] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-blue-900 px-2 py-1 text-[11px] font-bold tracking-widest text-white">
                      VISA
                    </span>
                    <span className="flex items-center rounded bg-[oklch(0.16_0.022_50)] px-2 py-1">
                      <span className="-mr-1 block size-4 rounded-full bg-red-600" />
                      <span className="block size-4 rounded-full bg-yellow-500" />
                    </span>
                  </div>
                  <span className="text-xs text-[oklch(0.68_0.032_65)]">Secure</span>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-xs text-[oklch(0.76_0.032_65)]">Card number</span>
                  <Input
                    className="h-11 border-[oklch(0.34_0.05_55)] bg-[oklch(0.12_0.018_50)] px-4 tracking-[0.12em] text-[oklch(0.96_0.012_84)] focus-visible:border-accent"
                    inputMode="numeric"
                    maxLength={19}
                    onChange={(event) => {
                      const raw = event.target.value.replace(/\D/g, '').slice(0, 16)
                      const formatted = raw.replace(/(.{4})/g, '$1 ').trim()
                      setForm({ ...form, cardNumber: formatted })
                    }}
                    placeholder="0000 0000 0000 0000"
                    required
                    value={form.cardNumber}
                  />
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="mb-1.5 block text-xs text-[oklch(0.76_0.032_65)]">Expiry date</span>
                    <Input
                      className="h-11 border-[oklch(0.34_0.05_55)] bg-[oklch(0.12_0.018_50)] px-4 tracking-[0.12em] text-[oklch(0.96_0.012_84)] focus-visible:border-accent"
                      inputMode="numeric"
                      maxLength={5}
                      onChange={(event) => {
                        const raw = event.target.value.replace(/\D/g, '').slice(0, 4)
                        const formatted = raw.length > 2 ? `${raw.slice(0, 2)}/${raw.slice(2)}` : raw
                        setForm({ ...form, cardExpiry: formatted })
                      }}
                      placeholder="MM/YY"
                      required
                      value={form.cardExpiry}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs text-[oklch(0.76_0.032_65)]">Security code</span>
                    <Input
                      className="h-11 border-[oklch(0.34_0.05_55)] bg-[oklch(0.12_0.018_50)] px-4 tracking-[0.12em] text-[oklch(0.96_0.012_84)] focus-visible:border-accent"
                      inputMode="numeric"
                      maxLength={4}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          cardCvc: event.target.value.replace(/\D/g, '').slice(0, 4),
                        })
                      }
                      placeholder="000"
                      required
                      value={form.cardCvc}
                    />
                  </label>
                </div>

                <label className="flex cursor-pointer items-start gap-3 text-sm text-[oklch(0.76_0.032_65)]">
                  <input
                    checked={form.saveCard}
                    className="mt-1 accent-[oklch(0.66_0.115_55)]"
                    onChange={(event) => setForm({ ...form, saveCard: event.target.checked })}
                    type="checkbox"
                  />
                  <span>
                    Save this card for future orders
                    <span className="mt-0.5 block text-xs text-[oklch(0.55_0.032_65)]">
                      You can manage saved cards from your account at any time.
                    </span>
                  </span>
                </label>
              </div>
            )}

            {form.payment === 'cash' && (
              <p className="text-xs text-[oklch(0.68_0.032_65)]">
                Our delivery person will collect payment at your door.
              </p>
            )}

            <label className="block">
              <span className="mb-1.5 block text-xs tracking-[0.24em] uppercase text-[oklch(0.68_0.032_65)]">
                Notes <span className="opacity-60">optional</span>
              </span>
              <Textarea
                className="min-h-20 border-[oklch(0.34_0.05_55)] bg-[oklch(0.16_0.022_50)] px-4 text-[oklch(0.96_0.012_84)] focus-visible:border-accent"
                onChange={(event) => setForm({ ...form, notes: event.target.value })}
                placeholder="Allergies, instructions, gate code..."
                value={form.notes}
              />
            </label>

            <div className="rounded-xl border border-[oklch(1_0_0_/_0.08)] bg-[oklch(0.16_0.022_50)] p-4">
              <p className="mb-3 text-xs tracking-[0.24em] uppercase text-[oklch(0.68_0.032_65)]">
                Order summary
              </p>
              <ul className="space-y-2">
                {cart.map((item) => (
                  <li className="flex justify-between gap-4 text-sm text-[oklch(0.76_0.032_65)]" key={item.key}>
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>{item.price * item.quantity} DH</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-between border-t border-[oklch(1_0_0_/_0.08)] pt-4 font-serif text-xl">
                <span>Total</span>
                <span className="text-accent">{total} DH</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                className="h-12 flex-1 border-[oklch(0.34_0.05_55)] bg-[oklch(0.16_0.022_50)] text-[oklch(0.68_0.032_65)] hover:bg-[oklch(0.2_0.03_50)] hover:text-accent"
                onClick={() => setStep('cart')}
                type="button"
                variant="outline"
              >
                Back
              </Button>
              <Button className="h-12 flex-1 bg-accent text-accent-foreground hover:bg-accent/90" type="submit">
                Place order
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
