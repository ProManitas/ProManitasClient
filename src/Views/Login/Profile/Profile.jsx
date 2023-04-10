import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../Redux/Actions/userAction";
import style from "./Profile.module.css";
import { Link } from "react-router-dom";

//import {CodeSnippet} from "./code-snippet"

const Profile = () => {
  const { user } = useAuth0();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.user.allUsers);
  //console.log("showing all the users data",users)

  const filteredUser = users.filter((elem) => elem.email === user.email);

  if (!user) {
    return null;
  }

  return (
    <div className={style.container}>
      <div className={style.card}>

        {/* <p>
                    <span>
                    You can use the <strong>ID Token</strong> to get the profile
              information of an authenticated user.
                    </span>
                    <span>
                    <strong>Only authenticated users can access this page.</strong>
                    </span>
                </p> */}

        {/* <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2> */}
        <div>
          {filteredUser[0] && filteredUser[0].image && (
            <img src={filteredUser[0].image} alt={filteredUser[0].username} />
          )}
        </div>

        <div>
          {/* {filteredUser[0] && filteredUser[0].username && (
            <h3>{filteredUser[0].username}</h3>
          )} */}
          
          {filteredUser[0] && filteredUser[0].firstname && (
            <h2>¡Hola {filteredUser[0].firstname}, estás en ProManitas!</h2>
            )}
          <p>Tu cuenta de correo registrada: {user.email}</p>
          {/* {filteredUser[0] && filteredUser[0].lastname && (
            <p>Apellido: {filteredUser[0].lastname}</p>
          )}
          {filteredUser[0] && filteredUser[0].cellnumber && (
            <p>Número de teléfono: {filteredUser[0].cellnumber}</p>
          )}
          {filteredUser[0] && filteredUser[0].address && (
            <p>Dirección: {filteredUser[0].address}</p>
          )} */}
        </div>

        {/* <CodeSnippet
                title="Decoded ID Token"
                code={JSON.stringify(user, null, 2)}
              /> */}
      </div>

<div className={style.redirections}>

      <div className={style.redirect}>
        <Link to="/home">Ir a Home</Link>
      </div>

      {/* Redireccion temporal a userid, se rompe si se regresa a profile */}
      <div className={style.redirect}>
       

        <Link to={`/userdetail/${filteredUser[0] && filteredUser[0].id}`}>
          Modificar o eliminar usuario
        </Link>
        
      </div>
</div>
    </div>
  );
};

export default Profile;
