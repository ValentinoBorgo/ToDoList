import React from "react";
import { useStorageListener } from './useStorageListener';
import { FaRedoAlt } from "react-icons/fa";
import './Alerta.css'


export function AlertaCmbio({ sincronisar }) {

    // Llamamos al custom hook para traer las props y funciones.
    const { mostrar, cambiarVista } = useStorageListener(sincronisar);

    if (mostrar) {
        return (
            <div>
                <section className="actualizar">
                    <p className="parra">Hubos cambios!!!</p>
                    <button
                        className="btnActualizar"
                        onClick={() => cambiarVista(false)}
                    ><FaRedoAlt /> Volver a cargar los TODOs</button>
                </section>
            </div>
        )
    } else {
        return null;
    }
}
