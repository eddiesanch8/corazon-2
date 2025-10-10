import { useState } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home, Pants, Tops, Accessories } from "./components/pages";
import ProductCard from "./components/product";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Router>
        <nav className="nav">
          <ul className="nav__ul">
            <li className="nav__item">
              <Link to="/tops">Tops</Link>
            </li>
            <li className="nav__item">
              <Link to="/pants">Pants</Link>
            </li>
            <li className="nav__item">
              <Link to="/Accessories">Accessories</Link>
            </li>
          </ul>

          <ul className="nav__ul">
            <li className="nav__item">
              <Link to="/">Corazon</Link>
            </li>
          </ul>

          <ul className="nav__ul">
            <li className="nav__item">
              <input placeholder="Hello" />
            </li>
            <li className="nav__item">
              <Link to="/">Profile</Link>
            </li>
            <li className="nav__item">
              <Link to="/">Cart</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tops" element={<Tops />} />
            <Route path="/pants" element={<Pants />} />
            <Route path="/accessories" element={<Accessories />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}
