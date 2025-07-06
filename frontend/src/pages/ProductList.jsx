import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCarousel from '../components/ProductCarousel';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err) => console.error('API error:', err));
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>Product List</h1>
      <ProductCarousel products={products} />
    </div>
  );
};

export default ProductList;
