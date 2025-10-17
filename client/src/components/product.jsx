import React, { useState, useEffect } from "react";
import "../css/product.css";
import cart from "../assets/cart-2.svg";
// fetch in other file loop through the objects, assign them a variable...
// and then import those values in those objects into the productCard
export default function ProductCard({ products }) {
  return (
    <>
      {products.map((product) => (
        <section className="product" key={product.id}>
          <img
            className="product__img"
            src={product.image}
            alt={product.alt_text}
          />
          <h2 className="product__name"> {product.name}</h2>
          <div className="product__details">
            <p className="product__price">{product.price}</p>
            <p className="product__location">|{product.location}|</p>
            <p className="product__condition">{product.item_condition}</p>
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
