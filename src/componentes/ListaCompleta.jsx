import React, { useEffect, useState } from "react";
import '../estilos/ListaCompleta.css'
import FormularioTexto from "./Formulario";
import CajaMensaje from './CajaMensajes';
import '../estilos/Formulario.css'

export default function ListaTareas (){
    useEffect(()=>
        {const inicio = JSON.stringify([])
            localStorage.setItem('Data', localStorage.getItem('Data')||inicio)
        
            let tareasL = JSON.parse(localStorage.getItem('Data'))
        
            setTareas(tareasL)},[]
    )
    const guardarDatos = () =>{
        localStorage.setItem('Data', JSON.stringify(tareas))
    }
    setInterval(()=>guardarDatos(), 500)

    const [tareas, setTareas]=useState([]);
    const [ea, setEA]=useState(false);
    const [input, setInput]=useState ('');
    const [indice, setIndice]=useState ('');

    const agregarTarea= tarea =>{
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
            localStorage.setItem('Data', JSON.stringify(tareas))
          }
    }
    const eliminarTarea = (e) => {
        console.log(e.target.id)
        let newA = tareas.filter(fil => fil.id !== e.target.id)
        setTareas(newA)
        localStorage.setItem('Data', JSON.stringify(tareas))
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
        localStorage.setItem('Data', JSON.stringify(tareas))
    }
    
    const click = (e) => {
        let selector = document.getElementById(`${e.target.id}`)
        if(selector.className === 'contenedor-tarea'){
            selector.className='contenedor-tarea-c'

            localStorage.setItem('Data', JSON.stringify(tareas))
        }else{
            selector.className='contenedor-tarea'
            localStorage.setItem('Data', JSON.stringify(tareas))
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