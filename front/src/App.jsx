import React, { useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import Cart from './cart';
import Productos from './producto';
import { Formulario } from './Formulario';




function App() {

  const [user, setUser] = useState([])
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (producto) => {

    //if (!cartItems.find((item) => item.ID === producto.ID)) {
    setCartItems([...cartItems, producto]);
    // }
  };

  return (
    <>
      <Formulario setUser={setUser} />
      <Productos productos={[]} addToCart={addToCart} />
      <HomePage addToCart={addToCart} />
      <Cart cartItems={cartItems} />



    </>
  );
}
export default App;