import { Link } from 'react-router-dom'

export default function TaskCard({ task }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#C69B62]">
          {task.priority} Priority
        </span>

        <span className="text-xs text-gray-400">
          #{task.id}
        </span>
      </div>

      <h3 className="mb-2 font-semibold text-[#172A3A]">
        {task.title}
      </h3>

      <p className="mb-4 text-sm leading-6 text-gray-500">
        {task.description}
      </p>

      <Link
        to={`/task/${task.id}`}
        className="text-sm font-semibold text-[#172A3A] underline decoration-[#C69B62] underline-offset-4 hover:text-[#C69B62]"
      >
        View details
      </Link>
    </article>
  )
}