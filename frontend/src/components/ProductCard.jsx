import React from 'react';

const ProductCard = ({ product }) => {
  const { name, price, popularity, images } = product;

  return (
    <div className="product-card" style={{ border: '1px solid #ccc', padding: '1rem', width: '250px' }}>
      <img src={images.yellow} alt={name} style={{ width: '100%' }} />
      <h3>{name}</h3>
      <p>💵 ${price}</p>
      <p>⭐ {popularity}/5</p>
    </div>
  );
};

export default ProductCard;