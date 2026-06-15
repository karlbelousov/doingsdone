import { Task } from "@/lib/definition";
import checkCountHoursToTaskCompletion from "@/utils/checkCountHoursToTaskCompletion";
import formatDateToString from "@/utils/formatDateToStrig";
import clsx from "clsx";

export default function Taskitem({ title, date_completion, is_done }: Task) {
  const isTaskImportant = checkCountHoursToTaskCompletion(date_completion);

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
        <label className="checkbox task__checkbox">
          <input
            className="checkbox__input visually-hidden task__checkbox"
            type="checkbox"
            defaultChecked={is_done}
          />
          <span className="checkbox__text">{title}</span>
        </label>
      </td>
      {date_completion && (
        <td className="task__date">{formatDateToString(date_completion)}</td>
      )}
    </tr>
  );
}
