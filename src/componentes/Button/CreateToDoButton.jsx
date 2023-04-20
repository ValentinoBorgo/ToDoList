import React, { useState } from "react";
import './CreateToDoButton.css';

export function CreateToDoButton(props) {

    const onClickBtn = () =>{
        // funcion estado modal devuelva el estado anterior, y ejecuta el contrario
        props.cambiarModal(estadoModal => !estadoModal)
    }

    return (
        <button 
        className={`crearBoton ${props.cargando && 'crearBoton--cargando'}`}
        onClick={onClickBtn}
        >
        +
        </button>
    )
};