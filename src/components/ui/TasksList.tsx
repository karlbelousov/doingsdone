import { fetchAllTasks, fetchTasksByProjectsId } from "@/lib/data";
import TaskItem from "./TaskItem";
import { USER_ID } from "@/constants/userId";

export default async function TasksList({ projectId }: { projectId?: number }) {
  const tasks = projectId
    ? await fetchTasksByProjectsId(USER_ID, projectId)
    : await fetchAllTasks(USER_ID);

  if (tasks.length === 0) {
    return <div>Задач нет</div>;
  }

  return (
    <table className="tasks">
      <tbody>
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </tbody>
    </table>
  );
}
