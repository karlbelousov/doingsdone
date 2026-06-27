import {
  fetchAllTasks,
  fetchFilteredAllTasks,
  fetchFilteredTasksByProjectsId,
  fetchTasksByProjectsId,
} from "@/lib/data";
import { USER_ID } from "@/constants/userId";

export default async function getTasks(projectId?: number, query?: string) {
  if (query) {
    return projectId
      ? fetchFilteredTasksByProjectsId(USER_ID, projectId, query)
      : await fetchFilteredAllTasks(USER_ID, query);
  }

  return projectId
    ? await fetchTasksByProjectsId(USER_ID, projectId)
    : await fetchAllTasks(USER_ID);
}
