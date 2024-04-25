import React from 'react'

const MediaItem = ({ mediaItem = {}, addToCart }) => {
    const { title, type } = mediaItem;
  
    const handleAddToCart = () => {
      addToCart(mediaItem);
    };
  
    return (
      <div className="media-item">
        <h3>Title: {title}</h3>
        <p>Type: {type}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    );
  };

export default MediaItem;



// const MediaItem = ({item, addToCart}) => {
//     return(
//         <div>
//             <h3>{items.title}</h3>
//             <p>Media Type: {item.type}</p>
//             <button onClick={() => addToCart(item)}>Add to Cart</button>
//         </div>

//     )
// };