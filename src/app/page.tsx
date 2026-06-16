import Link from "next/link";
import { openSans } from "./fonts";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";


export default function Home() {
  return (
    <body className={`body-background ${openSans.className}`}>
      <h1 className="visually-hidden">Дела в порядке</h1>
      <div className="page-wrapper">
        <div className="container">
          <Header />
          <div className="content">
            <section className="welcome">
              <h2 className="welcome__heading">«Дела в порядке»</h2>
              <div className="welcome__text">
                <p>
                  «Дела в порядке» — это веб приложение для удобного ведения
                  списка дел. Сервис помогает пользователям не забывать о
                  предстоящих важных событиях и задачах.
                </p>
                <p>
                  После создания аккаунта, пользователь может начать вносить
                  свои дела, деля их по проектам и указывая сроки.
                </p>
              </div>
              <Link className="welcome__button button" href="/register">
                Зарегистрироваться
              </Link>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
