import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../Redux/Actions/userAction";
import style from "./Profile.module.css"
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
    <div>
      <div className={style.container}>
        <h2>Perfil de usuario</h2>
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
        {filteredUser[0] && filteredUser[0].image && <img src={filteredUser[0].image} alt={filteredUser[0].username} />}
        {filteredUser[0] && filteredUser[0].username && <h3>Nombre de usuario: {filteredUser[0].username}</h3>}
        <h3>Email: {user.email}</h3>
        {filteredUser[0] && filteredUser[0].firstname && <h3>Nombre: {filteredUser[0].firstname}</h3>}
        {filteredUser[0] && filteredUser[0].lastname && <h3>Apellido: {filteredUser[0].lastname}</h3>}
        {filteredUser[0] && filteredUser[0].cellnumber && <h3>Número de teléfono: {filteredUser[0].cellnumber}</h3>}
        {filteredUser[0] && filteredUser[0].address && <h3>Dirección: {filteredUser[0].address}</h3>}

        <Link to="/home">Home</Link>

        {/* Redireccion temporal a userid, se rompe si se regresa a profile */}
        <Link to={`/userdetail/${filteredUser[0] && filteredUser[0].id}`}>Modificar o eliminar usuario</Link>
        
        
        
        {/* <CodeSnippet
                title="Decoded ID Token"
                code={JSON.stringify(user, null, 2)}
              /> */}
      </div>
    </div>
  );
};

export default Profile;
