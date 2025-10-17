import "../css/home.css";
import bg from "../assets/corazon-3.jpg";
import CarouselAcc from "./Carousel";
import CarouselBottoms from "./Carousel-bottoms";
import CarouselTops from "./Carousel-tops";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <img className="heroimg-2" src={bg} />
        <div className="sliders">
          {/* <div className="text-container">
            <h1>Corazon</h1>
          </div> */}
          <CarouselBottoms />
          <CarouselAcc />
          <CarouselTops />
        </div>
      </section>
      <section className="CTA">
        <h2 className="cta__text">
          thrifted<span className="cta__cursive">Styles</span>
        </h2>
        <h2 className="cta__text--small">
          "Wear your heart on both your sleeves"
          <button>
            <Link to="/tops">Shop Now</Link>
          </button>
        </h2>
      </section>
    </>
  );
}
