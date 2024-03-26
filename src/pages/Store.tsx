import Navbar from "../components/Navbar";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Row, Col } from "react-bootstrap";
import StoreItem from "../pages/StoreItem";
import { StoreItemProps } from "../types/Props";

export default function Store() {
  const { products } = useContext<any>(ProductsContext);

  return (
    <>
      <Navbar />
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((item: StoreItemProps) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
