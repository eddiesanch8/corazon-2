import React, { useState, useEffect } from "react";
import "../css/product.css";
import cart from "../assets/cart-2.svg";
// fetch in other file loop through the objects, assign them a variable...
// and then import those values in those objects into the productCard
export default function ProductCard({ category }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/products?category=${category}`
        );
        const parsedData = await response.json();
        setData(parsedData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data.map((product) => (
        <section className="product" key={product.id}>
          <img
            className="product__img"
            src={product.image}
            alt={product.alt_text}
          />
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
      ))}
    </>
  );
}
