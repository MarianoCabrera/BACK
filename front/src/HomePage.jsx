import './App.css';
import Productos from './producto';
import * as API from './servicios/servicios';
import { useEffect, useState, } from 'react';
import React from "react";
import { Link } from "react-router-dom";


export default function HomePage({addToCart}) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    API.getProductos().then(setProductos)
  }, [])

  return (
    <>
      <header>
        <button className="btn btn-secondary" type="button">Carrito</button>
      </header>
      <div>
        <Productos productos={productos} addToCart={addToCart} />
      </div>
    </>
  );
}