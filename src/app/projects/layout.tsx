import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import ContentSide from "@/components/layouts/ContentSide";
import { openSans } from "../fonts";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`${openSans.className}`}>
      <h1 className="visually-hidden">Дела в порядке</h1>
      <div className="page-wrapper">
        <div className="container">
          <Header />
          <div className="content">
            <ContentSide />
            <main className="content__main">{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
