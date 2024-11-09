import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

function Layout() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
