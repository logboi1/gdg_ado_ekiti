import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./styles.scss";

function MainLayout({ children }) {
  return (
    <div className="main-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
