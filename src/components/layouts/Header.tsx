import Image from "next/image";
import Link from "next/link";

export default function Header({ logoHref = "/" }: { logoHref?: string }) {
  return (
    <header className="main-header">
      <Link href={logoHref}>
        <Image
          src="/img/logo.png"
          width={153}
          height={42}
          alt="Логитип Дела в порядке"
          loading="eager"
        />
      </Link>
      <div className="main-header__side">
        <Link
          className="main-header__side-item button button--plus open-modal"
          href="/projects/create-task"
        >
          Добавить задачу
        </Link>
        <div className="main-header__side-item user-menu">
          <div className="user-menu__data">
            <p>Константин</p>
            <a href="#">Выйти</a>
          </div>
        </div>
      </div>
    </header>
  );
}
