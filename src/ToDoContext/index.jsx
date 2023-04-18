import React from "react";
import { useLocal } from "./useLocal";
import { useState } from 'react';

//Permite crear contextos que son herramientas que nos dan las PROVIDERS Y CONSUMERS para compartir el ESTADO por
//  todos los componentes de nuetra app. LOS PROVIDERS PUEDEN SER VISTOS POR TODOS

const ToDoContext = React.createContext()


function ToDoProvider(props) {

    const {
        Item: todos,
        guardarItem: guardarToDos,
        cargando,
        error,
    } = useLocal('TODOS_V1', []);


    // PROPS del buscador
    const [buscarToDo, setiarToDo] = useState('');


    // Creo un ESTADO para mi MODAL.
    const [modalAbierto, cambiarModal] = useState(false);

    let estadoModal = () =>{
        modalAbierto;
    }


    // Dentro de mi array de ToDos mi todo.complited es verdadero ?.
    const completedToDos = todos.filter(todo => !!todo.completed).length;
    const totalToDos = todos.length;

    // Array que va a contener los ToDos buscados
    let buscardorCaracToDo = [];

    // Esta validacion detecta que en el input no se ingrese nada,
    //  y si se ingresa se va a buscar si el ToDo se encuentra en la lista.
    if (buscarToDo.length <= 0) {
        buscardorCaracToDo = todos;
    } else {
        buscardorCaracToDo = todos.filter(todo => {
            const todoTexto = todo.text.toLowerCase();
            const buscarTexto = buscarToDo.toLowerCase();
            return todoTexto.includes(buscarTexto);
        });
    }


    // Metodo para marcar como completado el ToDo
    const completeToDo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        // inyectamos todos los todos, a la variable newToDos
        const newToDos = [...todos];
        newToDos[todoIndex].completed = !newToDos[todoIndex].completed;
        guardarToDos(newToDos);
    }


    // funcion para añadir un todo
    const añadirToDo = (text) => {
        const newToDos = [...todos];
        newToDos.push({
            completed : false,
            text,
        });
        guardarToDos(newToDos);
    }



    // Metodo para marcar como eliminado el ToDo.
    const eliminarToDo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        // inyectamos todos los todos, a la variable newToDos
        const newToDos = [...todos];
        // Desde la posicion todoIndex cortar solo una posicion hacia adelante
        newToDos.splice(todoIndex, 1);
        guardarToDos(newToDos);
    }

    // console.log('Render antes del userEffect');

    // useEffect = es un hock donde se ejecuta el render al final de todo el algoritmo, el segundo argumento [], indica
    // que el useEffect se ejecuta solo una vez, osea la primera ves que se renderiza nuestra app. En el caso de totaltodos
    // el use effect se ejecuta cuando la const cambia su valor(agregar o borrar un ToDo).
    // React.useEffect(()=>{
    //   console.log('use efect')
    // }, [totalToDos]);


    // console.log('Render luego del userEffect');

    return (
        // El PROVIDER contiene todo el estado que vamos a compartir de la app.
        <ToDoContext.Provider value={{
            cargando,
            error,
            completedToDos,
            totalToDos,
            buscarToDo,
            setiarToDo,
            buscardorCaracToDo,
            completeToDo,
            añadirToDo,
            eliminarToDo,
            modalAbierto,
            cambiarModal,
            estadoModal,
        }}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export {ToDoContext, ToDoProvider};