import { useState } from 'react'
import Column from '../components/Column'
import FilterBar from '../components/FilterBar'

export default function BoardPage({ tasks }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [priority, setPriority] = useState('All')

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesPriority =
      priority === 'All' || task.priority === priority

    return matchesSearch && matchesPriority
  })

  const columns = [
    { title: 'To Do', status: 'todo' },
    { title: 'In Progress', status: 'in-progress' },
    { title: 'Done', status: 'done' },
  ]

  return (
    <main className="min-h-screen bg-[#F7F7F5] px-5 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#C69B62]">
            Task Management
          </p>

          <h1 className="text-3xl font-bold text-[#172A3A] md:text-4xl">
            My Kanban Board
          </h1>

          <p className="mt-2 text-gray-500">
            Organize your work, track progress, and stay productive.
          </p>
        </div>

        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          priority={priority}
          onPriorityChange={setPriority}
        />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {columns.map((column) => (
            <Column
              key={column.status}
              title={column.title}
              tasks={filteredTasks.filter(
                (task) => task.status === column.status
              )}
            />
          ))}
        </div>
      </div>
    </main>
  )
}