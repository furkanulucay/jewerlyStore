import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import ProductCarousel from '../components/ProductCarousel';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const query = useQuery();
  const navigate = useNavigate();

  // Read filter paramaters
  const minPrice = query.get('minPrice');
  const maxPrice = query.get('maxPrice');
  const minPopularity = query.get('minPopularity');
  const maxPopularity = query.get('maxPopularity');

  useEffect(() => {
    fetchProducts({ minPrice, maxPrice, minPopularity, maxPopularity })
      .then(setProducts)
      .catch((err) => console.error('API error:', err));
  }, [minPrice, maxPrice, minPopularity, maxPopularity]);

  const [filter, setFilter] = useState({
    minPrice: minPrice || '',
    maxPrice: maxPrice || '',
    minPopularity: minPopularity || '',
    maxPopularity: maxPopularity || ''
  });

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p style={{ fontFamily: 'Avenir', fontSize: 45 }}>Product List</p>
      <ProductCarousel products={products} />
    </div>
  );
};

export default ProductList;
