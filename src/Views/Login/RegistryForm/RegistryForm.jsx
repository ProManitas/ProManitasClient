import React, { useState } from "react";
import { Formik } from "formik";
import style from "./RegistryForm.module.css";
import logo from "../../Images/logo.png";

const RegistryForm = () => {
  const [sentForm, setSentForm] = useState(false);


  return (
    <div className={style.container}>
      <Formik
        initialValues={{
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          cellnumber: "",
          address: "",
          role: "",
          experience: "",
          image: "",
        }}
        validate={(data) => {
          let error = {};

          if (!data.username) {
            error.username = "Por favor ingresa el nombre de usuario";
          } else if (data.username.length > 20) {
            error.username =
              "El nombre de usuario no puede superar los 20 caracteres";
          }

          if (!data.firstName) {
            error.firstName = "Por favor ingresa tu nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(data.firstName)) {
            error.firstName = "El nombre sólo puede contener letras y espacios";
          }

          if (!data.lastName) {
            error.lastName = "Por favor ingresa tu apellido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(data.lastName)) {
            error.lastName =
              "El apellido sólo puede contener letras y espacios";
          }

          if (!data.email) {
            error.email = "Por favor ingresa tu correo electrónico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(data.email)
          ) {
            error.email =
              "El correo sólo puede contener letras, números, guiones y guión bajo";
          }

          if (!data.password) {
            error.password = "Por favor ingresa la contraseña";
          } else if (!data.password.match(/\d/)) {
            error.password = "La contraseña debe contener al menos un número";
          }

          if (!data.cellnumber) {
            error.cellnumber =
              "Por favor ingresa tu número de teléfono de contacto";
          } else if (!/^[0-9_.+-]*$/.test(data.cellnumber)) {
            error.cellnumber =
              "Este campo sólo puede contener números y guiones";
          }

          if (!data.address) {
            error.address =
              "Por favor ingresa el nombre de la zona donde vives";
          } else if (data.username.length > 30) {
            error.username = "Este campo no puede superar los 30 caracteres";
          }

          // if(data.experience.length > 120){
          //   error.address= "Este campo no puede superar los 120 caracteres"
          // }

          return error;
        }}
        onSubmit={(data, { resetForm }) => {
          resetForm();
          setSentForm(true);
          setTimeout(() => setSentForm(false), 3000);
          //desde acá se puede hacer el llamado o hacer la conexión con la api
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
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.container}>
              <img src={logo} alt="" className={style.logo} />
            </div>

            <div>
              <div>
                <label htmlFor="username">Nombre de usuario: </label>
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
                <label>Primer nombre: </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Nombre"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={style.input}
                />
                {touched.firstName && errors.firstName && (
                  <div className={style.error}>{errors.firstName}</div>
                )}
              </div>

              <div>
                <label>Apellido: </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Apellido"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={style.input}
                />
                {touched.lastName && errors.lastName && (
                  <div className={style.error}>{errors.lastName}</div>
                )}
              </div>

              <div>
                <label>Correo electrónico: </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={style.input}
                />
                {touched.email && errors.email && (
                  <div className={style.error}>{errors.email}</div>
                )}
              </div>

              <div>
                <label>Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={style.input}
                />
                {touched.password && errors.password && (
                  <div className={style.error}>{errors.password}</div>
                )}
              </div>

              <div>
                <label>Número de teléfono: </label>
                <input
                  type="tel"
                  id="cellnumber"
                  name="cellnumber"
                  placeholder="(Código de área)Número"
                  value={values.cellnumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={style.input}
                />
                {touched.cellnumber && errors.cellnumber && (
                  <div className={style.error}>{errors.cellnumber}</div>
                )}
              </div>

              <div>
                <label>Zona donde vives: </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Zona donde vives"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={style.input}
                />
                {touched.address && errors.address && (
                  <div className={style.error}>{errors.address}</div>
                )}
              </div>

              <div>
                <label>¿Deseas publicar un aviso o buscas a un profesional?</label>
                <select
                  type="text"
                  id="role"
                  name="role"
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={style.input}
                >
                  <option>Selecciona tu respuesta</option>
                  <option>Deseo publicar un aviso</option>
                  <option>Deseo contactar con un profesional</option>

                </select>
              </div>

              <div>
                <label>Si deseas publicar un aviso, hablanos un poco de tu experiencia</label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  placeholder="Cuéntanos un poco de tu experiencia laboral"
                  value={values.experience}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={style.input}
                />
                {touched.experience && errors.experience && 
              <div className={style.error}>{errors.experience}</div>
              }
              </div>

              <div>
                <label>Agrega tu foto: </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  placeholder="URL de tu foto"
                  value={values.image}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={style.input}
                />
              </div>

              <div>
                <button type="submit" className={style.button}>
                  Crear usuario
                </button>
              </div>

              <div className={style.exito}>
                {sentForm && <p>¡Registro enviado con éxito!</p>}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegistryForm;
