import { Link } from "react-router-dom";
import { useState } from "react";
import hamburger from "../assets/hamburger-2.svg";
import closeBtn from "../assets/close-2.svg";
import cart from "../assets/cart-2.svg";
import account from "../assets/account.svg";
import "../css/navbar.css";
export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => {
    if (window.innerWidth <= 850) {
      setIsOpen(false);
    }
  };

  return (
    <header>
      <button
        className={`open-sidebar`}
        aria-label="open-sidebar"
        aria-controls="nav-bar"
        onClick={toggleMenu}
      >
        <img src={hamburger} alt="menu" />
      </button>
      <nav className={`nav-bar ${isOpen ? "show" : ""}`}>
        <ul className="nav-bar__ul">
          <li className="nav-bar__item">
            <button onClick={toggleMenu} className={`nav-bar--close`}>
              <img src={closeBtn} alt="close" />
            </button>
          </li>
          <li className="nav-bar__item">
            <Link to="/tops" onClick={handleLinkClick}>
              Tops
            </Link>
          </li>
          <li className="nav-bar__item">
            <Link to="/pants" onClick={handleLinkClick}>
              Pants
            </Link>
          </li>
          <li className="nav-bar__item">
            <Link to="/Accessories" onClick={handleLinkClick}>
              Accessories
            </Link>
          </li>
        </ul>

        <ul className="nav-bar__ul">
          <li className="nav-bar__item nav-bar__item--logo">
            <Link to="/" onClick={handleLinkClick}>
              Corazon
            </Link>
          </li>
        </ul>

        <ul className="nav-bar__ul">
          <Link
            to="/profile"
            className="nav-bar__item "
            onClick={handleLinkClick}
          >
            <img className="button-account" src={account} />
          </Link>

          <li className="nav-bar__item">
            <Link to="/">
              <img src={cart} />
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`overlay ${isOpen ? "display-overlay" : ""}`}
        aria-hidden={!isOpen}
        onClick={toggleMenu}
      ></div>
    </header>
  );
}
