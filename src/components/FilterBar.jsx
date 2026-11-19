export default function FilterBar({
  searchTerm,
  onSearchChange,
  priority,
  onPriorityChange,
}) {
  const priorities = ['All', 'High', 'Medium', 'Low']

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#C69B62] md:max-w-sm"
      />

      <div className="flex flex-wrap gap-2">
        {priorities.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onPriorityChange(item)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              priority === item
                ? 'bg-[#172A3A] text-white'
                : 'border border-gray-200 bg-white text-[#172A3A] hover:border-[#C69B62]'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}