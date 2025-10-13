import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductCard from "./product";
import { useEffect, useState } from "react";
import { FilterProduct } from "./filter";
import { WebFooter } from "./footer";

// code that we use to make our api call from the backend...

export function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <main className="home">
        <div style={{ textAlign: "center" }}>
          <h1>Corazon 🩷</h1>
          <p>{message ? message : "Loading from backend..."}</p>
        </div>
      </main>
      <WebFooter />
    </>
  );
}

export function Tops() {
  return (
    <>
      <main className="product-container">
        <h1 className="product__title">THIS IS MY Tops Page </h1>
        <FilterProduct />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </main>
      <WebFooter />
    </>
  );
}
export function Pants() {
  return (
    <>
      <main className="product-container">
        <h1 className="product__title">THIS IS MY PANTS PAGE</h1>
        <FilterProduct />
        <ProductCard />
      </main>
      <WebFooter />
    </>
  );
}

export function Accessories() {
  return (
    <>
      <main className="product-container">
        <h1 className="product__title">THIS IS ACCESSORIES</h1>
        <FilterProduct />
        <ProductCard />
      </main>
      <WebFooter />
    </>
  );
}

export function Profile() {
  return (
    <>
      <main className="product">
        <h1>Login/Signup or logout?</h1>
      </main>
      <WebFooter />
    </>
  );
}
