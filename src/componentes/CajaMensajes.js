import React from "react";
import '../estilos/CajaMensaje.css'


export default function CajaMensaje ({id, key, texto}){
    return (
        <div className="contenedor-tarea">
            <p>{texto}</p>
        </div>
    )
}