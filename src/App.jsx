import React from 'react'
import { AppUi } from './AppUi';
import { ToDoProvider } from './ToDoContext';


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

  return (
    <ToDoProvider>
      <AppUi/>
    </ToDoProvider>
  )
}


