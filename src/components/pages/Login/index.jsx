import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import "./index.css";



export default function Login() {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const { sessionStart, token } = useAuth();
    
      const onSubmit = async (data) => {
        sessionStart("token");
        navegate("/adminRegister");
      };
      const navegate = useNavigate(); // direccionar paginas
    
      useEffect(() => {
        if (token) {
          navegate("/adminRegister");
        }
      }, [token, navegate]);
    
      return (
        <div className="container mt-5">
          <div className=" rounded-3 card-header  container col-6 col-sm border">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="container mb-3">Login</h1>
              <div className=" container">
                <div>
                  <input
                    placeholder="Ingrese nombre de usuario"
                    className="form-control mb-1"
                    {...register("user", {
                      required: { value: true, message: "Nombre es requerido" },
                      maxLength: { value: 20, message: "No más de 20 carácteres!" },
                      minLength: { value: 2, message: "No menos de 2 carácteres!" },
                    })}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.user?.message}
                  </span>
    
                  <input
                    placeholder="Ingrese password"
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
                    type="submit"
                    className="btn btn-primary btn-lg m-5  mb-5 mt-3 "
                  >
                    Ingresar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
    