import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('yellow');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div style={styles.card}>
      <img
        src={product.images[selectedColor]}
        alt={product.name}
        style={styles.image}
      />

      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Popularity: {product.popularity}/5</p>

      <div style={styles.colorPickerContainer}>
        {['yellow', 'rose', 'white'].map((color) => (
          <button
            key={color}
            onClick={() => handleColorChange(color)}
            style={{
              ...styles.colorButton,
              backgroundColor:
                color === 'yellow' ? '#FFD700' :
                color === 'rose'   ? '#FFB6C1' :
                                     '#eee',
              border: selectedColor === color ? '2px solid black' : '1px solid gray',
            }}
          />
        ))}
      </div>
    </div>
  );
};

// 🎨 Stil nesnesi
const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    marginBottom: '1rem',
  },
  image: {
    display: 'block',
    marginBottom: '1rem',
    width: '200px',
  },
  colorPickerContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  colorButton: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    cursor: 'pointer',
  },
};

export default ProductCard;
