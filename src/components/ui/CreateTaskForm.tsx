"use client";

import createTask, { CreateTaskFormState } from "@/lib/actions/createTask";
import { Project } from "@/lib/definition";
import clsx from "clsx";
import { useActionState, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

export default function CreateTaskForm({ projects }: { projects: Project[] }) {
  const initialState: CreateTaskFormState = { errors: {} };
  const [state, formAction] = useActionState(createTask, initialState);

  const [date, setDate] = useState<string>("");

  return (
    <form className="form" action={formAction} autoComplete="off">
      <div className="form__row">
        <label className="form__label" htmlFor="taskName">
          Название <sup>*</sup>
        </label>
        <input
          className={clsx("form__input", {
            "form__input--error":
              state.errors?.taskName && state.errors.taskName.length > 0,
          })}
          type="text"
          name="taskName"
          id="task-name"
          placeholder="Введите название"
        />
        <div id="project-name-error" aria-live="polite" aria-atomic="true">
          {state.errors?.taskName &&
            state.errors.taskName.map((error: string) => (
              <p className="form__message" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="projectId">
          Проект <sup>*</sup>
        </label>
        <select
          className={clsx("form__input form__input--select", {
            "form__input--error":
              state.errors?.projectId && state.errors.projectId.length > 0,
          })}
          name="projectId"
          id="project-name"
        >
          <option>Название проекта</option>
          {projects.map(({ id, project_name }) => (
            <option value={id} key={id}>
              {project_name}
            </option>
          ))}
        </select>
        <div id="project-name-error" aria-live="polite" aria-atomic="true">
          {state.errors?.projectId &&
            state.errors.projectId.map((error: string) => (
              <p className="form__message" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="dateCompletion">
          Дата выполнения
        </label>
        <Flatpickr
          className={clsx("form__input form__input--date", {
            "form__input--error":
              state.errors?.dateCompletion &&
              state.errors.dateCompletion.length > 0,
          })}
          value={date}
          onChange={([date]) => setDate(date)}
          type="text"
          name="dateCompletion"
          id="date-completion"
          placeholder="Введите дату в формате ГГГГ-ММ-ДД"
        />
        <div id="date-completio-error" aria-live="polite" aria-atomic="true">
          {state.errors?.dateCompletion &&
            state.errors.dateCompletion.map((error: string) => (
              <p className="form__message" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <div className="form__row form__row--controls">
        <button className="button" type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
}
