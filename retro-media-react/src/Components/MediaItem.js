import React from 'react';
// import React, {useState} from 'react';

//!!!-Demo Code-!!!

const MediaItem = ({item, addToCart, removeFromCart, toggleFavorite}) => {
    return(
        <div>
            <h3>{item.title}</h3>
            <p>Media Type: {item.type}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            <button onClick={() => toggleFavorite(item)}>{item.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
        </div>

    )
};

export default MediaItem;


//Original>
// const MediaItem = ({ mediaItem = {}, addToCart, removeFromCart, toggleFav }) => {
//   const [fav, setFav] = useState(false);  
  
//   const { title, type } = mediaItem;
  
//     const handleAddToCart = () => {
//       addToCart(mediaItem);
//     };

//     const handleRemoveFromCart = () => {
//         removeFromCart(mediaItem);
//     };

    

//     const handleToggleFav = () => {
//         toggleFav(mediaItem);
//         setFav(!fav);
//     };
  
//     return (
//       <div className="media-item">
//         <h3>Title: {title}</h3>
//         <p>Type: {type}</p>
//         {addToCart && <button onClick={handleAddToCart}>Add to Cart</button>}
//         {removeFromCart && <button onClick={handleRemoveFromCart}>Remove From Cart</button>}
//         <button onClick={handleToggleFav}>{fav ? 'Remove from Favorites' : 'Add to Favortes'}</button>
//       </div>
//     );
//   };
