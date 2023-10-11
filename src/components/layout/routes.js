
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Notfound from '../pages/Notfound.jsx'
import Home from '../pages/Home';
import Asociados from '../pages/asociados';
import Register from '../pages/Registro';
import Login from '../pages/Login';
import Productos from '../pages/productos';
import Mascotas from '../pages/mascotas';
import Contactos from '../pages/contactos';
import RegisterPets from '../pages/registerPets';
import React from 'react';
import AdminRegister from '../pages/adminRegister/AdminRegister.jsx';
import EditRegisterUsers from '../pages/EditRegisterUsers/index.jsx';
import EditRegisterPets from '../pages/EditRegisterPets/index.jsx';


export default function Rutas () {

    return(
        <div >
             <BrowserRouter> 
             <Routes>
                    <Route exact path="/" element={<Home />} />
                       <Route exact path="/Asociados" element={<Asociados />} />     
                       <Route exact path="/Login" element={<Login />}  />                       
                       <Route exact path="/Registro" element={<Register />} /> 
                       <Route exact path="/productos" element={<Productos />} />
                       <Route exact path="/mascotas" element={<Mascotas />} />
                       <Route exact path="/contactos" element={<Contactos />} />
                       <Route exact path="/registerPets" element={<RegisterPets />} />
                       <Route exact path="/adminRegister" element={<AdminRegister />} />
                       <Route exact path="/EditRegisterUsers/:id" element={<EditRegisterUsers />} />
                       <Route exact path="/EditRegisterPets/:id" element={<EditRegisterPets />} />
                       <Route path="*" element={<Notfound />} /> 
             </Routes>                     
                       
                                                
        </BrowserRouter>        
        </div>
    )
}