import React from "react";
import { useState } from "react";

// CREAMOS UN CUSTOM REACT HOOK PARA PODER MODULARIZAR MAS NUESTRA APP.
export function useLocal(itemNombre, valorInicial) {
  
    const [cargando, cambiarCarga] = useState(true);
    const [error, actualizarError] = useState(false);
    const [Item, setItem] = useState(valorInicial);
  
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemNombre);
          let parsedItem;
  
          // Si no hay nada en el localstorage tiene que crear su primer ToDo, y sino parsiame los ToDos que ya esten a objetos
          // para poder pasarselos a las props
          if (!localStorageItem) {
            localStorage.setItem(itemNombre, JSON.stringify(valorInicial));
            parsedItem = valorInicial;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
  
          setItem(parsedItem);
          cambiarCarga(false);
        } catch (error) {
          actualizarError(error);
        }
      }, 1000);
    })
  
  
  
    // Persistencia de datos mediante localstorage.
    const guardarItem = (newItem) => {
      try {
        const stringified = JSON.stringify(newItem);
        localStorage.setItem(itemNombre, stringified);
        setItem(newItem);
      } catch (error) {
        actualizarError(error);
      }
    }
  
    return {
      Item,
      guardarItem,
      cargando,
      error,
    };
  }