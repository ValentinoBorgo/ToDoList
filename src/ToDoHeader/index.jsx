import React from "react";



export function ToDoHeader({ children, cargando }) {

    return (
        <header>
            {/* 
            // Nos ayuda a que el clone entienda todos los childrens que le mandemos,en este caso como un array.
            // Vamos a clonar una prop(cargando), creamos un elemento a partir de otro.*/}

            {React.Children.toArray(children).map(child => React.cloneElement(child, { cargando }))}
        </header>
    )
};