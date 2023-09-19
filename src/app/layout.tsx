import "@unocss/reset/tailwind.css";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <div className="app">{children}</div>
        </main>
      </body>
    </html>
  );
}
