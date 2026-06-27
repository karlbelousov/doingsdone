import { Suspense } from "react";
import TasksList from "@/components/ui/TasksList";
import SearchForm from "@/components/ui/SearchForm";
import TasksControls from "@/components/ui/TasksControls";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Все задачи",
};

export default async function AllProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchAllParams = await searchParams;
  const query = searchAllParams?.query || "";

  return (
    <>
      <h2 className="content__main-heading">Список задач</h2>
      <SearchForm />
      <TasksControls />
      <Suspense key={query} fallback={<div>Загрузка...</div>}>
        <TasksList query={query} />
      </Suspense>
    </>
  );
}
