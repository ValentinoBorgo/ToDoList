import React, { useReducer } from "react";
import { useState } from "react";

// CREAMOS UN CUSTOM REACT HOOK PARA PODER MODULARIZAR MAS NUESTRA APP, funciones que te permiten “enganchar” 
// el estado de React y el ciclo de vida desde componentes de función.

export function useLocal(itemNombre, valorInicial) {

  const initialState = {
    cargando: true,
    error: false,
    Item: valorInicial,
    sincronizacion: true,
  }

  const actionTypes = {
    error : 'ERROR',
    efectiva : 'EXITO',
    itemGuardado : 'GUARDAR',
    sincroCarga : 'SINCROCARGA',
  }

  const reducerObject = (state, payload) =>({
    [actionTypes.error] : {
      ...state,
      error : true,
    },
    [actionTypes.efectiva] : {
      ...state,
      error : false,
      cargando : false,
      sincronizacion : true,
      Item : payload,
    },
    [actionTypes.sincroCarga] : {
      ...state,
      cargando : true,
      sincronizacion : false,
    },
    [actionTypes.itemGuardado] : {
      ...state,
      Item : payload,
    }
  })

  const reducer = (state, action) =>{
    return reducerObject(state,action.payload)[action.type] || state;
  }

  // REDUCER.
  const [state, dispatch] = useReducer(reducer, initialState);

  const  {
    cargando,
    error,
    Item,
    sincronizacion, } = state;


    // ACTION CREATORS : 

    const actualizarError = (error) =>{
      dispatch({
        type : actionTypes.error,
        payload : error,
      })
    }

    const actualizacionEfectiva = (parsedItem) =>{
      dispatch({
        type : actionTypes.efectiva,
        payload : parsedItem,
      })
    }

    const setiarItem = (newItem) =>{
      dispatch({
        type : actionTypes.itemGuardado,
        payload : newItem,
      })
    }

    const sincroFinal = () =>{
      dispatch({
        type : actionTypes.sincroCarga,
      })
    }

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

        actualizacionEfectiva(parsedItem);

      } catch (error) {
        actualizarError(error);
      }
    }, 2000);
  }, [sincronizacion])



  // Persistencia de datos mediante localstorage.
  const guardarItem = (newItem) => {
    try {
      const stringified = JSON.stringify(newItem);
      localStorage.setItem(itemNombre, stringified);
      setiarItem(newItem);
    } catch (error) {
      actualizarError(error);
    }
  }

  // Cuando se realiza la sincronizacion el estado de carga va a ser verdadero y la sincro va a ser falsa
  const realizarSincro = () => {
    sincroFinal();  
  }


  return {
    Item,
    guardarItem,
    cargando,
    error,
    realizarSincro,
    sincronizacion,
  };
}