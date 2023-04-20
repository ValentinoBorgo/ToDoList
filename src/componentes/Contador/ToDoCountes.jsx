import React from "react";
import './ToDoCounter.css';


export function ToDoCount({totalToDos, completedToDos, cargando}){
    return(
        <h2 className={`titulo ${cargando && 'titulo--cargando'}`}
        >Has completado {completedToDos} de {totalToDos} TODOs</h2>
    )
};