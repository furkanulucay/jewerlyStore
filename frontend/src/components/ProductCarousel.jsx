import React, { useRef } from 'react';
import ProductCard from './ProductCard';

const ProductCarousel = ({ products }) => {
  const scrollContainerRef = useRef(null);

  const scrollByAmount = 320;

  const handlePrev = () => {
    scrollContainerRef.current.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });
  };

  const handleNext = () => {
    scrollContainerRef.current.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
  };

  return (
    <div style={styles.carouselWrapper}>
      <button onClick={handlePrev} style={styles.arrowButton}>{'<'}</button>

      <div style={styles.carouselScrollContainer} ref={scrollContainerRef}>
        {products.map((product, i) => (
          <div key={i} style={styles.cardWrapper}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <button onClick={handleNext} style={styles.arrowButton}>{'>'}</button>
    </div>
  );
};

const styles = {
  carouselWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3rem',
  },
  arrowButton: {
    fontSize: '2rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0 1rem',
  },
  carouselScrollContainer: {
    display: 'flex',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    scrollBehavior: 'smooth',
    gap: '1rem',
    width: '1300px',
    padding: '1rem 0',

  },
  cardWrapper: {
    flex: '0 0 auto',
    scrollSnapAlign: 'start',
    width: '300px',
  },
};

export default ProductCarousel;
