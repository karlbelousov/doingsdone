"use server";

import { z } from "zod";
import postgres from "postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { USER_ID } from "@/constants/userId";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const CreateTaskFormSchema = z.object({
  taskName: z.string().min(1, {
    message: "Запoлните это поле",
  }),
  projectId: z.string({
    message: "Выберите проект",
  }),
  dateCompletion: z.string(),
});

export type CreateTaskFormState = {
  errors?: {
    taskName?: string[];
    projectId?: string[];
    dateCompletion?: string[];
  };
};

export default async function createTask(
  prevState: CreateTaskFormState,
  formData: FormData,
) {
  const validatedFields = CreateTaskFormSchema.safeParse({
    taskName: formData.get("taskName"),
    projectId: formData.get("projectId"),
    dateCompletion: formData.get("dateCompletion"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { taskName, projectId, dateCompletion } = validatedFields.data;

  try {
    await sql`
      INSERT INTO tasks (title, date_completion, is_done, project_id, user_id)
      VALUES (${taskName}, ${dateCompletion ? dateCompletion : null}, ${false}, ${Number(projectId)}, ${USER_ID})
    `;
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/projects");
  redirect("/projects");
}
