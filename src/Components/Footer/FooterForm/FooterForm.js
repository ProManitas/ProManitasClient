import { Formik, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import "./FooterForm.css";


function validateEmail(value) {
  let error={};
  if (!value) {
    error = "*";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validateName(value) {
  let error;
  if (!value.name) {
    error.name = "Por favor ingresa tu nombre";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.name)) {
    error.name = "El nombre sólo puede contener letras y espacios";
  }
  return error;
}

const FooterForm = () => {
  //const [sentForm, setSentForm] = useState(false)
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <div className="container" id="wrapper">
      <Formik
        className="container"
        initialValues={{
          nombre: "",
          correo: "",
          asunto: "",
          mensaje: "",
        }}
        onSubmit={(data, { resetForm }) => {
          resetForm();
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
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
          <form
            className="form"
            action="https://formsubmit.co/yanicorc@gmail.com"
            method="POST"
          >
            <h1 className="input">Contáctenos</h1>
            <div>
              <label className="input" htmlFor="nombre">
                Nombre
              </label>
              <Field className="input" type="text" id="name" name="name" validate={validateName} />

              <label htmlFor="email">Email</label>
              <Field name="email" validate={validateEmail} />
              {errors.email && touched.email && <div>{errors.email}</div>}

              {touched.correo && errors.correo && (
                <div className="error">{errors.correo}</div>
              )}
              <label className="input" htmlFor="asunto">
                Asunto
              </label>
              <input className="input" type="text" name="asunto" />
              <label htmlFor="mensaje">Mensaje</label>
              <Field
                className="input"
                name="mensaje"
                as="textarea"
                placeholder="mensaje"
                required
              ></Field>
              {touched.mensaje && errors.mensaje && (
                <div className="error">{errors.mensaje}</div>
              )}
            </div>

            <div>
              <button type="submit" className="button">
                Enviar
              </button>
              {formularioEnviado && (
                <p className="exito">Consulta enviada con éxito!</p>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FooterForm;

//para no utilizar formSubmit, se elimina la linea 41 y se reemplaza por  <form onSubmit={handleSubmit} className="form">
