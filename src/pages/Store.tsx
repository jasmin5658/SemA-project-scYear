import React, { useContext, useState } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { Row, Col } from 'react-bootstrap';
import StoreItem from '../pages/StoreItem';
import { StoreItemProps } from '../types/Props';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Store() {
  const { products } = useContext<any>(ProductsContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filterBy, setFilterBy] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value);
  };

  const sortedAndFilteredProducts = products
    .filter((item: StoreItemProps) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item: StoreItemProps) => {
      if (filterBy === 'oil colors') {
        return item.shortDesc === 'oil colors';
      }
      if (filterBy === 'water colors') {
        return item.shortDesc === 'water colors';
      }
      return true;
    })
    .sort((a: StoreItemProps, b: StoreItemProps) => {
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
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <select value={sortBy} onChange={handleSortChange}>
        <option value="">Sort by price</option>
        <option value="price-lowest">Price : Lowest to Highest</option>
        <option value="price-highest">Price : Highest to Lowest</option>
      </select>
      <select value={filterBy} onChange={handleFilterChange}>
        <option value="">Filter by category</option>
        <option value="water colors">water colors</option>
        <option value="oil colors">oil colors</option>
      </select>
      <Row
        md={2}
        xs={1}
        lg={3}
        className="g-3"
        style={{
          backgroundColor: '#f3ede1b6',
          marginTop: '.5px',
          padding: '1rem',
          margin: '0',
        }}
      >
        {sortedAndFilteredProducts.map((item: StoreItemProps) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
      <Footer />
    </>
  );
}
