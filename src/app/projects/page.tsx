import { Suspense } from "react";
import SearchForm from "@/components/ui/SearchForm";
import TasksList from "@/components/ui/TasksList";
import TasksControls from "@/components/ui/TasksControls";

export default async function ProjectsPage() {
  return (
    <>
      <h2 className="content__main-heading">Список задач</h2>
      <SearchForm />
      <TasksControls />
      <Suspense fallback={<div>Загрузка...</div>}>
        <TasksList />
      </Suspense>
    </>
  );
}
