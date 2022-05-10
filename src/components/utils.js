const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://flexooffice-server.heroku.com"
    : "http://localhost:8080";

export default API_URL;
