export default function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="h-5 w-5 cursor-pointer rounded border-gray-300 text-blue-500 focus:ring-blue-500"
        />
        <span
          className={`text-gray-700 ${task.completed ? "line-through opacity-50" : ""
            }`}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="p-1 text-red-500 hover:text-red-700 rounded-full hover:bg-red-50 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
