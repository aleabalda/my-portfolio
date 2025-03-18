import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
