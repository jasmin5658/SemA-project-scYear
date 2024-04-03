import Navbar from "../components/Navbar";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Row, Col } from "react-bootstrap";
import StoreItem from "../pages/StoreItem";
import { StoreItemProps } from "../types/Props";
import Footer from "../components/Footer";

export default function Store() {
  const { products } = useContext<any>(ProductsContext);
  
  return (
    <>
    <Navbar/>
      <Row md={2} xs={1} lg={3} className="g-3" style={{  backgroundColor: "#f3ede1b6", marginTop: ".5px", padding: "1rem", borderRadius: "10px"}}>
        {products.map((item: StoreItemProps) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
      <Footer />
    </>
  );
}
