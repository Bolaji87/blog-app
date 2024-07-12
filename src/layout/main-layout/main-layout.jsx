import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/footer/footer";
import PopuLarpost from "../../components/popular-post/popularpost";
import NewsLetter from "../../components/news-letter/newsletter";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <PopuLarpost />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default MainLayout;
