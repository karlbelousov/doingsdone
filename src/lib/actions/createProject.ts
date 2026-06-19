"use server";

import { z } from "zod";
import postgres from "postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { USER_ID } from "@/constants/userId";
import { Project } from "../definition";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const projects = await sql<Project[]>`
        SELECT * FROM projects
        WHERE user_id=${USER_ID}
    `;

const CreateProjectFormSchema = z.object({
  projectName: z
    .string()
    .min(1, {
      message: "Запoлните это поле",
    })
    .refine(
      (projectName) => {
        let isValidName = true;
        projects.forEach((project) => {
          if (
            project.project_name.toLowerCase() ===
            projectName.trim().toLowerCase()
          ) {
            isValidName = false;
          }
        });
        return isValidName;
      },
      { error: "Данный проект уже существует", path: ["projectName"] },
    ),
});

export type CreateProjectFormState = {
  errors?: {
    projectName?: string[];
  };
};

export default async function createProject(
  prevState: CreateProjectFormState,
  formData: FormData,
) {
  const validatedFields = CreateProjectFormSchema.safeParse({
    projectName: formData.get("projectName"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { projectName } = validatedFields.data;

  try {
    await sql`
      INSERT INTO projects (project_name, user_id)
      VALUES (${projectName}, ${USER_ID})
    `;
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/projects");
  redirect("/projects");
}
