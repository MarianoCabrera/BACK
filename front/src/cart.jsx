import React, { useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);


  
  // Función para agregar un producto al carrito
  // const addToCart = (producto) => {
  //setCartItems([...cartItems, producto]);
  // };
  // Función para eliminar un producto del carrito





  const removeFromCart = (producto) => {
    const updatedCart = cartItems.filter((item) => item.ID !== producto.ID);
    setCartItems(updatedCart);
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>

      <ul>
        {cartItems.map((item) => {
          const itemCount = cartItems.filter((i) => i.ID === item.ID).length;
          return (
            <li key={item.ID}>
              {item.NombreProducto} - Cantidad: {itemCount}

            </li>
          );
        })}
      </ul>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
}