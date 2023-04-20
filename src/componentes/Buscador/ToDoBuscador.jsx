import React from "react";
import './ToDoBuscador.css'
import { useState } from "react";

export function ToDoCBuscador({buscarToDo, setiarToDo, cargando}){

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
        placeholder='Buscar un TODO'
        value={buscarToDo}
        // Este evento escucha cada ves que cambia el texto, y te lo devuelve
        onChange={cambiarToDo}
        //Esta desabilitado mientras la carga sea true.
        disabled={cargando}
        />
    )
};