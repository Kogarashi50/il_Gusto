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
    <div
      className="min-h-svh w-full text-foreground"
      style={{
        background:
          'linear-gradient(160deg, oklch(0.5 0.03 60) 0%, oklch(0.66 0.04 70) 45%, oklch(0.78 0.045 78) 100%)',
      }}
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 p-4 lg:flex-row lg:p-6">
        <DashboardSidebar />
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <DashboardTopbar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </div>
  )
}
