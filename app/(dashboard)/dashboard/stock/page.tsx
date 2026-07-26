'use client'

import { type Column, DataTable } from '@/components/dashboard/data-table'
import { type Ingredient, ingredients } from '@/lib/data'

const columns: Column<Ingredient>[] = [
  { key: 'id', label: 'ID' },
  {
    key: 'name',
    label: 'Name',
    render: (row) => <span className="font-medium">{row.name}</span>,
  },
  { key: 'quantity', label: 'Quantity' },
  {
    key: 'supplier',
    label: 'Supplier',
    render: (row) => (
      <span className="text-muted-foreground">{row.supplier}</span>
    ),
  },
  {
    key: 'price',
    label: 'Purchase price',
    render: (row) => (
      <span className="font-serif text-base text-accent">
        {row.price}
        <span className="ml-1 text-xs tracking-widest text-muted-foreground">
          DH
        </span>
      </span>
    ),
  },
  {
    key: 'expires',
    label: 'Expiration date',
    render: (row) => (
      <span className="text-muted-foreground">{row.expires}</span>
    ),
  },
]

export default function StockPage() {
  return (
    <DataTable
      title="Ingredients"
      subtitle="Dispensa"
      columns={columns}
      rows={ingredients}
      searchKeys={['id', 'name', 'supplier']}
      searchPlaceholder="Search ingredients"
    />
  )
}
