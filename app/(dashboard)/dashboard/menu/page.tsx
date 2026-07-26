'use client'

import { type Column, DataTable } from '@/components/dashboard/data-table'
import { type MenuRow, menuRows } from '@/lib/data'

const columns: Column<MenuRow>[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name', render: (row) => (
    <span className="font-serif text-base">{row.name}</span>
  ) },
  {
    key: 'description',
    label: 'Description',
    render: (row) => (
      <span className="text-muted-foreground">{row.description}</span>
    ),
  },
  {
    key: 'price',
    label: 'Price',
    render: (row) => (
      <span className="font-serif text-base text-accent">
        {row.price}
        <span className="ml-1 text-xs tracking-widest text-muted-foreground">
          DH
        </span>
      </span>
    ),
  },
]

export default function MenuManagementPage() {
  return (
    <DataTable
      title="Menu"
      subtitle="La carta"
      columns={columns}
      rows={menuRows}
      searchKeys={['id', 'name', 'category', 'description']}
      searchPlaceholder="Search menu"
    />
  )
}
