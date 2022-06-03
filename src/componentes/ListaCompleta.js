import React, { useState } from "react";
import '../estilos/ListaCompleta.css'
import FormularioTexto from "./Formulario";
import CajaMensaje from './CajaMensajes'

export default function ListaTareas (){

    const [tareas, setTareas]=useState([]);

    const agregarTarea= tarea =>{
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
          }
          
    }



    return (
        <div className="lista-completa">
            <FormularioTexto onSubmit={agregarTarea} />

            <div className="contenedor-tareas-nuevas">
                { tareas.map(tarea => 
                <CajaMensaje 
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                />)
                }
            </div>
           
        </div>
        
    )
}