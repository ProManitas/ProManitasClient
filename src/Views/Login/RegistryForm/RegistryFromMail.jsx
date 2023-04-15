import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import style from "./RegistryForm.module.css";

const RegistryFromMail = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  


  const [form, setForm] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password:"",
    cellnumber: "",
    address: "",
    image: ""
  });


  //bring info from auth0
  useEffect(() => {
    if (user) {
      setForm((prevForm) => ({
        ...prevForm,
        firstname: user.name,
        email: user.email,
        image: user.picture,
      }));
    }
  }, [user]);

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
        .then(alert("Usuario creado correctamente"));
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className={style.container}>

      <form onSubmit={(e) => handlerSubmit(e)} className={style.form}>

        <div>
            <img src={user.picture} alt={user.name}/>
        </div>

        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="firstname">Nombre:</label>
          <input
            type="text"
            name="firstname"
            value={form.firstname}
            onChange={changeHandler}
            readOnly
            required
          />
        </div>

        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={changeHandler}
            readOnly
            required
          />
        </div>

        <div>
          <label htmlFor="cellnumber">Número de teléfono:</label>
          <input
            type="tel"
            name="cellnumber"
            value={form.cellnumber}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={changeHandler}
          />
        </div>


        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default RegistryFromMail;
