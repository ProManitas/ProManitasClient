import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../Redux/Actions/userAction";
import style from "./Profile.module.css";
import { Link } from "react-router-dom";


const Profile = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.user.allUsers);
  //console.log("showing all the users data",users)

  const filteredUser = Array.isArray(users) ? users.filter((elem) => elem.email === user.email) : [];

  return (
    <div className={style.container}>
      <div className={style.card}>
        {filteredUser[0] && filteredUser[0].image ? (
          <div>
            {filteredUser[0] && filteredUser[0].image && (
              <img src={filteredUser[0].image} alt={filteredUser[0].username} />
            )}
          </div>
        ) : (
          <div>
            <img src={user.picture} alt={user.name} />
          </div>
        )}

        {filteredUser[0] && filteredUser[0].firstname ? (
          <div>
            {filteredUser[0] && filteredUser[0].firstname && (
              <h2>¡Hola {filteredUser[0].firstname}, estás en ProManitas!</h2>
            )}
          </div>
        ) : (
          <div>
            <h2>¡Hola {user.name}, estás en ProManitas!</h2>
          </div>
        )}
        <p>Tu cuenta de correo registrada: {user.email}</p>
      </div>

      <div className={style.redirections}>
        <div className={style.redirect}>
          <Link to="/home">Ir a Home</Link>
        </div>

        {filteredUser[0] && filteredUser[0].email ? (
          <div className={style.redirect}>
            <Link to={`/userdetail/${filteredUser[0] && filteredUser[0].id}`}>
              Modificar o eliminar usuario
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/registryFromMail">¡Completa tus datos!</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
