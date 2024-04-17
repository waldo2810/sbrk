import { Task } from "@/interface/Task";

export function getFilteredTasks(tasks: Task[], filter: string) {
  return tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "ToDo") return task.checked === false;
    if (filter === "Completed") return task.checked;
    return true;
  });
}
