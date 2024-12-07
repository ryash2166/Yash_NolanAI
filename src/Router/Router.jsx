import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import ScrollTop from "../Components/Common/ScrollTop";

const Router = () => {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Router;
