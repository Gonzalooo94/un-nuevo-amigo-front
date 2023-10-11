import React from "react"
import clsx from "clsx"
import axios from 'axios'
import {Bar} from '../../layout/bar.js'
import m1 from '../../imagenes/servers/mascotas.jpg'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';




export default function Mascotas() {


    

    const url ='https://nuevo-amigo-server-production.up.railway.app/animals'
    const [ mascota, setTodos] = useState()
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
        navegate("/EditRegisterPets/" + id);
    
        
    }

    const handleDelete = async (id) => {
      axios.delete(`https://nuevo-amigo-server-production.up.railway.app/animals/${id}`)
        .then(() => {
          axios.get('https://nuevo-amigo-server-production.up.railway.app/animals')
            .then(res => {
              setTodos(res.data)
            })
        })
    }

    return (        
    
     <div className="col-sm row col-12 " >
         
             <div className="col-lg-3 col-3 "><Bar/></div>
             <div className=" container col-9 col-sm row m-3">
                <h4 className="container mt-lg-3">Nuestas mascotas</h4>

        
                {!mascota ? 'Cargando...'  :
                mascota.map(mascota => (
        <div className="col-4   container" key={mascota._id}>
            <div className="card row rounded-3 container border-2 border-info ">
            <img src={m1} className="col-md-3 mt-lg-3 m-1 card-img-top row rounded-3 container container-xl bg-light" alt="..." />
                <div className="card-title h5 mt-3">{mascota.name} </div>
                <div className="card-body">
                    <p>Raza : {mascota.breed}</p>
                    <p>Sexo : {mascota.gender} </p>
                    <p> Edad: {mascota.age}</p>
                    <p>Especie: {mascota.type}</p>
                    <p>Porte : {mascota.bearing}</p>
                    <p>Descripción : {mascota.description}</p>
                    <p > 
                    estado: </p> <span className={clsx(mascota.done ? 'bg-success' : 'bg-danger',
                     'text-sm rounded-pill badge ml-2 ')}> {mascota.done ? 'esterilizado' : 'no esterilizado'} </span>
                    </div>                  
                    
                <div className="row">
                <button type="Button" className="btn-primary col-5  mb-3 mt-3 rounded-3 bg-info m-3" onClick={() => handleClick (mascota._id) }>✏️</button>
                <button type="Button" className="btn col-5  mb-3 mt-3  rounded-3 bg-danger" onClick={() => handleDelete(mascota._id)}>🗑️</button></div>                 
                
            </div>
        </div>
        ))}
        </div>            
        
     </div>
        )     
      
    
}