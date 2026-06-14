import Link from "next/link";

export default function TasksControls() {
  return (
    <div className="tasks-controls">
      <nav className="tasks-switch">
        <Link
          href="/"
          className="tasks-switch__item tasks-switch__item--active"
        >
          Все задачи
        </Link>
        <Link href="/" className="tasks-switch__item">
          Повестка дня
        </Link>
        <Link href="/" className="tasks-switch__item">
          Завтра
        </Link>
        <Link href="/" className="tasks-switch__item">
          Просроченные
        </Link>
      </nav>
      <label className="checkbox">
        <input
          className="checkbox__input visually-hidden show_completed"
          type="checkbox"
        />
        <span className="checkbox__text">Показывать выполненные</span>
      </label>
    </div>
  );
}
