import TaskCard from './TaskCard'

export default function Column({ title, tasks }) {
  return (
    <section className="flex min-h-[400px] flex-col rounded-2xl bg-gray-100 p-4">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-bold text-[#172A3A]">
          {title}
        </h2>

        <span className="rounded-full bg-[#172A3A] px-3 py-1 text-sm font-semibold text-white">
          {tasks.length}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  )
}