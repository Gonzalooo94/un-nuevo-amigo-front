import React from "react"
import clsx from "clsx"
import a1 from '../../imagenes/servers/asociado.jpg'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import bar from '../../layout/bar.js'
import { useEffect, useState } from 'react';

 

export default function Asociados() {

    const b = bar()
   

    const url ='https://nuevo-amigo-server-production.up.railway.app/users'
    const [ todos, setTodos] = useState()
  const fetchApi = async () => { 
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
    
  }
  useEffect(() => {
    fetchApi()
  },[])

  const navegate = useNavigate()    // direccionar paginas
    const handleClick = (id) => {
        navegate("/EditRegisterUsers/" + id);
    
        
    }

    const handleDelete = async (id) => {
      axios.delete(`https://nuevo-amigo-server-production.up.railway.app/users/${id}`)
        .then(() => {
          axios.get('https://nuevo-amigo-server-production.up.railway.app/users')
            .then(res => {
              setTodos(res.data)
            })
        })
    
      }
    
    return (      


<div className="col-sm row col-12 " >
         
         <div className="col-lg-3 col-3 ">{b}</div>
         <div className="container col-9 col-sm  row">
            <h4 className="m-lg-3 container">Nuestros Asociados</h4>
    
    {!todos ? 'Cargando...' :
    todos.map(todos => (
    <div className="col-md-4 mt-3 container" key={todos._id}>
        <div className="card  rounded-3 container border-2 border-success">
        <img src={a1} className="col-md-4 mt-lg-3 m-1 card-img-top row rounded-3 border-success container container-xl bg-light" alt="..." />
            <div className=" card-title h5 mt-3">{todos.name} {todos.lastname}</div>
            <div className="card-body">
            <p>Rut : {todos.rut} </p>
                    <p> Dirección: {todos.addres}</p>
                    <p>correo: {todos.email}</p>
                    <p>numero de contacto: {todos.contactnumber}</p>
                    <p > 
                    estado:  </p>
                    <span className={clsx(todos.estado ? 'bg-success' : 'bg-danger',
                     'text-sm rounded-pill badge ml-2 ')}>{todos.estado ? 'adoptando' : 'no adoptando'}</span>
                </div>  
                <div className="row">
                <button type="Button" className="btn-primary col-5  mb-3 mt-3 rounded-3 bg-info m-3" onClick={() => handleClick (todos._id) }>✏️</button>
                <button type="Button" className="btn col-5  mb-3 mt-3  rounded-3 bg-danger" onClick={() => handleDelete(todos._id)}>🗑️</button></div>                                   
            
        </div>
    </div>
    ))}
    </div>     
    
        
    
 </div>
        )     
}