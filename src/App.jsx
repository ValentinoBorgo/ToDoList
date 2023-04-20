import React, { useState } from 'react'



import { useTodos } from './usarTodos';
import { Modal } from "./Modal";
import { ToDoLista } from './componentes/Lista/ToDoLista';
import { ToDoItem } from './componentes/Item/ToDoItem';
import { CreateToDoButton } from './componentes/Button/CreateToDoButton';
import { ToDoCBuscador } from "./componentes/Buscador/ToDoBuscador";
import { ToDoCount } from "./componentes/Contador/ToDoCountes";
import { ToDoForm } from "./ToDoForm";
import { ToDoHeader } from "./ToDoHeader";
import { Carga } from './componentes/Carga';
import { NoEncontrado } from './componentes/NoEncontrado/NoEncontrado';


// import './App.css'

// const defaultTodos = [
//   {
//     text : 'Curso de asincronia',
//     completed : false
//   },
//   {
//     text : 'Tomar curso react',
//     completed : false
//   },
//   {
//     text : 'Curso de php',
//     completed : true
//   },
//   {
//     text : 'Curso de Springboot',
//     completed : false
//   },
//   {
//     text : 'Curso de PHP avanzado',
//     completed : true
//   }

// ];

export function App() {

    const { error,
        cargando,
        buscardorCaracToDo,
        completeToDo,
        eliminarToDo,
        modalAbierto,
        cambiarModal,
        completedToDos,
        totalToDos,
        buscarToDo,
        setiarToDo,
        añadirToDo, } = useTodos();


    return (
        // React.Fragment.
        <>
            <ToDoHeader cargando={cargando}>
                <ToDoCount
                    totalToDos={totalToDos}
                    completedToDos={completedToDos}
                />

                <ToDoCBuscador
                    buscarToDo={buscarToDo}
                    setiarToDo={setiarToDo}
                />
            </ToDoHeader>


            <ToDoLista>
                {/* ESTADOS */}
                {error && <p>Error, no se cargo la pagina</p>}
                {cargando && <Carga/>}
                {(!cargando && !buscardorCaracToDo.length) && <NoEncontrado buscarToDo={buscarToDo}/>}

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
                    <ToDoForm
                        añadirToDo={añadirToDo}
                        cambiarModal={cambiarModal}
                    />
                </Modal>
            )}

            <CreateToDoButton
                cambiarModal={cambiarModal}
                cargando={cargando}
            />

        </>
    )
}




