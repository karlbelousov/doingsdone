import { Suspense } from "react";
import TasksList from "@/components/ui/TasksList";
import SearchForm from "@/components/ui/SearchForm";
import TasksControls from "@/components/ui/TasksControls";

export default async function ProjectPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{
    search?: string;
  }>;
}) {
  const paramsPage = await params;
  const id = Number(paramsPage.id);
  const searchAllParams = await searchParams;
  const search = searchAllParams?.search || "";

  return (
    <>
      <h2 className="content__main-heading">Список задач</h2>
      <SearchForm />
      <TasksControls projectsId={id} />
      <Suspense fallback={<div>Загрузка...</div>}>
        <TasksList projectId={id} search={search} />
      </Suspense>
    </>
  );
}
