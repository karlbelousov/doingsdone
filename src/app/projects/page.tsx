import { Suspense } from "react";
import TasksList from "@/components/ui/TasksList";
import SearchForm from "@/components/ui/SearchForm";
import TasksControls from "@/components/ui/TasksControls";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Все задачи",
}

export default function AllProjectsPage() {
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
