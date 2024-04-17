import { Task } from "@/interface/Task";

export function getSortedTasks(filteredTasks: Task[], sort: string) {
  return [...filteredTasks].sort((a, b) => {
    if (sort === "Oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    if (sort === "MostRecent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sort === "NameAsc") {
      return a.description.localeCompare(b.description);
    }
    if (sort === "NameDesc") {
      return b.description.localeCompare(a.description);
    }
    return 0;
  });
}
