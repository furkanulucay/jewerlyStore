import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ score }) => {
  const fullStars = Math.floor(score);               
  const hasHalfStar = score % 1 >= 0.25 && score % 1 < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} style={styles.star} />);
  }

  if (hasHalfStar) {
    stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} style={styles.star} />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarEmpty} style={{ ...styles.star, color: '#ccc' }} />);
  }

  return (
    <div style={styles.starContainer}>
      {stars}
    </div>
  );
};

const styles = {
  starContainer: {
    display: 'flex',
  },
  star: {
    fontSize: 14,
    color: '#FFD700',
  },
};

export default StarRating;