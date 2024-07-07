import React from "react";

import "./Home.css";

import Header from "../../components/Header/header.jsx";
import Hero from "../../components/Hero/hero.jsx";
import RecentPost from "../../components/recent-post/recentpost.jsx";
import PopuLarpost from "../../components/popular-post/popularpost.jsx";
import NewsLetter from "../../components/news-letter/newsletter.jsx";
import Footer from "../../components/footer/footer.jsx";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <RecentPost />

      <PopuLarpost />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
