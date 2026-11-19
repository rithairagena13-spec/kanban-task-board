import { Link } from 'react-router-dom'

export default function ArchivePage({ tasks }) {
  const completedTasks = tasks.filter(
    (task) => task.status === 'done'
  )

  return (
    <main className="min-h-screen bg-[#F7F7F5] px-5 py-10 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#C69B62]">
          Task Management
        </p>

        <h1 className="text-3xl font-bold text-[#172A3A]">
          Completed Tasks
        </h1>

        <p className="mb-8 mt-2 text-gray-500">
          Review the tasks you have successfully completed.
        </p>

        {completedTasks.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <h2 className="text-lg font-semibold text-[#172A3A]">
              No completed tasks yet
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Completed tasks will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {completedTasks.map((task) => (
              <article
                key={task.id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#C69B62]">
                    Completed
                  </span>

                  <span className="text-xs text-gray-400">
                    #{task.id}
                  </span>
                </div>

                <h2 className="font-semibold text-[#172A3A]">
                  {task.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {task.description}
                </p>

                <Link
                  to={`/task/${task.id}`}
                  className="mt-4 inline-block text-sm font-semibold text-[#172A3A] underline decoration-[#C69B62] underline-offset-4"
                >
                  View details
                </Link>
              </article>
            ))}
          </div>
        )}

        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-[#172A3A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#263D50]"
        >
          Back to Board
        </Link>
      </div>
    </main>
  )
}