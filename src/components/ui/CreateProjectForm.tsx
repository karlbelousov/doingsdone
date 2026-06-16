"use client";

import { useActionState } from "react";
import { createProject, CreateProjectFormState } from "@/lib/actions";
import clsx from "clsx";

export default function CreateProjectForm() {
  const initialState: CreateProjectFormState = { errors: {} };
  const [state, formAction] = useActionState(createProject, initialState);

  return (
    <form className="form" action={formAction} autoComplete="off">
      <div className="form__row">
        <label className="form__label" htmlFor="projectName">
          Название <sup>*</sup>
        </label>
        <input
          className={clsx("form__input", {
            "form__input--error":
              state.errors?.projectName && state.errors.projectName.length > 0,
          })}
          type="text"
          name="projectName"
          id="projectName"
          placeholder="Введите название проекта"
          aria-describedby="project-name-error"
        />
        <div id="project-name-error" aria-live="polite" aria-atomic="true">
          {state.errors?.projectName &&
            state.errors.projectName.map((error: string) => (
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
