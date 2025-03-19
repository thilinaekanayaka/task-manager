import { motion, AnimatePresence } from "framer-motion";
import TaskItem from "./TaskItem";
import { useTasks } from "../context/TaskContext";

export default function TaskList() {
  const { tasks, toggleComplete, deleteTask } = useTasks();

  return (
    <div className="space-y-2">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.2 }}
          >
            <TaskItem
              task={task}
              onToggleComplete={toggleComplete}
              onDelete={deleteTask}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
