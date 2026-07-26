import { type Column, DataTable } from '@/components/dashboard/data-table'
import { type Employee, employees } from '@/lib/data'

const columns: Column<Employee>[] = [
  { key: 'id', label: 'ID' },
  { key: 'firstName', label: 'First name' },
  { key: 'lastName', label: 'Last name' },
  { key: 'role', label: 'Role' },
  { key: 'contract', label: 'Contract' },
  { key: 'start', label: 'Start date' },
  { key: 'end', label: 'End date' },
]

export default function UsersPage() {
  return (
    <DataTable
      title="Employees"
      columns={columns}
      rows={employees}
      searchKeys={['id', 'firstName', 'lastName', 'role', 'contract']}
      searchPlaceholder="Search employees"
    />
  )
}
