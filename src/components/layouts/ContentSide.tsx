import Link from "next/link";
import ProjectsList from "../ui/ProjectList";
import { Suspense } from "react";

export default function ContentSide() {
  return (
    <section className="content__side">
      <h2 className="content__side-heading">Проекты</h2>
      <nav className="main-navigation">
        <Suspense fallback={<div>Загрузка...</div>}>
          <ProjectsList />
        </Suspense>
      </nav>
      <Link
        className="button button--transparent button--plus content__side-button"
        href="/create-project"
      >
        Добавить проект
      </Link>
    </section>
  );
}
