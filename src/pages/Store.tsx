import Navbar from "../components/Navbar";
import { useContext } from "react";
import Product from "../components/Product"; 
import { ProductPage } from "../types/ProductPage";
import { ProductsContext } from "../context/ProductsContext";
import { Row, Col } from "react-bootstrap";

export default function Store() {
  const { products } = useContext<any>(ProductsContext);

  return (
    <>
      <Navbar />
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((item: ProductPage) => (
          <Col key={item.id}>
            <Product {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
