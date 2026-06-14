import Link from "next/link";
import ProjectsList from "../ui/ProjectList";

export default function ContentSide() {
  return (
    <section className="content__side">
      <h2 className="content__side-heading">Проекты</h2>
      <nav className="main-navigation">
        <ProjectsList />
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
