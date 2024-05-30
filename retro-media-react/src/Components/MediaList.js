import React from 'react';
import MediaItem from './MediaItem';

                    //!!!-Demo Code-!!!

  const MediaLists = ({mediaItems, addToCart, removeFromCart, toggleFavorite}) =>{
    return(
        <div>
            {mediaItems.map(item => (
                <MediaItem 
                    key = {item.id}
                    item = {item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    toggleFavorite={toggleFavorite}/>
            ))}
        </div>
    )
  };

  export default MediaLists;



//Original>
// const MediaList = ({mediaItems, addToCart, removeFromCart, toggleFav}) => {
//     return(
//         <>
//         <h2>Media List</h2>
//         <div className='media-list'>
            
//             {mediaItems.map((mediaItem, index) => (
//             <MediaItem key = {index} mediaItem = {mediaItem} addToCart={addToCart} removeFromCart={removeFromCart} toggleFav={toggleFav}/>
//             ))}
//         </div>
//         </>
//     );
// };

