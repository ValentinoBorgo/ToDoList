import React, { useState } from "react";

// High Order Component HOC, devuelve un componente.

export function useStorageListener(sincronisar) {

        const [storageCmbio, setStorageCmbio] = useState(false);

        // Este cambio no se muestra en la pestaña actual, sino que lo hace en una en paralelo.
        window.addEventListener('storage', (cambio) =>{
            if(cambio.key === 'TODOS_V1'){
                // Ponerle un toastify
                console.log('Hubo cambios en TODOS_V1');
                setStorageCmbio(true);
                
            }   
        })  

        const cambiarVista = () =>{
            // Para esto se usan las HOC ya que puedo intercepter la prop sincronizar que contiene una funcion.
            sincronisar();
            setStorageCmbio(false);
        }

        return {
            mostrar : storageCmbio, 
            cambiarVista,
        }
}