import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import NewsCard from "../components/NewsCard";
import "../styles/pages/news.css";
export default function NewsBlog() {
  const child = ["Home", `news`];

  return (
    <div className="container">
      <BreadCrumb children={child} />
      <div className="newsBlog">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}
