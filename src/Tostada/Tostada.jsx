import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

export function Tostada(props) {

    const alerta = () => {
        toast.success('🦄 Carga y actualización exitosa!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    if (!props.sincronizacion || props.cargando) {
        return (
            <ToastContainer>
                {alerta()}
            </ToastContainer>
        )
    } else {
        return null;
    }
}