'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { MenuCategory } from '@/lib/data'

export function MenuBrowser({ categories }: { categories: MenuCategory[] }) {
  return (
    <Tabs
      defaultValue={categories[0].id}
      className="gap-10"
    >
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <TabsList className="h-auto w-max gap-1 rounded-full bg-muted p-1">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="rounded-full px-5 py-2 text-sm"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {categories.map((category) => (
        <TabsContent
          key={category.id}
          value={category.id}
          className="flex flex-col gap-10 lg:flex-row lg:gap-16"
        >
          <div className="flex flex-col gap-6 lg:w-72 lg:shrink-0">
            <div className="relative aspect-3/2 overflow-hidden rounded-2xl lg:aspect-4/5">
              <Image
                src={category.image || '/placeholder.svg'}
                alt={`${category.label} at Il Gusto`}
                fill
                sizes="(min-width: 1024px) 288px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-serif text-sm italic text-accent">
                {category.italian}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {category.blurb}
              </p>
            </div>
            <Button
              variant="outline"
              render={<Link href="/order" />}
              className="h-10 w-full"
            >
              Order {category.label.toLowerCase()}
            </Button>
          </div>

          <ul className="flex flex-1 flex-col">
            {category.items.map((item) => (
              <li
                key={item.name}
                className="flex items-start justify-between gap-6 border-b border-border py-5 first:pt-0 last:border-0"
              >
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-serif text-lg leading-none">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <Badge variant="secondary">{item.tag}</Badge>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <span className="shrink-0 font-serif text-lg text-accent">
                  {item.price}
                  <span className="ml-1 text-xs tracking-widest text-muted-foreground">
                    DH
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  )
}
