'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CookieIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CookieBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-xl border border-border bg-popover/95 p-4 shadow-lg backdrop-blur-md sm:flex-row sm:items-center sm:gap-6 sm:p-5">
        <CookieIcon className="size-5 shrink-0 text-accent" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          We use a few cookies to remember your table preferences and to measure
          how the site is used.{' '}
          <Link
            href="/privacy"
            className="text-foreground underline underline-offset-4 hover:text-accent"
          >
            Read the policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            variant="outline"
            className="h-9 flex-1 px-4 sm:flex-none"
            onClick={() => setDismissed(true)}
          >
            Decline
          </Button>
          <Button
            className="h-9 flex-1 px-4 sm:flex-none"
            onClick={() => setDismissed(true)}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
