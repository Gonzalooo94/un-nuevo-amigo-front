import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default function UserForm ({ id, user }) {
    const { register, formState: { errors }, handleSubmit } = useForm({
      defaultValues: user?.[0]
    });

    const navegate = useNavigate(); // direccionar paginas
  const handleClick = () => {
    navegate("/adminRegister");
  };

    const onSubmit = async (data) => {
        console.log({ data,  })
        alert("Asociado actualizado con exito");
      
       
        const response = await axios.put('https://nuevo-amigo-server-production.up.railway.app/users/' + id, { ...data, userId: '62cccec538e86667b5577d94' })

        console.log(response.data)   
            
    }  


    return(
        <div className=" container  mt-5 col-10  col-sm card rounded-3 ">
      <div>
        <h1>Actualiza tu Registro</h1>
      </div>
      <form
        action=""
        name="EditRegisterUsers"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row card-body ">
          <div className="col-5 col-lg-5 container mt-3">
            <div>Nombre</div>

            <input
              placeholder="Ingrese su nombre "
              className="form-control mb-1"
              {...register("name", {
                required: { value: true, message: "Nombre es requerido" },
                maxLength: { value: 20, message: "No más de 20 carácteres!" },
                minLength: { value: 2, message: "No menos de 2 carácteres!" },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.name?.message}
            </span>

            <div>Apellido</div>
            <input
              placeholder="Espinoza"
              className="form-control mb-1"
              {...register("lastname", {
                required: { value: true, message: "Apellido es requerido" },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "No agregar numeros o signos",
                },
                maxLength: { value: 10, message: "No más de 10 carácteres!" },
                minLength: { value: 3, message: "No menos de 3 carácteres!" },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.lastname?.message}
            </span>

            <div>Rut</div>
            <input
              placeholder="22.222.222-9"
              className="form-control mb-1"
              {...register("rut", {
                required: { value: true, message: "rut es requerido" },
                maxLength: { value: 10, message: "No más de 10 carácteres!" },
                minLength: { value: 9, message: "No menos de 9 carácteres!" },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.rut?.message}
            </span>

            <div>Edad</div>
            <input
              placeholder="9"
              className="form-control mb-1"
              {...register("age", {
                required: {
                  value: true,
                  message: "Edad de Asociado es requerido",
                },
                pattern: {
                  value: /^[1-9]/,
                  message: "No agregar letras ni simbolos",
                },
                maxLength: { value: 2, message: "No más de 2 carácteres!" },
                minLength: { value: 1, message: "No menos de 1 carácteres!" },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.age?.message}
            </span>

            <button
              type="submit"
              className="btn btn-primary container mb-5 mt-3 "
              onChange={handleClick}
            >
              Registrar
            </button>
          </div>

          <div className="col-5 container col-lg-5 mt-3">
            <div>Numero de contacto</div>
            <input
              placeholder="956789004"
              className="form-control mb-1"
              {...register("contactnumber", {
                required: {
                  value: true,
                  message: "Numero de contacto es requerido",
                },
                pattern: {
                  value: /^[1-9]/,
                  message: "No agregar letras ni simbolos",
                },
                maxLength: { value: 9, message: "No más de 9 carácteres!" },
                minLength: { value: 9, message: "No menos de 9 carácteres!" },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.contactnumber?.message}
            </span>

            <div>Correo</div>
            <input
              placeholder="andrea1994@gmail.com"
              className="form-control mb-1"
              type="email"
              {...register("email", {
                required: { value: true, message: "Correo es requerido" },
                maxLength: { value: 35, message: "No más de 35 carácteres!" },
                minLength: { value: 3, message: "No menos de 3 carácteres!" },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.email?.message}
            </span>

            <div>Direccción</div>
            <input
              placeholder="Ingrese Direccción"
              className="form-control mb-1"
              {...register("addres", {
                required: { value: true, message: "Direccción es requerido" },
                maxLength: { value: 35, message: "No más de 35 carácteres!" },
                minLength: { value: 3, message: "No menos de 3 carácteres!" },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.addres?.message}
            </span>

            <div>Password</div>
            <input
              placeholder="confirme password"
              className="form-control mb-1"
              type="password"
              {...register("password", {
                required: { value: true, message: "password es requerido" },
                maxLength: { value: 8, message: "No más de 8 carácteres!" },
                minLength: { value: 8, message: "No menos de 8 carácteres!" },
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.password?.message}
            </span>
            <button
              type="reset"
              className="btn btn-primary container mb-5 mt-3"
              name="registro"
            >
              limpiar
            </button>
          </div>
        </div>
      </form>
    </div>
    )
    
}