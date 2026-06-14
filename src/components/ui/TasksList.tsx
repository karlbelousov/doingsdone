import { tasks } from "@/lib/placeholder-data";
import Taskitem from "./TaskItem";

export default function TasksList() {
  return (
    <table className="tasks">
      <tbody>
        {tasks.map((task) => (
          <Taskitem {...task} key={task.id} />
        ))}
      </tbody>
    </table>
  );
}
