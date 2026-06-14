import { Task } from "@/lib/definition";

export default function getCountTasks(tasks: Task[], projectName: string) {
  return tasks.filter((task) => task.project_name === projectName).length;
}
