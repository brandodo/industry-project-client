const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://heroku.com"
    : "http://localhost:8080";

export default API_URL;
