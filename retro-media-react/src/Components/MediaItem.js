import React from 'react'

const MediaItem = ({ mediaItem, addToCart }) => {
    const { title, type } = mediaItem;
  
    const handleAddToCart = () => {
      addToCart(mediaItem);
    };
  
    return (
      <div className="media-item">
        <h2>Title: {title}</h2>
        <p>Type: {type}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    );
  };

export default MediaItem;