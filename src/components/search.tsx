import React, { useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import StoreItem from '../pages/StoreItem';
import { StoreItemProps } from '../types/Props';
import Footer from '../components/Footer';
import { ProductsContext } from '../context/ProductsContext';

export default function Store() {
  const { products } = useContext<any>(ProductsContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder=" Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <Row md={2} xs={1} lg={3} className="g-3" style={{ backgroundColor: "#f3ede1b6", marginTop: ".5px", padding: "1rem", margin: "0" }}>
        {products
          .filter((item: StoreItemProps) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item: StoreItemProps) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <Footer />
    </>
  );
}
