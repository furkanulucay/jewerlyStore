import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('yellow');
  
  const COLOR_NAMES = {
    yellow: 'Yellow Gold',
    rose: 'Rose Gold',
    white: 'White Gold',
  };
  
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
                color === 'yellow' ? '#E6CA97' :
                color === 'rose'   ? '#E1A4A9' :
                                     '#D9D9D9',
                border: 'none',
                outline: selectedColor === color ? '1px solid black' : 'none',
                outlineOffset: '4px',
            }}
          />
        ))}
      </div>
      
      <div style={styles.selectedColorLabel}>
        {COLOR_NAMES[selectedColor]}
      </div>
    </div>
  );
};

const styles = {
  card: {
    margin: '3rem',
    marginBottom: '1rem',
  },
  image: {
    display: 'block',
    marginBottom: '1rem',
    width: '250px',
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
  selectedColorLabel: {
    marginTop: 8,
  }
};

export default ProductCard;
