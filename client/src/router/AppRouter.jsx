// src/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"; // Example if you have a footer

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This is where child routes will render */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
