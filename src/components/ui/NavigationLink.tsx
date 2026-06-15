"use client";

import getCountTasks from "@/utils/getCountTasks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Task } from "@/lib/definition";
import clsx from "clsx";

export default function NavigationItem({
  project,
  allTasks,
}: {
  project: { id: number; project_name: string };
  allTasks: Task[];
}) {
  const pathname = usePathname();

  return (
    <li
      className={clsx(
        "main-navigation__list-item",
        pathname === `/projects/${project.id}` &&
          "main-navigation__list-item--active",
      )}
    >
      <Link
        className="main-navigation__list-item-link"
        href={`/projects/${project.id}`}
      >
        {project.project_name}
      </Link>
      <span className="main-navigation__list-item-count">
        {getCountTasks(allTasks, project.id)}
      </span>
    </li>
  );
}
