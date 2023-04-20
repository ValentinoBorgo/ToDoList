import React from "react";
import './NoEncontrado.css';

export function NoEncontrado(props){
    return(
        <div>
            <h1>No se encuentran resultados para {props.buscarToDo}!</h1>
            <p>Intente Nuevamente...</p>
        </div>
    )
}