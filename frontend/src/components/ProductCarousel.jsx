import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductCarousel = ({ products }) => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const visibleProducts = products.slice(
    scrollIndex * itemsPerPage,
    scrollIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div style={styles.carousel}>
      <button onClick={handlePrev} style={styles.arrowButton}>{'<'}</button>

      <div style={styles.carouselWindow}>
        {visibleProducts.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>

      <button onClick={handleNext} style={styles.arrowButton}>{'>'}</button>
    </div>
  );
};

const styles = {
  carousel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4rem',
  },
  arrowButton: {
    fontSize: '2rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0 1rem',
  },
  carouselWindow: {
    display: 'flex',
    overflow: 'hidden',
    width: '1500px',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default ProductCarousel;
