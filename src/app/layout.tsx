import "@unocss/reset/tailwind.css";
import "./globals.scss";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <div className="header">
            <Header />
          </div>
          <div className="nav">
            <Sidebar />
          </div>
          <div className="app">{children}</div>
        </main>
      </body>
    </html>
  );
}
