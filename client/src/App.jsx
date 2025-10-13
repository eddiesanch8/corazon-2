import { useState } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home, Pants, Tops, Accessories } from "./components/pages";
import { NavBar } from "./components/navbar";
export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  // cartItems={cartItems}
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tops" element={<Tops />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </main>
    </Router>
  );
}
