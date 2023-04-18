import React from 'react'
import ReactDOM from 'react-dom';
import './Modal.css';


// Los portales nos permiten teletransportar componentes a otro nodo de HTML
// y seguir comunicándose con otros componentes como si estuviera en el mismo nodo.
export function Modal({children}){
    return ReactDOM.createPortal(
        <div className='Modal'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}