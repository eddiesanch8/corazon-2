import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductCard from "./product";
import { FilterProduct } from "./filter";
import { WebFooter } from "./footer";
import React, { useState, useEffect } from "react";
import HandleFilter from "../handlers/handlefilter";
import HomePage from "./home";
import ContactPage from "./contact";
//

export function Home() {
  return (
    <>
      <main className="home-page">
        <HomePage />
      </main>
      <WebFooter />
    </>
  );
}

export function Tops() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "http://localhost:8000/api/products?category=tops"
        );
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <main className="product-container">
        <FilterProduct
          onFilterChange={(value) =>
            HandleFilter(value, products, setFilteredProducts)
          }
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ProductCard products={filteredProducts} />
        )}
      </main>
      <WebFooter />
    </>
  );
}
export function Pants() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "http://localhost:8000/api/products?category=bottoms"
        );
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <main className="product-container">
        <FilterProduct
          onFilterChange={(value) =>
            HandleFilter(value, products, setFilteredProducts)
          }
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ProductCard products={filteredProducts} />
        )}
      </main>
      <WebFooter />
    </>
  );
}

export function Accessories() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "http://localhost:8000/api/products?category=accessories"
        );
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <main className="product-container">
        <FilterProduct
          onFilterChange={(value) =>
            HandleFilter(value, products, setFilteredProducts)
          }
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ProductCard products={filteredProducts} />
        )}
      </main>
      <WebFooter />
    </>
  );
}

export function Profile() {
  return (
    <>
      <main className="contact">
        <ContactPage />
      </main>
      <WebFooter />
    </>
  );
}
