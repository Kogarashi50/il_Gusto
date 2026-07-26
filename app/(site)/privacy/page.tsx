import type { Metadata } from 'next'
import { InfoCard } from '@/components/info-card'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Privacy Policy - Il Gusto',
  description:
    'How Il Gusto handles reservation, delivery, cookie and staff-login information.',
}

const sections = [
  {
    title: 'Reservation details',
    text: 'We collect the name, phone number, date, time, party size and notes needed to manage a table request.',
  },
  {
    title: 'Delivery details',
    text: 'For delivery, we use the customer name, phone number, address, order items and payment status to prepare and dispatch the order.',
  },
  {
    title: 'Cookies',
    text: 'The site uses basic cookies for preferences and lightweight usage measurement. The cookie banner lets visitors accept or decline them.',
  },
  {
    title: 'Staff access',
    text: 'Staff login screens are intended for restaurant operations. Access should be limited to trained team members.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Simple data, used for service"
        description="This page explains what information the restaurant site expects to handle. Final legal wording should be reviewed before launch."
      />

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-6">
          {sections.map((section) => (
            <InfoCard key={section.title} title={section.title}>
              <p className="leading-relaxed text-muted-foreground">{section.text}</p>
            </InfoCard>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          Missing business-specific details: legal company name, registered
          address, retention period, analytics provider settings, and the
          contact email for privacy requests.
        </p>
      </section>
    </>
  )
}
