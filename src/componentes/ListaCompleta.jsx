import React, { useState } from "react";
import '../estilos/ListaCompleta.css'
import FormularioTexto from "./Formulario";
import CajaMensaje from './CajaMensajes';
import '../estilos/Formulario.css'

export default function ListaTareas (){

    const [tareas, setTareas]=useState([]);
    const [ea, setEA]=useState(false);
    const [input, setInput]=useState ('');
    const [indice, setIndice]=useState ('');

    const agregarTarea= tarea =>{
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
          }
    }
    const eliminarTarea = (e) => {
        console.log(e.target.id)
        let newA = tareas.filter(fil => fil.id !== e.target.id)
        setTareas(newA)
    }
    const abrirEditor = (e) => {
        tareas.forEach((tar, indice) => {if(tar.id === e.target.id){
            console.log(indice)
            setIndice(indice)
            setInput(tar.texto)
        }}
        )
        
        setEA(true)
    }
    const capturarTexto=(evento)=>{
       setInput(evento.target.value);
    }
    const manejarEdit=(e)=>{
        e.preventDefault();
        tareas[indice].texto = input;
        document.getElementById("entradaE").value = null;
        setInput('')
        setEA(false)
    }
    
    const click = (e) => {
        let selector = document.getElementById(`${e.target.id}`)
        if(selector.className === 'contenedor-tarea'){
            selector.className='contenedor-tarea-c'
        }else{
            selector.className='contenedor-tarea'
        }
    }


    return (
        <div className="lista-completa">
            {ea?
            (
                <form className="formulario-contenedor" onSubmit={manejarEdit}>
                 <input onChange={capturarTexto} value={input} autoComplete="off" type='text' id="entradaE" className="input-formulario2" placeholder="Edita la tarea" />
                 <button>Editar Tarea</button>
                </form>
            )
            :<FormularioTexto onSubmit={agregarTarea} />}
            {
                tareas?(<div className="contenedor-tareas-nuevas">
                { tareas.map(tarea => 
                <CajaMensaje 
                click = {click}
                editar = {abrirEditor}
                eliminar ={eliminarTarea}
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                />)
                }
            </div>):null
            }
           <p>Lista de Tareas 2.0 - Jesus Paguay👽</p>
        </div>
        
    )
}