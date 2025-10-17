import "../css/home.css";
import bg from "../assets/corazon-3.jpg";
import CarouselAcc from "./Carousel";
import CarouselBottoms from "./Carousel-bottoms";
import CarouselTops from "./Carousel-tops";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <img className="heroimg-2" src={bg} />
        <div className="sliders">
          <CarouselBottoms />
          <CarouselAcc />
          <CarouselTops />
        </div>
      </section>
    </>
  );
}
