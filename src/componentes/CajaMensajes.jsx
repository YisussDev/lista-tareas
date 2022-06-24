import React from "react";
import '../estilos/CajaMensaje.css'



export default function CajaMensaje (props){
    
    return (
        <div className="contenedor-tarea" onClick={props.click} id={props.id}>
            {props.texto}
            <div onClick={props.click}>
                <button id={props.id} onClick={props.editar} className='bt'>✏</button>
                <button id={props.id} onClick={props.eliminar} className='bt'>❌</button>
            </div>
            
        </div>
    )
}