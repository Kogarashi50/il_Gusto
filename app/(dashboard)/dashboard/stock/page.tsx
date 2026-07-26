import { type Column, DataTable } from '@/components/dashboard/data-table'
import { type Ingredient, ingredients } from '@/lib/data'

const columns: Column<Ingredient>[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'quantity', label: 'Quantity' },
  { key: 'supplier', label: 'Supplier' },
  { key: 'price', label: 'Purchase price', render: (row) => `${row.price} DH` },
  { key: 'expires', label: 'Expiration date' },
]

export default function StockPage() {
  return (
    <DataTable
      title="Ingredients"
      columns={columns}
      rows={ingredients}
      searchKeys={['id', 'name', 'supplier']}
      searchPlaceholder="Search ingredients"
    />
  )
}
