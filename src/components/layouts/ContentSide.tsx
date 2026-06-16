import Link from "next/link";
import NavigationList from "../ui/NavigationList";
import { Suspense } from "react";

export default function ContentSide() {
  return (
    <section className="content__side">
      <h2 className="content__side-heading">Проекты</h2>
      <nav className="main-navigation">
        <Suspense fallback={<div>Загрузка...</div>}>
          <NavigationList />
        </Suspense>
      </nav>
      <Link
        className="button button--transparent button--plus content__side-button"
        href="/projects/create-project"
      >
        Добавить проект
      </Link>
    </section>
  );
}
