import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const [isLoggedIn] = useState(true);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
