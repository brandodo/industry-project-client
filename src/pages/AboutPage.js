import stitch from "../assets/images/stich-food.jpg";

export default function AboutPage({ user }) {
  return (
    <main className="about">
      <h2 className="about__headerText">This is the About Page {user}</h2>
      <img src={stitch} alt="food-meme" />
    </main>
  );
}
