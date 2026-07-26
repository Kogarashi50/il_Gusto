'use client'

import { type Column, DataTable } from '@/components/dashboard/data-table'
import { type Order, orders } from '@/lib/data'

const columns: Column<Order>[] = [
  { key: 'id', label: 'ID' },
  {
    key: 'customer',
    label: 'Customer',
    render: (row) => <span className="font-medium">{row.customer}</span>,
  },
  {
    key: 'phone',
    label: 'Phone',
    render: (row) => (
      <span className="text-muted-foreground">{row.phone}</span>
    ),
  },
  {
    key: 'items',
    label: 'Items',
    render: (row) => row.items.reduce((total, item) => total + item.qty, 0),
  },
  {
    key: 'total',
    label: 'Total',
    render: (row) => (
      <span className="font-serif text-base text-accent">
        {row.total}
        <span className="ml-1 text-xs tracking-widest text-muted-foreground">
          DH
        </span>
      </span>
    ),
  },
  { key: 'payment', label: 'Payment' },
  { key: 'placed', label: 'Placed' },
  { key: 'status', label: 'Status' },
]

export default function OrdersPage() {
  return (
    <DataTable
      title="Orders"
      subtitle="Consegne"
      columns={columns}
      rows={orders}
      searchKeys={['id', 'customer', 'phone', 'payment', 'status']}
      searchPlaceholder="Search orders"
    />
  )
}
