import type { Metadata } from 'next'
import Link from 'next/link'
import { InfoCard } from '@/components/info-card'
import { LoginForm } from '@/components/login-form'
import { PageHero } from '@/components/page-hero'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Staff Login - Il Gusto',
  description: 'Staff access point for Il Gusto restaurant operations.',
}

export default function LoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Staff"
        title="Sign in to restaurant operations"
        description="Access reservations, orders, menu status, stock and shift information from one place."
        image="/images/interior-3.png"
        imageAlt="Plates being finished at the restaurant pass"
      />

      <section className="mx-auto grid w-full max-w-5xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.85fr_1fr]">
        <InfoCard title="Staff login" eyebrow="Access">
          <LoginForm />
        </InfoCard>

        <InfoCard title="Operations preview" eyebrow="Today">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Reservations', 'Review pending tables and arrival notes.'],
              ['Orders', 'Track delivery requests and payment state.'],
              ['Stock', 'Watch low and critical ingredients before service.'],
              ['Menu', 'Mark dishes available or sold out.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-lg bg-muted p-4">
                <h3 className="font-serif text-lg">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            render={<Link href="/dashboard" />}
            className="mt-2 h-10 w-fit px-5"
          >
            Open back office
          </Button>
        </InfoCard>
      </section>
    </>
  )
}
