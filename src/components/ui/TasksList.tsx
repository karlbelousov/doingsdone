import { fetchAllTasks } from "@/lib/data";
import TaskItem from "./TaskItem";
import { USER_ID } from "@/constants/userId";

export default async function TasksList() {
  const allTasks = await fetchAllTasks(USER_ID);

  return (
    <table className="tasks">
      <tbody>
        {allTasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </tbody>
    </table>
  );
}
