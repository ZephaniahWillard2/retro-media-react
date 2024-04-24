// MediaList Component:

// Receive a list of media items and a cart addition function as props.
// Render a list of MediaItem components, each receiving its own item details and 
// the shared cart function, illustrating props usage for component communication.

import React from 'react';
import MediaItem from './MediaItem';

const MediaList = ({mediaItems, addToCart}) => {
    return(
        <div>
            <h2>Media List</h2>
            {mediaItems.map((mediaItem, index) => (
            <MediaItem key = {index} mediaItems = {mediaItem} addToCart={addToCart}/>
            ))};
        </div>
    );
};



  export default MediaList;