import { useEffect, useState } from "react";
import axios from "axios";
import hideIcon from "../../assets/images/hide.svg";
import "./News.scss";

export default function News() {
  // using News API: https://newsapi.org/

  const API_URL = "https://newsapi.org/v2/top-headlines?";
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [headline, setHeadline] = useState();
  const [link, setLink] = useState();
  const [hide, setHide] = useState(false);

  // fetch News headline and link on mount and set state
  useEffect(() => {
    axios.get(`${API_URL}q=covid&apiKey=${API_KEY}`).then(({ data }) => {
      const { articles } = data;
      const dataLen = articles.length;
      const random = Math.floor(Math.random() * dataLen);

      setHeadline(articles[random].title);
      setLink(articles[random].url);
    });
  }, []);

  return (
    !hide && (
      <section className="dashboard__news">
        <div className="dashboard__news-container">
          <div className="dashboard__news-upper">
            <h3 className="dashboard__news-header">What's New...</h3>
            <img
              src={hideIcon}
              alt="exit"
              className="dashboard__news-hide"
              onClick={() => {
                setHide(true);
              }}
            />
          </div>
          <a
            className="dashboard__news-link"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <p className="dashboard__news-headline">
              {headline || "Loading content..."}
            </p>
          </a>
        </div>
      </section>
    )
  );
}
