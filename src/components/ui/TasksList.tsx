import getTasks from "@/utils/getTasks";
import TaskItem from "./TaskItem";

export default async function TasksList({
  projectId,
  query,
}: {
  projectId?: number;
  query?: string;
}) {
  const tasks = await getTasks(projectId, query);

  if (tasks.length === 0) {
    return <div>Задач нет</div>;
  }

  return (
    <table className="tasks">
      <tbody>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} projectId={projectId} />
        ))}
      </tbody>
    </table>
  );
}
