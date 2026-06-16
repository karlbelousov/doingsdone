import { Metadata } from "next";
import "./normalize.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Дела в порядке",
  description:
    '"Дела в порядке" — это веб приложение для удобного ведения списка дел. Сервис помогает пользователям не забывать о предстоящих важных событиях и задачах.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="ru">{children}</html>;
}
