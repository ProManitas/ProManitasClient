import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../Redux/Actions/userAction";
import axios from "axios";
import style from "./RegistryForm.module.css"
//import { Formik } from "formik";
import { useNavigate } from "react-router";
//import { Image } from "cloudinary-react";


const RegistryForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.user.allUsers);
  // console.log("showing all the users data",users)
  // const oneUser = users.slice(0, 10);
  // console.log(oneUser);

  const [form, setForm] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cellnumber: "",
    address: "",
    image: "",
  });

  //add data to inputs
  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  //add data to DB
  const handlerSubmit = (e) => {
    e.preventDefault();

    try {
      axios
        .post("https://promanitasapi.onrender.com/api/v1/users", form, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then(alert("Usuario creado correctamente, por favor inicia sesión"));
        navigate("/")
        
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handlerSubmit(e)} className={style.form}>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="firstname"
            value={form.firstname}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Correo electrónico:</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Número de teléfono:</label>
          <input
            type="tel"
            name="cellnumber"
            value={form.cellnumber}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={changeHandler}
          />
        </div>

        {/* 
          <div>
          <label>Experiencia:</label>
            <input type="text" name="experience" value={form.experience} onChange={changeHandler}/>
          </div> */}

        <div>

          <label for="image">Selecciona una imagen:</label>
          <input
            type="file"
            id="image"
            name="image"
            value={form.image}
            onChange={changeHandler}
          />
        </div>

        <div>
          <button type="submit">Crear usuario</button>
        </div>
      </form>
    </div>
  );
};

export default RegistryForm;