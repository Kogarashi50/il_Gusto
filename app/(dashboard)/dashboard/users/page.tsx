'use client'

import { type Column, DataTable } from '@/components/dashboard/data-table'
import { type Employee, employees } from '@/lib/data'

const columns: Column<Employee>[] = [
  { key: 'id', label: 'ID' },
  {
    key: 'firstName',
    label: 'First name',
    render: (row) => <span className="font-medium">{row.firstName}</span>,
  },
  { key: 'lastName', label: 'Last name' },
  {
    key: 'role',
    label: 'Role',
    render: (row) => (
      <span className="text-muted-foreground">{row.role}</span>
    ),
  },
  { key: 'contract', label: 'Contract' },
  {
    key: 'start',
    label: 'Start date',
    render: (row) => (
      <span className="text-muted-foreground">{row.start}</span>
    ),
  },
  {
    key: 'end',
    label: 'End date',
    render: (row) => (
      <span className="text-muted-foreground">{row.end}</span>
    ),
  },
  { key: 'status', label: 'Status' },
]

export default function UsersPage() {
  return (
    <DataTable
      title="Employees"
      subtitle="Personale"
      columns={columns}
      rows={employees}
      searchKeys={['id', 'firstName', 'lastName', 'role', 'contract']}
      searchPlaceholder="Search employees"
    />
  )
}
