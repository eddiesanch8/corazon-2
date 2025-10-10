import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../css/product.css";
import ProductCard from "./product";

export function Home() {
  return (
    <main className="home">
      <section>This sends you to...Shoes.</section>
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
