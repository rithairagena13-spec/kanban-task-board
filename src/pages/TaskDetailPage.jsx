import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function TaskDetailPage({ tasks, updateTask, deleteTask }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const task = tasks.find((item) => item.id === id)

  const [title, setTitle] = useState(task?.title || '')
  const [description, setDescription] = useState(task?.description || '')
  const [status, setStatus] = useState(task?.status || 'todo')
  const [priority, setPriority] = useState(task?.priority || 'Medium')

  if (!task) {
    return (
      <main className="min-h-screen bg-[#F7F7F5] p-10">
        <h1 className="text-2xl font-bold text-[#172A3A]">
          Task not found
        </h1>

        <button
          onClick={() => navigate('/')}
          className="mt-4 rounded-lg bg-[#172A3A] px-5 py-2 text-white"
        >
          Back to board
        </button>
      </main>
    )
  }

  function handleSubmit(event) {
    event.preventDefault()

    updateTask(id, {
      title,
      description,
      status,
      priority,
    })

    navigate('/')
  }

  function handleDelete() {
    deleteTask(id)
    navigate('/')
  }

  return (
    <main className="min-h-screen bg-[#F7F7F5] px-5 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#C69B62]">
          Task Details
        </p>

        <h1 className="mb-6 text-3xl font-bold text-[#172A3A]">
          Edit Task
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#172A3A]">
              Task Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#C69B62]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#172A3A]">
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows="4"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#C69B62]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#172A3A]">
              Status
            </label>

            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#C69B62]"
            >
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#172A3A]">
              Priority
            </label>

            <select
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#C69B62]"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="submit"
              className="rounded-lg bg-[#172A3A] px-5 py-3 font-semibold text-white hover:bg-[#263D50]"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="rounded-lg border border-red-200 px-5 py-3 font-semibold text-red-600 hover:bg-red-50"
            >
              Delete Task
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="rounded-lg px-5 py-3 font-semibold text-gray-500 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}