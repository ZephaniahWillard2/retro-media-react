import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import MediaList from './Components/MediaList';



const App = () => {
  const [mediaItems, setMediaItems] = useState([
    { id: 1, type: "VHS", title: "Back to the Future" },
    { id: 2, type: "DVD", title: "The Matrix" },
    { id: 3, type: "CD", title: "Thriller - Michael Jackson" }
  ]);           
  //  !!!-Original^-!!!



         //!!!Added in Demo!!!
  // const [mediaItems, setMediaItems] = useState([
  //   { id: 1, type: "VHS", title: "Back to the Future", isFavorite: false},
  //   { id: 2, type: "DVD", title: "The Matrix", isFavorite: false},
  //   { id: 3, type: "CD", title: "Thriller - Michael Jackson", isFavorite: false}
  // ]);       

  const [cart, setCart] = useState([]);

  // const [message, setMessage] = useState('');


  // const addToCart = (item) => {
  //   setCart([...cart, item]);
  //   console.log(`Added ${item.title} to cart`)
  // }

  const addToCart = (mediaItem) => {
    setCart([...cart, mediaItem]);
    console.log(`Added ${mediaItem.title} to Cart`) //change console.log to setMessage
  };

  const removeFromCart = (mediaItemToRemove) => {       //!!!-Original-!!!
    setCart(cart.filter(item => item !== mediaItemToRemove));
    console.log(`Removed ${mediaItemToRemove.title} from Cart`)
  };



  // const removeFromCart = (item) => {        //!!!-Added in Demo-!!!
  //   setCart(cart.filter(cartItem => cartItem.id != item.id));
  //   setMessage(`Removed ${item.title} from Cart.`);
  // }




  const [fav, setFav] = useState([]);       //!!!-Original-!!!

  const toggleFav = (mediaItem) => {
    if(fav.includes(mediaItem)) {
      setFav(fav.filter(item => item !== mediaItem))
    }
    else {
      setFav([...fav, mediaItem])
    }
  };


  //!!!-Added in Demo-!!!
  // const toggleFavorite = (item) => {
  //   const updatedItems = mediaItems.map( mediaItem => 
  //     mediaItem.id === item.id ? {...mediaItem, isFavorite: !mediaItem.isFavorite} : mediaItem
  //     );
  //   setMediaItems(updatedItems);
  // }
  

  return (
    // <Router>
      <div className="App">
        {/* <nav>
          <Link to='/'>Home</Link>
          <Link to='/vhs'>VHS</Link>
          <Link to='/dvd'>DVD</Link>
          <Link to='/cd'>CD</Link>
        </nav> */}
        {/* !!!-Added in Demo^-!!! */}
        {/* {message && <div>{message}</div>}
      <h1>Media Store</h1>
      <Routes>
        <Route path='/' element={<MediaList mediaItems={mediaItems} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite}/>} exact/>
        <Route path='/vhs' element={<MediaList mediaItems={mediaItems.filter=(item => item.type === 'VHS')} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite}/>} />
        <Route path='/dvd' element={<MediaList mediaItems={mediaItems.filter=(item => item.type === 'DVD')} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite}/>} />
        <Route path='/cd' element={<MediaList mediaItems={mediaItems.filter=(item => item.type === 'CD')} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite}/>} /> */}
        {/* !!!-Added in Demo^-!!! */}

      {/* </Routes> */}
       <MediaList mediaItems={mediaItems} addToCart={addToCart} removeFromCart={removeFromCart} toggleFav={toggleFav}/> 
       {/* !!!-Original ^-!!! */}
        
      </div>
    // </Router>
  );
};

export default App;
