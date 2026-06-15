import { Suspense } from "react";
import TasksList from "@/components/ui/TasksList";
import SearchForm from "@/components/ui/SearchForm";
import TasksControls from "@/components/ui/TasksControls";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramsPage = await params;
  const id = Number(paramsPage.id);

  return (
    <>
      <h2 className="content__main-heading">Список задач</h2>
      <SearchForm />
      <TasksControls />
      <Suspense fallback={<div>Загрузка...</div>}>
        <TasksList projectId={id} />
      </Suspense>
    </>
  );
}
