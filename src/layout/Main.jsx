import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import H from "../components/shared/header/H";
import Footer from "../components/shared/footer/Footer";
const Main = () => {
  return (
    <>
      
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Main;
