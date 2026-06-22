"use server";

import postgres from "postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Task } from "../definition";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export default async function updateTask(task: Task, projectId?: number) {
  const { id, is_done } = task;
  
  try {
    await sql`
      UPDATE tasks
      SET is_done = ${!is_done}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error(error);
  }

  if (!projectId) {
    revalidatePath("/projects");
    redirect("/projects");
  } else {
    revalidatePath(`/projects/${projectId}`);
    redirect(`/projects/${projectId}`);
  }
}
