import React from "react";
import './ToDoBuscador.css'
import { useState } from "react";
import { ToDoContext } from "../../ToDoContext";

export function ToDoCBuscador(){

    const {buscarToDo, setiarToDo} = React.useContext(ToDoContext);

    const [] = useState('');

    const cambiarToDo = (event) =>{
        setiarToDo(event.target.value);
    }

    // const escucharValor = (event) =>{
    //     // Me salen todas las letras una atras de la otra, serian todos los caracteres
    //     console.log(event.target.value);
    // }

    return(
        <input className="buscador" 
        placeholder='Ingresar tu proximo ToDo'
        value={buscarToDo}
        // Este evento escucha cada ves que cambia el texto, y te lo devuelve
        onChange={cambiarToDo}
        />
    )
};