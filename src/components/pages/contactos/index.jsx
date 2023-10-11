
import rs from "../../layout/rs"
export default function Contactos() {

    const Rs = rs()
    return (        
        <div className=" container col-12" >           

            <div className="mt-5 container" ><h1>Contactanos</h1></div>


            <div className="mt-5">                 

                      <div><blockquote className="card-body border rounded-3" >
                          Razon de nuestra causa :</blockquote></div>   
                         <div> <td className="container  card-body border rounded-3 ">En el refugio “Un nuevo mejor amigo te espera” se estiman unos 300.000
              animales abandonados y rescatados que necesitan una familia que los acojan y le brinden 
              todo el cuidado y amor que ellos necesita, pero el proceso de adopción es muy engorroso.
              
              direccion:xxxxxxxxxx
              
              numero de contacto: xxxxxxxx
              
              correo electronico: xxxxxx@xxx.com</td>  
              
              </div>              
                      </div>
                      <div className="mt-5">{Rs}</div>                    
        </div>   
            
        )          
    
}

