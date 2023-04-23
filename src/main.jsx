import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'


// function App(props) {
//     return (
//         <h1>{props.saludo} {props.nombre}!!!</h1>
//     )
// };


// function WithWhatever(WrappedComponent) {
//     return function WrappedComponentWithSaludo(saludo){
//         return function ComponenteDeVerdad(props) {
//         return (
//             <>
//                 <WrappedComponent {...props} saludo={saludo} />
//                 <p>Acompañamiento al WrappedComponent</p>
//             </>
//         )
//     }
// }
// }

// const AppWithSaludo = WithWhatever(App)('Heyyy buenos dias ');

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App saludo={'Buenas'} nombre={'Meka'}/>
    // <AppWithSaludo  nombre={'lola'} />
    <App/>
)

