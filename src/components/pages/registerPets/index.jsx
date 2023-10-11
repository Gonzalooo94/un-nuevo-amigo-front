import { useForm } from "react-hook-form";
import {Bar} from "../../layout/bar";
import axios from "axios";


export default function RegisterPets () {

   const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        alert("mascota registrada con exito");

        const response = await axios.post('https://nuevo-amigo-server-production.up.railway.app/animals', data)

console.log(response.data)
    }
    
    return(

        <div className="row col-12 ">
            
            
                <div className="col-lg-3 col-3"><Bar/> </div>
                <div className="col-8  container border-info rounded-3 border-2 border mt-4 mb-4 ">
                <h1 className="m-lg-4">Registro de Mascotas</h1>
                
                    <div className=" col-8 container    ">
                    <div className=" rounded-3  col-7 container ">                        
                    
                    <form action="" name="registerPets"   onSubmit={handleSubmit(onSubmit) }  >
                        
                        <div>Nombre de Mascota</div>
    
    <input placeholder="Monchito" className="form-control mb-1" {...register("name",
     { 
        required:{value:true,message: 'Nombre es requerido'}, 
        maxLength: {value: 20,message: 'No más de 20 carácteres!'} ,
         minLength:{value: 2,message: 'No menos de 2 carácteres!'}})} />
    <span className="text-danger text-small d-block mb-2">
        {errors?.nombre?.message}
    </span>
    
    <div>Raza</div>
    <input placeholder="Labrador" className="form-control mb-1" {...register("breed",
     { 
        required:{value:true,message: 'Raza es requerido'}, 
        pattern: {value:/^[A-Za-z]+$/i , message: 'No agregar numeros o signos' },
        maxLength: {value: 10,message: 'No más de 10 carácteres!'} ,
         minLength:{value: 3,message: 'No menos de 3 carácteres!'}})} />
    <span className="text-danger text-small d-block mb-2">
        {errors?.raza?.message}
    </span>
    
    <div>Sexo</div>
    <input  value="macho" className="col-2" type="radio"{...register("gender",
     { 
        required:{value:true,message: 'Sexo es requerido'}, 
        })} /> macho
    
    <input  value="hembra" className="col-2" type="radio"{...register("gender",
     { 
        required:{value:true,message: 'Sexo es requerido'}, 
        })} /> hembra
    <span className="text-danger text-small d-block mb-2">
        {errors?.sexo?.message}
    </span>
    
    <div>Edad</div>
    <input placeholder="9" className="form-control mb-1"  
                {...register("age",
                 { 
                    required:{value:true,message: 'Edad de mascota es requerido'},
                    pattern: {value:/^[1-9]/, message: 'No agregar letras ni simbolos' }, 
                    maxLength: {value: 2,message: 'No más de 2 carácteres!'} ,
                     minLength:{value: 1,message: 'No menos de 1 carácteres!'}})} />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.edad?.message}
                </span>
    
                <div>Especie</div>
    <input placeholder="ej:perro" className="form-control mb-1" {...register("type",
     { 
        required:{value:true,message: 'Especie es requerido'}, 
        maxLength: {value: 10,message: 'No más de 10 carácteres!'} ,
         minLength:{value: 2,message: 'No menos de 2 carácteres!'}})} />
    <span className="text-danger text-small d-block mb-2">
        {errors?.especie?.message}
    </span>
    
    <div>Tamaño</div>
    <input placeholder="ej:grande" className="form-control mb-1" {...register("bearing",  { 
        required:{value:true,message: 'Tamaño es requerido'}, 
        maxLength: {value: 10,message: 'No más de 10 carácteres!'} ,
         minLength:{value: 2,message: 'No menos de 2 carácteres!'}})} />
    <span className="text-danger text-small d-block mb-2">
        {errors?.porte?.message}
    </span>

    <div>descripcion</div>
    <input placeholder="ej:grande" className="form-control mb-1" {...register("description",  { 
        required:{value:true,message: 'Tamaño es requerido'}, 
        maxLength: {value: 10,message: 'No más de 10 carácteres!'} ,
         minLength:{value: 2,message: 'No menos de 2 carácteres!'}})} />
    <span className="text-danger text-small d-block mb-2">
        {errors?.porte?.message}
    </span>
    
    
    
    <button type="submit" className="btn btn-primary container mb-5 mt-4 " >
                       ingresar mascota
                    </button>
                    
                    </form>                   
                   
                        </div>                      
                        
                    </div>        
                    
            </div>            
               
        
        </div>
       
    );

}