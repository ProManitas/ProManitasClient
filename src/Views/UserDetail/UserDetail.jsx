import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserId, updateUser } from "../../Redux/Actions/userAction";
import style from "./UserDetail.module.css";
import validations from "../Login/validations";
import Swal from "sweetalert2";



const UserDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
 

  const [form, setForm] = useState({
    image: "",
    password: "",
    cellnumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({
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
    setErrors(validations({
      ...form,
      [event.target.name]: event.target.value
    }))
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  };

  const handleEdit = (field) => {
    setEditableField(field);
    setIsDisabled(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    dispatch(updateUser(id, form));
    setIsDisabled(true);
    Swal.fire({
      icon: "success",
      html: "Tus datos se han modificado correctamente.",
      confirmButtonColor: "#bc2525",
    })
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  useEffect(() => {
    dispatch(getUserId(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (detail) {
      setForm({
        image: detail.image || "",
        password: detail.password || "",
        cellnumber: detail.cellnumber || "",
        address: detail.address || "",
      });
    }
  }, [setForm, detail]);

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
          value={form.password}
          onChange={handleInputChange}
          disabled={isDisabled || editableField !== "password"}
          />
          {errors.password ? <span className={style.error}>{errors.password}</span> : null}
          <button type="button" onClick={() => handleEdit("password")}>
            Editar
          </button>
          </div> : null
          }

          <label htmlFor="cellnumber">Número de teléfono:</label>
          <input
            type="text"
            name="cellnumber"
            value={form.cellnumber}
            onChange={handleInputChange}
            disabled={isDisabled || editableField !== "cellnumber"}
          />
           {errors.cellnumber ? <span className={style.error}>{errors.cellnumber}</span> : null}
          <button type="button" onClick={() => handleEdit("cellnumber")}>
            Editar
          </button>


          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleInputChange}
            disabled={isDisabled || editableField !== "address"}
            
          />
         {errors.address ? <span className={style.error}>{errors.address}</span> : null}
          <button type="button" onClick={() => handleEdit("address")}>
            Editar
          </button>

          <button type="submit"
          disabled={errors.password &&
            errors.cellnumber &&
            errors.address}
          >Guardar cambios</button>
        </form>
      )}
    </div>
  );
};

export default UserDetail;
