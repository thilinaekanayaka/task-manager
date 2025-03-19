import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { useTasks } from "./context/TaskContext";

function App() {
  const { tasks, loading, error } = useTasks();

  if (loading) {
    return (
      <div className="text-center p-8">
        <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded-lg mx-4">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
