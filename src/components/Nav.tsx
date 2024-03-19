import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <Navbar className="bg-white shadow-sm mb-3">
        <Container>
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>
          <Link to="/shop">shop</Link>
          <Link to="/contact">contact</Link>

        </Container>
      </Navbar>
    </>
  )
}
