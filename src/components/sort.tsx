import React, { useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import StoreItem from '../pages/StoreItem';
import { StoreItemProps } from '../types/Props';
import Footer from '../components/Footer';
import { ProductsContext } from '../context/ProductsContext';
import Navbar from '../components/Navbar';

export default function Store() {
  const { products } = useContext<any>(ProductsContext);
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const sortedProducts = [...products].sort((a: StoreItemProps, b: StoreItemProps) => {
    if (sortBy === 'price-lowest') {
      return a.price - b.price;
    }
    if (sortBy === 'price-highest') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
    <Navbar/>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="">Sort by price</option>
        <option value="price-lowest">Price: Lowest to Highest</option>
        <option value="price-highest">Price: Highest to Lowest</option>
      </select>
      <Row md={2} xs={1} lg={3} className="g-3" style={{ backgroundColor: "#f3ede1b6", marginTop: ".5px", padding: "1rem", margin: "0" }}>
        {sortedProducts.map((item: StoreItemProps) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
      <Footer />
    </>
  );
}
