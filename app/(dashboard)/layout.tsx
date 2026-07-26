import type { Metadata } from 'next'
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar'
import { DashboardTopbar } from '@/components/dashboard/dashboard-topbar'

export const metadata: Metadata = {
  title: 'Back office - Il Gusto',
  description:
    'Manager back office for orders, reservations, stock, staff and menu at Il Gusto.',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <DashboardTopbar />
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:gap-10 lg:py-10">
        <DashboardSidebar />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  )
}
