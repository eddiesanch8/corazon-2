import "../css/home.css";
import bg from "../assets/corazon-3.jpg";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <img className="heroimg-2" src={bg} />
        <button className="hero-btn">shop</button>
        <button className="hero-btn">shop</button>
      </section>
    </>
  );
}
