import CreateProjectForm from "@/components/ui/CreateProjectForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Добавление проекта",
}

export default function CreateProjectPage() {
  return (
    <>
      <h2 className="content__main-heading">Добавление проекта</h2>
      <CreateProjectForm />
    </>
  );
}
