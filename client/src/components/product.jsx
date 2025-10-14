import "../css/product.css";
const product = {
  img: "/cherry-earings.webp",
  productName: "Cheri Eearings",
  price: 13.99,
  location: "Charlotte, NC",
  category: "Accessories",
  condition: "Thrifted",
};

import cart from "../assets/cart-2.svg";
// fetch in other file loop through the objects, assign them a variable...
// and then import those values in those objects into the productCard
export default function ProductCard() {
  return (
    <section className="product">
      <img className="product__img" src={product.img} alt="stuff" />
      <h2 className="product__name"> {product.productName}</h2>
      <div className="product__details">
        <p className="product__price">{product.price}</p>
        <p className="product__location">|{product.location}|</p>
        <p className="product__category">{product.condition}</p>
      </div>

      {/* <p className="product__description">
        Stuff about the product: Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Repellat asperiores magni eius neque optio est atque
        deserunt unde, laboriosam eligendi repellendus doloremque corporis iste
        hic exercitationem alias culpa consectetur accusamus.
      </p> */}
      <button className="product__btn">
        <img className="product__cart" src={cart} />
        Add to Cart
      </button>
    </section>
  );
}
