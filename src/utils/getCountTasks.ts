import { Task } from "@/lib/definition";

export default function getCountTasks(tasks: Task[], projectId: number) {
  return tasks.filter((task) => task.project_id === projectId).length;
}
