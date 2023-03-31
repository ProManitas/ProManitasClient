import "./FormPosteoStyle.css";

import { Formik, Field, ErrorMessage } from "formik";
import React, { useState } from "react";

const FormPosteo = () => {
  //const [sentForm, setSentForm] = useState(false)
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <div>
      <Formik
        className="form"
        initialValues={{
          rubro: "",
          imagen: "",
          zona: "",
          descripcion: "",
        }}
        validate={(data) => {
          let error = {};

          if (!data.rubro) {
            error.rubro = "Por favor seleccione rubro";
          }
          return error;
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
          <form onSubmit={handleSubmit} className="form">
            <div>
              <label className="input" htmlFor="rubro">
                Rubro
              </label>
              <Field name="rubro" as="select">
                <option value="Carpinteria">Carpintería</option>
                <option value="Gasista">Gasista</option>
                <option value="Plomeria">Plomería</option>
                <option value="Pintura">Pintura</option>
                <option value="Electricista">Electricista</option>
              </Field>
              <label htmlFor="imagen">Imagen</label>
              <input
                type="text"
                id="imagen"
                name="imagen"
                placeholder="imagen"
                value={values.imagen}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
              {touched.imagen && errors.imagen && (
                <div className="error">{errors.imagen}</div>
              )}
              <label htmlFor="zona">Zona</label>
              <input
                type="text"
                id="zona"
                name="zona"
                placeholder="zona"
                value={values.zona}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
                required
              />
              {touched.zona && errors.zona && (
                <div className="error">{errors.zona}</div>
              )}
              <label htmlFor="descripción">Descripción</label>
              <Field
                className="input"
                name="descripción"
                as="textarea"
                placeholder="Descripción"
                required
              ></Field>
              {touched.descripción && errors.descripción && (
                <div className="error">{errors.descripción}</div>
              )}
            </div>

            <div>
              <button type="submit" className="button">
                Publicar
              </button>
              {formularioEnviado && (
                <p className="exito">Formulario enviado con éxito!</p>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormPosteo;
