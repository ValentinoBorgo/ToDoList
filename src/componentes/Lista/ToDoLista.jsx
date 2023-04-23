import React from "react";
import './ToDoLista.css';

export function ToDoLista(props){

    return(
        <section className={`sec ${!props.sincronizacion && 'sec--carga'}`}>
            <ul>
                {/* Al mandar un todoItem estas mandando datos(que seria un children) */}
            {props.children}
            </ul>
        </section>
    )
};
