import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductCard from "./product";
import { FilterProduct } from "./filter";
import { WebFooter } from "./footer";
import React, { useState, useEffect } from "react";

export function Home() {
  return <p>Hello World</p>;
}

export function Tops() {
  return (
    <>
      <main className="product-container">
        <FilterProduct />
        <ProductCard category="tops" />
      </main>
      <WebFooter />
    </>
  );
}
export function Pants() {
  return (
    <>
      <main className="product-container">
        <FilterProduct />
        <ProductCard category="bottoms" />
      </main>
      <WebFooter />
    </>
  );
}

export function Accessories() {
  return (
    <>
      <main className="product-container">
        <FilterProduct />
        <ProductCard category="accessories" />
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
