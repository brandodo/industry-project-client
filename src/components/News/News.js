import React, { useEffect, useState } from "react";
import axios from "axios";
import "./News.scss";

export default function News() {
  // API call to news API
  const API_URL = "https://newsapi.org/v2/top-headlines?";
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [headline, setHeadline] = useState();
  const [image, setImage] = useState();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}q=covid&apiKey=${API_KEY}`).then(({ data }) => {
      const { articles } = data;
      const dataLen = articles.length;
      const random = Math.floor(Math.random() * dataLen);

      setHeadline(articles[random].title);
      setImage(articles[random].urlToImage);
    });
  }, []);

  return (
    !hide && (
      <section className="dashboard__news">
        {/* <h3 className="dashboard__news-header">News</h3> */}
        <div className="dashboard__news-container">
          <div
            className="dashboard__news-hide"
            onClick={() => {
              setHide(true);
            }}
          >
            X
          </div>
          <img
            className="dashboard__news-background"
            src={image}
            alt="news-background"
          />
          <p className="dashboard__news-headline">
            {headline || "Loading content..."}
          </p>
        </div>
      </section>
    )
  );
}
