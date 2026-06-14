import { projects, tasks } from "@/lib/placeholder-data";
import getCountTasks from "@/utils/getCountTasks";
import Link from "next/link";

export default async function ProjectsList() {
  return (
    <ul className="main-navigation__list">
      {projects.map(({ id, project_name }) => (
        <li className="main-navigation__list-item" key={id}>
          <Link
            className="main-navigation__list-item-link"
            href={`/projects/${id}`}
          >
            {project_name}
          </Link>
          <span className="main-navigation__list-item-count">{getCountTasks(tasks, project_name)}</span>
        </li>
      ))}
    </ul>
  );
}
