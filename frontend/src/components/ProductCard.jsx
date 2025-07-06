import React, { useState } from 'react';
import PopularityRate from './PopularityRate';

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

      <div style={styles.cardLabelsRow}>
        <span style={styles.productName}>{product.name}</span>
        <span style={styles.price}>${product.price} USD</span>

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
        <div style={styles.starRow}>
            <PopularityRate score={product.popularity} />
            <span style={styles.popularityScore}>{product.popularity}/5</span>
        </div>
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
    height: '250px',
    borderRadius: '10%',
  },
  colorPickerContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
    marginTop: '1rem',
  },
  colorButton: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    cursor: 'pointer',
  },
  cardLabelsRow: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: 8,
},

selectedColorLabel: {
  marginBottom: '0.5rem',
  textAlign: 'left',
  fontFamily: 'Avenir',
  fontSize: 12,
},

starRow: {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  
},

popularityScore: {
  color: '#555',
  fontFamily: 'Avenir',
  fontSize: 14,
},

price: {
  marginTop: '0.5rem',  
  fontFamily: 'Montserrat-Regular',
  fontSize: 15,
},

productName: {
  fontFamily: 'Montserrat-Medium',
  fontSize: 15,
}

};

export default ProductCard;
