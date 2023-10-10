import './App.css';
import * as API from './servicios/servicios';
import { useEffect, useState } from 'react';

import React from 'react';

export default function Productos({ productos, addToCart }) {
  let carrito = []
  // Función para agregar un producto al carrito
  const handleAddToCart = (producto) => {
     addToCart(producto)
  };

  return (
    <div className="container">
      <h1>Lista de Productos</h1>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4" key={producto.ID}>
            <div className="card mb-4">
              <img src={producto.ImagenURL} className="card-img-top" alt={producto.NombreProducto} />
              <div className="card-body">
                <h5 className="card-title">{producto.NombreProducto}</h5>
                <p className="card-text">{producto.DescripcionProducto}</p>
                <p className="card-text">Precio: ${producto.Precio}</p>
                <p className="card-text">Cantidad en Stock: {producto.CantidadStock}</p>
                <button onClick={() => handleAddToCart(producto)}>Agregar al Carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}