import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function AddTaskForm() {
  const [taskTitle, setTaskTitle] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = taskTitle.trim();
    if (!trimmedTitle) {
      alert("Task title cannot be empty!");
      return;
    }
    addTask(trimmedTitle);
    setTaskTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoFocus
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add Task
      </button>
    </form>
  );
}
