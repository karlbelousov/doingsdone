import postgres from "postgres";
import { Project, Task } from "./definition";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchProjects(user_id: number) {
  try {
    const projects = await sql<Project[]>`
        SELECT * FROM projects
        WHERE user_id=${user_id}
    `;

    return projects;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch projects data.");
  }
}

export async function fetchAllTasks(user_id: number) {
  try {
    const tasks = await sql<Task[]>`
        SELECT * FROM tasks
        WHERE user_id=${user_id}
    `;

    return tasks;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch tasks data.");
  }
}
