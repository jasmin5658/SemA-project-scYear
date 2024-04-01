import { Container, Navbar as NavbarBs, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCart from "./ShoppingCart";

export default function Navbar() {


  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <>
      <NavbarBs sticky="top" className="bg-white shadow-sm mb-1" style={{ }}>
        <Container>
          {/* Logo */}
          <Link to="/">
            <img
              src="/Images/logoNew.jpg"
              alt="Logo"
              style={{
                maxHeight: "5rem",
                marginRight: "1rem",
                borderRadius: "50%",
              }}
            />
          </Link >
            {/* Links */}
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/store">Store</Link>
            {/* Login Button */}
            <Link to="/login">
              <Button variant="primary" className="ml-auto">
                Log In
              </Button>
            </Link>

            {/* Cart Button */}
            {cartQuantity > 0 && (
              <Button
                onClick={openCart}
                style={{
                  width: "3rem",
                  height: "3rem",
                  position: "relative",
                }}
                variant="outline-primary"
                className="rounded-circle ml-2"
              >
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
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)",
                  }}
                >
                  {cartQuantity}
                </div>
              </Button>
            )}
        </Container>
      </NavbarBs>
      <ShoppingCart />
    </>
    

  );
}
