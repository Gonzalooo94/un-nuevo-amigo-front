import './estilo.css'
import logo from './logo.png'
import sale from '../imagenes/logos/sale.png'
import add from '../imagenes/logos/add.png'
import user from '../imagenes/logos/user.png'
import comun from '../imagenes/logos/comun.png'
export  function Bar () {

    return (
         
        
           
<div >
        <div class="row flex-nowrap border">
            <div class=" bg-light nav-tabs border">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-5 pt-2 text-white min-vh-100 ">
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none  ">
                        <span class="fs-5 d-none d-sm-inline bar ">Menu</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start container" id="menu">
                        <li class="nav-item ">
                            <a href="/adminRegister" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-house bar"></i> <span class="ms-1 d-none d-sm-inline bar nav-link "><img src={user} alt="" width="35" height="35" />   mi cuenta</span>
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a href="/registerPets" class="nav-link align-middle px-0">
                                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline bar nav-link ">
                                <img src={add} alt="" width="35" height="35" />   añadir mascota</span>
                            </a>
                        </li>
                       <li>
                            <a  href="/mascotas" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline bar nav-link "><img src={logo} alt="" width="35" height="35" />    Mascotas</span></a>
                        </li>
                        <li>
                            <a  href="/asociados" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline bar nav-link "><img src={comun} alt="" width="35" height="35" />   Asociados</span></a>
                        </li>
                       
                        
                        
                        <li>
                            <a href="/productos" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline bar nav-link "><img src={sale} alt="" width="35" height="35" /> Productos</span> </a>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            
            </div>
            
        </div>         
              
              
        
    )
}