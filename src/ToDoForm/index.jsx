import React, { useState } from "react";
import './ToDoForm.css';

export function ToDoForm({añadirToDo, cambiarModal}){
    
    const [nuevoToDoValor, cambiarToDoValor] = useState('');


    const escucharTextArea = (event) =>{
        cambiarToDoValor(event.target.value);
    }


    const cancelar = () =>{
        cambiarModal(false);
    }

    const enviarForm = (event) =>{
        // No se recarga la pagina al enviar el form
        event.preventDefault();
        añadirToDo(nuevoToDoValor);
        cambiarModal(false);
    }

    return(
        <form onSubmit={enviarForm}>
            <label>Escribe un nuevo TODO : </label>
            <textarea
            value={nuevoToDoValor}
            onChange={escucharTextArea}
            placeholder="Ingresar el proximo ToDo"
            />
            <div className="formBtnContainer">
                <button
                className="formBtnContainer-btn-cancel"
                type="button" 
                onClick={cancelar}>
                    Cancelar
                </button>
                <button
                className="formBtnContainer-btn-añadir"
                type="submit">
                    Añadir
                </button>
            </div>
        </form>
    )
}