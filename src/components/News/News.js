import React, { useState } from "react";
import axios from "axios";

export default function News() {
  // API call to news API
  const API_URL = "https://newsapi.org/v2/top-headlines?";
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [headline, setHeadline] = useState();
  const [image, setImage] = useState();

  const getNews = () => {};

  return (
    <section className="dashboard__news">
      <img src={image} alt="news-background" />
      <div className="dashboard__news-hero">
        {headline || "Loading content..."}
      </div>
    </section>
  );
}
