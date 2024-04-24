// import './App.css';
import React, {useState} from 'react';
import MediaList from './Components/MediaList';

const App = () => {
  const [mediaItems, setMediaItems] = useState([
    { "id": 1, "type": "VHS", title: "Back to the Future" },
    { "id": 2, "type": "DVD", title: "The Matrix" },
    { "id": 3, "type": "CD", title: "Thriller - Michael Jackson" }
  ]);

  const addToCart = (mediaItem) => {
    console.log('Added to Cart', mediaItem)
  };

  return (
    <div className="App">
    <h1>Media Store</h1>
    <MediaList mediaItems={mediaItems} addToCart={addToCart}/>
      
    </div>
  );
};

export default App;