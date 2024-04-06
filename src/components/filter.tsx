import React, { useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import StoreItem from '../pages/StoreItem';
import { StoreItemProps } from '../types/Props';
import Footer from '../components/Footer';
import { ProductsContext } from '../context/ProductsContext';

export default function Store() {
  const { products } = useContext<any>(ProductsContext);
  const [filterBy, setFilterBy] = useState<string>('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value);
  };

  const filteredProducts = products.filter((item: StoreItemProps) => {
    if (filterBy === 'Water colors') {
      return item.category === 'Water colors';
    }
    if (filterBy === 'Oil colors') {
      return item.category === 'Oil colors';
    }
    return true;
  });

  return (
    <>
      <select value={filterBy} onChange={handleFilterChange}>
        <option value="">Filter by category</option>
        <option value="Water colors">Water colors</option>
        <option value="Oil colors">Oil colors</option>
      </select>
      <Row md={2} xs={1} lg={3} className="g-3" style={{ backgroundColor: "#f3ede1b6", marginTop: ".5px", padding: "1rem", margin: "0" }}>
        {filteredProducts.map((item: StoreItemProps) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
      <Footer />
    </>
  );
}
