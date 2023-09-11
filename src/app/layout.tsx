import "@unocss/reset/tailwind.css";
import "./globals.scss";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <div className="app">
            <Sidebar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
