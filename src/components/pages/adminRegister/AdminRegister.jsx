import Bar from "../../layout/bar";
import { useEffect } from "react";
import Carousel from "../../layout/Carousel ";
import getAssociateService from "../../../services/asociadosService";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminRegister() {
  const b = Bar();
  const C = Carousel();
  const user = getAssociateService();

  const navegate = useNavigate(); // direccionar paginas

  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      navegate("/Login");
    }
  }, [token, navegate]);

  return (
    <div className="row col-12 ">
      <div className=" col-3">{b}</div>
      <div className="col-8 m-5  container row rounded-3">
        {C}
        {user.reduce((user) => (
          <div key={user._id} className="row container d-lg-block rounded-3">
            <h1 className="m-lg-4">Bienvenido</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
