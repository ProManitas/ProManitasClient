import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserId } from "../../Redux/Actions/userAction";
import style from "./UserDetail.module.css";
import axios from "axios";

import { Link } from "react-router-dom";

const UserDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  

  useEffect(() => {
    dispatch(getUserId(id));
  }, [dispatch, id]);

  const detail = useSelector((state) => state.user.userId);


  if (!detail.id) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img src={detail.image} alt={detail.username} />
        <h1>{detail.firstname} {detail.lastname}</h1>
        <p>Contraseña: {detail.password}</p>
        <p>Número de teléfono: {detail.cellnumber}</p>
        <p>Dirección: {detail.address}</p>

        <div className={style.redirections}>
            <div>
                <Link to="/construction">Eliminar usuario</Link>
            </div>
        </div>


      </div>
    </div>
  );
};

export default UserDetail;
