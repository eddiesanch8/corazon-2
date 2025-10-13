import "../css/product.css";
import shirt from "../assets/images/80s-block.jpg";
import cart from "../assets/cart-2.svg";
// fetch in other file loop through the objects, assign them a variable...
// and then import those values in those objects into the productCard
export default function ProductCard() {
  return (
    <section className="product">
      <img className="product__img" src={shirt} alt="stuff" />
      <h2 className="product__name"> Thrifted Top</h2>
      <div className="product__details">
        <p className="product__price">$13.99</p>
        <p className="product__location">|Charlotte, NC|</p>
        <p className="product__category">Thrifted Top</p>
      </div>

      {/* <p className="product__description">
        Stuff about the product: Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Repellat asperiores magni eius neque optio est atque
        deserunt unde, laboriosam eligendi repellendus doloremque corporis iste
        hic exercitationem alias culpa consectetur accusamus.
      </p> */}
      <button className="product__btn">
        {" "}
        <img className="product__cart" src={cart} />
        Add to Cart
      </button>
    </section>
  );
}
