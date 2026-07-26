import type { Metadata } from 'next'
import { CalendarDaysIcon, ClockIcon, UsersIcon } from 'lucide-react'
import { InfoCard } from '@/components/info-card'
import { PageHero } from '@/components/page-hero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { reservations } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Book a Table - Il Gusto',
  description:
    'Request a table at Il Gusto for lunch, dinner, birthdays and small groups.',
}

const serviceNotes = [
  {
    icon: CalendarDaysIcon,
    title: 'Open Tuesday to Sunday',
    text: 'Lunch runs from 12:00 to 15:00. Dinner starts at 19:00.',
  },
  {
    icon: ClockIcon,
    title: 'Last seating at 22:15',
    text: 'The kitchen stays open until 23:30 for confirmed tables.',
  },
  {
    icon: UsersIcon,
    title: 'Small room, simple planning',
    text: 'For groups over six, the team confirms the table by phone.',
  },
]

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Book one of twenty-eight seats"
        description="Send the table request and the room team will confirm it. For same-evening bookings, call the restaurant after 18:00."
        image="/images/interior-2.png"
        imageAlt="A quiet corner table for two inside Il Gusto"
      />

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.85fr]">
        <InfoCard title="Table request" eyebrow="Booking">
          <form className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm">
              Name
              <Input className="h-11" placeholder="Your name" />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              Phone
              <Input className="h-11" placeholder="+212 ..." type="tel" />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              Date
              <Input className="h-11" type="date" />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              Time
              <Input className="h-11" type="time" />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              Guests
              <Input className="h-11" min={1} max={8} type="number" />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              Occasion
              <Input className="h-11" placeholder="Dinner, birthday, family lunch" />
            </label>
            <label className="flex flex-col gap-2 text-sm sm:col-span-2">
              Notes
              <Textarea
                className="min-h-28"
                placeholder="Allergies, table preference, high chair, or timing notes"
              />
            </label>
            <div className="sm:col-span-2">
              <Button className="h-11 px-6">Request table</Button>
            </div>
          </form>
        </InfoCard>

        <div className="flex flex-col gap-6">
          <InfoCard title="Tonight's list" eyebrow="Room">
            <ul className="flex flex-col gap-4">
              {reservations.map((reservation) => (
                <li
                  key={reservation.id}
                  className="flex items-start justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-serif text-lg">{reservation.guest}</p>
                    <p className="text-sm text-muted-foreground">
                      {reservation.covers} guests at {reservation.time}
                    </p>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                    {reservation.status}
                  </span>
                </li>
              ))}
            </ul>
          </InfoCard>

          <div className="grid gap-4">
            {serviceNotes.map((note) => {
              const Icon = note.icon

              return (
                <InfoCard key={note.title} title={note.title}>
                  <div className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Icon className="mt-0.5 size-4 shrink-0 text-accent" />
                    <p>{note.text}</p>
                  </div>
                </InfoCard>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
