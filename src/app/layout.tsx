"use client";
import "@unocss/reset/tailwind.css";
import "./globals.css";
import { useEffect } from "react";
import ReduxProvider from "@/store/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
  }, []);
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <div className="app">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
