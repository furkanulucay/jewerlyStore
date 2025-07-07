import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import '../styles/productCarousel.css';

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
    <div className="carousel-wrapper">
      <button onClick={handlePrev} className="arrow-button">{'<'}</button>

      <div className="carousel-scroll-container" ref={scrollContainerRef}>
        {products.map((product, i) => (
          <div key={i} className="card-wrapper">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <button onClick={handleNext} className="arrow-button">{'>'}</button>
    </div>
  );
};

export default ProductCarousel;