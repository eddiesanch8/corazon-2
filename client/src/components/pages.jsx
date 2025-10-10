import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../css/product.css";
import ProductCard from "./product";
import { useEffect, useState } from "react";

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
    <main className="home">
      <div style={{ textAlign: "center" }}>
        <h1>Corazon 🩷</h1>
        <p>{message ? message : "Loading from backend..."}</p>
      </div>
    </main>
  );
}

export function Tops() {
  return (
    <main className="tops">
      <ProductCard />
    </main>
  );
}
export function Pants() {
  return (
    <main className="pants">
      <h1>THIS IS MY PANTS PAGE</h1>
    </main>
  );
}

export function Accessories() {
  return (
    <main className="accessories">
      <h1>THIS IS ACCESSORIES</h1>
    </main>
  );
}

export function Product() {
  return (
    <main className="product">
      <h1>THIS IS MY Product PAGE</h1>
    </main>
  );
}
