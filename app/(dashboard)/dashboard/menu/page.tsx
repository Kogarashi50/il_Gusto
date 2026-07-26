import { type Column, DataTable } from '@/components/dashboard/data-table'
import { type MenuRow, menuRows } from '@/lib/data'

const columns: Column<MenuRow>[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'description', label: 'Description' },
  { key: 'price', label: 'Price', render: (row) => `${row.price} DH` },
]

export default function MenuManagementPage() {
  return (
    <DataTable
      title="Menu"
      columns={columns}
      rows={menuRows}
      searchKeys={['id', 'name', 'category', 'description']}
      searchPlaceholder="Search menu"
    />
  )
}
