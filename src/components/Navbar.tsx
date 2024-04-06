import  { useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCart from "./ShoppingCart";
import"../styles/navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openCart, cartQuantity } = useShoppingCart();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <Link to="/" className="logo">
          <img
            src="/Images/logoNew.jpg"
            alt="Logo"
            style={{ maxHeight: "5rem", borderRadius: "50%" }}
          />
        </Link>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        </ul>
        <Link to="/login" className="login-btn">
          Log In
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        {cartQuantity > 0 && (
          <button className="cart-btn" onClick={openCart}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path d="M10 21 A1 1 0 0 1 9 22 A1 1 0 0 1 8 21 A1 1 0 0 1 10 21 z" />
              <path d="M21 21 A1 1 0 0 1 20 22 A1 1 0 0 1 19 21 A1 1 0 0 1 21 21 z" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
              <span className="cart-count">{cartQuantity}</span>
              </button>
            )}
          </nav>
          <ShoppingCart />
        </>
      );
    };
    
    export default Navbar;

