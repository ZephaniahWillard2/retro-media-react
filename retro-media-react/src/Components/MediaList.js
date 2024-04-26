// MediaList Component:

// Receive a list of media items and a cart addition function as props.
// Render a list of MediaItem components, each receiving its own item details and 
// the shared cart function, illustrating props usage for component communication.

import React from 'react';
import MediaItem from './MediaItem';

const MediaList = ({mediaItems, addToCart, removeFromCart, toggleFav}) => {
    return(
        <>
        <h2>Media List</h2>
        <div className='media-list'>
            
            {mediaItems.map((mediaItem, index) => (
            <MediaItem key = {index} mediaItem = {mediaItem} addToCart={addToCart} removeFromCart={removeFromCart} toggleFav={toggleFav}/>
            ))}
        </div>
        </>
    );
};



  export default MediaList;



//   const MediaLists = ({mediaItems, addToCart}) =>{
//     return(
//         <div>
//             {mediaItems.map(item => (
//                 <MediaItem key = {item.id} item = {item} addToCart={addToCart}/>
//             ))}
//         </div>
//     )
//   };