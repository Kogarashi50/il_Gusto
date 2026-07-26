import { type Column, DataTable } from '@/components/dashboard/data-table'
import { type Order, orders } from '@/lib/data'

const columns: Column<Order>[] = [
  { key: 'id', label: 'ID' },
  { key: 'customer', label: 'Customer' },
  { key: 'phone', label: 'Phone' },
  {
    key: 'items',
    label: 'Items',
    render: (row) => row.items.reduce((total, item) => total + item.qty, 0),
  },
  { key: 'total', label: 'Total', render: (row) => `${row.total} DH` },
  { key: 'payment', label: 'Payment' },
  { key: 'placed', label: 'Placed' },
  { key: 'status', label: 'Status' },
]

export default function OrdersPage() {
  return (
    <DataTable
      title="Orders"
      columns={columns}
      rows={orders}
      searchKeys={['id', 'customer', 'phone', 'payment', 'status']}
      searchPlaceholder="Search orders"
    />
  )
}
