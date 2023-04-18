import React from "react";

import { Modal } from "./Modal";
import { ToDoContext } from "./ToDoContext";
import { ToDoCount } from './componentes/Contador/ToDoCountes';
import { ToDoCBuscador } from './componentes/Buscador/ToDoBuscador';
import { ToDoLista } from './componentes/Lista/ToDoLista';
import { ToDoItem } from './componentes/Item/ToDoItem';
import { CreateToDoButton } from './componentes/Button/CreateToDoButton';
import { ToDoForm } from "./ToDoForm";

export function AppUi() {


    const { error, cargando, buscardorCaracToDo, completeToDo, eliminarToDo, modalAbierto, cambiarModal } = React.useContext(ToDoContext);


    return (
        // React.Fragment.
        <>
            <ToDoCount />

            <ToDoCBuscador />

            <ToDoLista>
                {/* ESTADOS */}
                {error && <p>Error, no se cargo la pagina</p>}
                {cargando && <p>Cargando...</p>}
                {(!cargando && !buscardorCaracToDo.length) && <p></p>}

                {/* Aca mapeo los datos del array que va buscando el cliente, no todos los ToDos */}
                {buscardorCaracToDo.map(todo => (
                    <ToDoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeToDo(todo.text)}
                        onDelete={() => eliminarToDo(todo.text)} />
                ))}
            </ToDoLista>

            {/* Si el modal esta abierto(true), renderiza el modal */}
            {modalAbierto && (
                <Modal>
                    <ToDoForm/>
                </Modal>
            )}

            <CreateToDoButton
            cambiarModal={cambiarModal}
            />

        </>
    )
};