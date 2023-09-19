import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import "./../globals.scss";

export default function NodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="nav">
        <Sidebar />
      </div>
      <div className="app">{children}</div>
    </div>
  );
}
