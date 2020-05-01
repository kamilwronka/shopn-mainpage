import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <>
      <AppBar />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
