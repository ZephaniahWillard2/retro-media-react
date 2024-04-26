// import React from 'react';
import React, {useState} from 'react';


const MediaItem = ({ mediaItem = {}, addToCart, removeFromCart, toggleFav }) => {
    const { title, type } = mediaItem;
  
    const handleAddToCart = () => {
      addToCart(mediaItem);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(mediaItem);
    };

    const [fav, setFav] = useState(false);

    const handleToggleFav = () => {
        toggleFav(mediaItem);
        setFav(!fav);
    };
  
    return (
      <div className="media-item">
        <h3>Title: {title}</h3>
        <p>Type: {type}</p>
        {addToCart && <button onClick={handleAddToCart}>Add to Cart</button>}
        {removeFromCart && <button onClick={handleRemoveFromCart}>Remove From Cart</button>}
        <button onClick={handleToggleFav}>{fav ? 'Remove from Favorites' : 'Add to Favortes'}</button>
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