import './estilo.css';
import {  Icon } from "semantic-ui-react"
import Home from "../imagenes/logos/home.png"
import { useAuth } from '../context/AuthContext';


export function Nav () {
    const { token, sessionClear, } = useAuth()
    
   
    return(

    <div >
      <nav class="navbar navbar-dark bg-dark nav flex-nowrap rounded-3"  >
        
        {!token ? (
          <>
          
        <td className='col-4' ><a href="/" class="navbar-brand" ><img src={Home} alt="" width="35" height="35" /></a></td>
        <td className='col-4' ><h4>Un amigo en tu camino</h4></td>
            <td><a href="/Login" class="nav-link active nav" aria-current="page"><Icon name="check"/>Login</a></td>         
            <td><a href="/Registro" class="nav-link active nav" aria-current="page"><Icon name="user"/>Registro</a></td> 
            <td><a href="/contactos" class="nav-link active nav" aria-current="page"><Icon name="send"/>Contacto</a></td>    
          </>
        ) : (
          <div className=' container '>
            <td  className='col-3'><img src={Home} alt="" width="35" height="35" /></td>
          <div   className='col-7'><h4>Un amigo en tu camino</h4></div>
          <div className='col-2'><a href="/" class="nav-link active nav" onClick={sessionClear} ><Icon name="power off"/>Cerrar cesión</a></div>   
          </div>
        )}
        
              
        <td width="5%">&nbsp;</td>
      </nav>         
     

    </div>
    

    )
}

