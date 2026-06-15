import { USER_ID } from "@/constants/userId";
import { fetchAllTasks, fetchProjects } from "@/lib/data";
import NavigationItem from "./NavigationLink";

export default async function NNavigationList() {
  const allTasks = await fetchAllTasks(USER_ID);
  const projects = await fetchProjects(USER_ID);

  return (
    <ul className="main-navigation__list">
      {projects.map((project) => (
        <NavigationItem key={project.id} project={project} allTasks={allTasks} />
      ))}
    </ul>
  );
}
