import CreateTaskForm from "@/components/ui/CreateTaskForm";
import { USER_ID } from "@/constants/userId";
import { fetchProjects } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Добавление задачи",
};

export default async function CreateTaskPage() {
  const projects = await fetchProjects(USER_ID);

  return (
    <>
      <h2 className="content__main-heading">Добавление задачи</h2>
      <CreateTaskForm projects={projects} />
    </>
  );
}
