import shirt from "../img/80s-block.jpg";
// fetch in other file loop through the objects, assign them a variable...
// and then import those values in those objects into the productCard
export default function ProductCard() {
  return (
    <section className="product">
      <img className="product__img" src={shirt} alt="stuff" />
      <h2 className="product__name"> This is a Cool Thing</h2>
      <p className="product__price">This is the price: 13.99</p>
      <p>
        Stuff about the product: Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Repellat asperiores magni eius neque optio est atque
        deserunt unde, laboriosam eligendi repellendus doloremque corporis iste
        hic exercitationem alias culpa consectetur accusamus.
      </p>
    </section>
  );
}
