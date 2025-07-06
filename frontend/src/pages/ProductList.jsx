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
      <p style={{ fontFamily: 'Avenir', fontSize: 45 }}>Product List</p>
      <ProductCarousel products={products} />
    </div>
  );
};

export default ProductList;
