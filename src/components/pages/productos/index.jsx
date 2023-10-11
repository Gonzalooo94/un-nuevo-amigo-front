import React from "react"
import clsx from "clsx"
import './index.css';
import bar from '../../layout/bar.js'
import getProductService from "../../../services/productService"
import p1 from '../../imagenes/servers/stock.jpg'


export default function Productos() {

    const b = bar()

    const productos = getProductService()

    return ( 
    
        

<div className="col-sm row col-12 " >
         
         <div className="col-lg-3 col-3 container-sm container-xl ">{b}</div>
         <div className="container col-9 row ">
            <h2 className="container mt-3">Nuestros Productos</h2>

            
    
    {productos.map(productos => (
    <div className="col-3  container  " key={productos._id}>
        <div className="card row rounded-3 container border-2 bg-light ">
        <img src={p1} className="col-md-3 mt-lg-3 m-1 card-img-top row rounded-3 container container-xl bg-light" alt="..." />
        
        
            <div className="card-title h5 mt-3">{productos.nombre} </div>
            <div className="card-body">
            <p>Especie : {productos.especie}</p> 
                    <p>Formato : {productos.cc}</p>                                      
                    <p> 
                    estado : <span className={clsx(productos.done ? 'bg-success' : 'bg-danger',
                     'text-sm rounded-pill badge ml-2 ')}>{productos.done ? 'Hay stock' : 'No hay stock'}</span> </p>                 </div>                                  
            
        </div>
    </div>
    ))}
    </div>     
    
        
    
 </div>
        )       
      
    
}