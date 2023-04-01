import { Link } from "react-router-dom";
import style from "./LoginForm.module.css";
//import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../Images/logo.png";
import { Formik } from "formik";
import React, { useState } from "react";

const LoginForm = () => {
  //const { loginWithRedirect } = useAuth0();

  const [sentForm, setSentForm] = useState(false);

  // const handleSubmit = (event) => {
  //   const username = event.target.username.value;
  //   const password = event.target.password.value;
  //   loginWithRedirect({ username, password });
  // };

  return (
    <div className={style.container}>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validate={(data) => {
          let error = {};

          if (!data.username) {
            error.username = "Por favor ingresa el nombre de usuario";
          } else if (data.username.length > 20) {
            error.username =
              "El nombre de usuario no puede superar los 20 caracteres";
          }

          if (!data.password.match(/\d/)) {
            error.password = "La contraseña debe contener al menos un número";
          } else if (data.password.length < 6 || data.password.length > 10) {
            error.password =
              "La contraseña debe contener entre 6 y 10 caracteres";
          }
          return error;
        }}
        onSubmit={(data, { resetForm }) => {
          resetForm();
          setSentForm(true);
          setTimeout(() => setSentForm(false), 4000);
          //aqui llamo a la api para poder enviar a la db
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.container}>
              <img src={logo} alt="" className={style.logo} />
            </div>

            <div>
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Nombre de usuario"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={style.input}
              />
              {touched.username && errors.username && (
                <div className={style.error}>{errors.username}</div>
              )}
            </div>

            <div>
              <label>Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                className={style.input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <div className={style.error}>{errors.password}</div>
              )}
            </div>

            <div>
              <button type="submit" className={style.button}>
                Ingresar
              </button>
            </div>

            <div>
              {sentForm && <p className={style.exito}>¡Datos correctos!</p>}
            </div>

            <h5 className={style.registry}>
              ¿No tienes cuenta? <Link to="/registryForm">Registrate aquí</Link>
            </h5>

            {/* Botón para ingresar con cuenta de Gmail, aún en proceso
            <div>
              <button className={style.button} onClick={() => loginWithRedirect()}>
                Ingresa con tu cuenta de correo Gmail
              </button>
            </div> */}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;