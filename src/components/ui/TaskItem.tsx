"use client";

import { Task } from "@/lib/definition";
import checkCountHoursToTaskCompletion from "@/utils/checkCountHoursToTaskCompletion";
import formatDateToString from "@/utils/formatDateToStrig";
import clsx from "clsx";
import Checkbox from "./Checkbox";
import updateTask from "@/lib/actions/updateTask";

export default function Taskitem({
  task,
  projectId,
}: {
  task: Task;
  projectId?: number;
}) {
  const {id, title, is_done, date_completion} = task;
  const isTaskImportant = checkCountHoursToTaskCompletion(date_completion);

  const handleTaskCompleteChange = () => {
    updateTask(task, projectId);
  };

  return (
    <tr
      className={clsx(
        "tasks__item",
        "task",
        is_done && "task--completed",
        isTaskImportant && "task--important",
      )}
    >
      <td className="task__select">
        <Checkbox
          className="task__checkbox"
          label={title}
          isChecked={is_done}
          onChange={handleTaskCompleteChange}
        />
      </td>
      {date_completion && (
        <td className="task__date">{formatDateToString(date_completion)}</td>
      )}
    </tr>
  );
}
