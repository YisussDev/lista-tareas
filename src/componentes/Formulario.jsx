import React, { useState } from "react";
import '../estilos/Formulario.css'
import { v4 as uuidv4 } from 'uuid';


export default function FormularioTexto (props){

    const [input, setInput]=useState ('');

    const capturarTexto=(evento)=>{
       setInput(evento.target.value);
    }

    const manejarEnvio=(e)=>{
        e.preventDefault();

        const tareaNueva = 
        {   
            key: uuidv4(),
            id:uuidv4(),
            texto:input
        }
        document.getElementById("entrada").value = null;
        props.onSubmit(tareaNueva);
        setInput('')
    }


    return (
    
        <form className="formulario-contenedor" onSubmit={manejarEnvio}>
            <input autoComplete="off" type='text' id="entrada" className="input-formulario" placeholder="Escribe un texto" onChange={capturarTexto} />
            <button>Agregar Tarea</button>
        </form>

    )
}