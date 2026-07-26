'use client'

import { type Column, DataTable } from '@/components/dashboard/data-table'
import { type Reservation, reservations } from '@/lib/data'

const columns: Column<Reservation>[] = [
  { key: 'id', label: 'ID' },
  {
    key: 'guest',
    label: 'Guest',
    render: (row) => <span className="font-medium">{row.guest}</span>,
  },
  {
    key: 'phone',
    label: 'Phone',
    render: (row) => (
      <span className="text-muted-foreground">{row.phone}</span>
    ),
  },
  { key: 'covers', label: 'Covers' },
  { key: 'date', label: 'Date' },
  { key: 'time', label: 'Time' },
  { key: 'table', label: 'Table' },
  { key: 'status', label: 'Status' },
]

export default function ReservationsPage() {
  return (
    <DataTable
      title="Reservations"
      subtitle="Prenotazioni"
      columns={columns}
      rows={reservations}
      searchKeys={['id', 'guest', 'phone', 'table', 'status']}
      searchPlaceholder="Search reservations"
    />
  )
}
