import React from "react";
import './ToDoItem.css';
import { FaCheckSquare } from 'react-icons/fa';
import { FaExpandArrowsAlt } from 'react-icons/fa';

export function ToDoItem(props){
    return(
        <li className="Item">
            {/* si el props.completed es true entonces se le agrega la clase iconcheck--active */}
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}><FaCheckSquare/></span>
            {/* si props.completed es true agregar la clase item-p-complete */}
            <p className={`Item-p ${props.completed && 'Item-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete" onClick={props.onDelete}><FaExpandArrowsAlt/></span>
        </li>
    )
};  