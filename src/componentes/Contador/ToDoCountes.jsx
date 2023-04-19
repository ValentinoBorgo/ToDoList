import React from "react";
import './ToDoCounter.css';


export function ToDoCount({totalToDos, completedToDos}){
    return(
        <h2 className="titulo">{`Has completado ${completedToDos} de ${totalToDos} TODOs`}</h2>
    )
};