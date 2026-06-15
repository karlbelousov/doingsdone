import { USER_ID } from "@/constants/userId";
import { fetchAllTasks, fetchProjects } from "@/lib/data";
import getCountTasks from "@/utils/getCountTasks";
import Link from "next/link";

export default async function ProjectsList() {
  const allTasks = await fetchAllTasks(USER_ID);
  const projects = await fetchProjects(USER_ID);

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
          <span className="main-navigation__list-item-count">
            {getCountTasks(allTasks, id)}
          </span>
        </li>
      ))}
    </ul>
  );
}
