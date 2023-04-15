import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserId, updateUser } from "../../Redux/Actions/userAction";
import style from "./UserDetail.module.css";

const UserDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
 

  const [formData, setFormData] = useState({
    image: "",
    password: "",
    cellnumber: "",
    address: "",
  });


  const [isDisabled, setIsDisabled] = useState(true);

  const [editableField, setEditableField] = useState({
    image: false,
    password: false,
    cellnumber: false,
    address: false,
  });

  const detail = useSelector((state) => state.user.userId);
  const isLoading = useSelector((state) => state.user.isLoading);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEdit = (field) => {
    setEditableField(field);
    setIsDisabled(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    dispatch(updateUser(id, formData));
    setIsDisabled(true);
    alert("Usuario modificado con exito")
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  useEffect(() => {
    dispatch(getUserId(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (detail) {
      setFormData({
        image: detail.image || "",
        password: detail.password || "",
        cellnumber: detail.cellnumber || "",
        address: detail.address || "",
      });
    }
  }, [setFormData, detail]);

  return (
    <div className={style.container}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSave} className={style.form}>
          <img
            src={detail.image}
            alt={detail.username}
            className={style.image}
          />

          <h2>
            {detail.firstname} {detail.lastname}
          </h2>

        {detail.password ? 
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          disabled={isDisabled || editableField !== "password"}
          />
          <button type="button" onClick={() => handleEdit("password")}>
            Editar
          </button>
          </div> : null
          }

          <label htmlFor="cellnumber">Número de teléfono:</label>
          <input
            type="text"
            name="cellnumber"
            value={formData.cellnumber}
            onChange={handleInputChange}
            disabled={isDisabled || editableField !== "cellnumber"}
          />
          <button type="button" onClick={() => handleEdit("cellnumber")}>
            Editar
          </button>

          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            disabled={isDisabled || editableField !== "address"}
          />
          <button type="button" onClick={() => handleEdit("address")}>
            Editar
          </button>

          <button type="submit">Guardar cambios</button>
        </form>
      )}
    </div>
  );
};

export default UserDetail;
