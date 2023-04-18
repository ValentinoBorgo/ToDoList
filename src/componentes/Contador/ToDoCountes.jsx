import React from "react";
import './ToDoCounter.css';
import { ToDoContext } from "../../ToDoContext";

export function ToDoCount(){

    // Traer los estados desde el ToDoContext
    const {completedToDos, totalToDos} = React.useContext(ToDoContext);

    return(
        <h2 className="titulo">{`Has completado ${completedToDos} de ${totalToDos}`}</h2>
    )
};