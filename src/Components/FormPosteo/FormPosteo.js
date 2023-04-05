import "./FormPosteoStyle.css";
import axios from "axios";
//import { newPost } from "../../Redux/Actions/newPostActions";
import { Formik, Field } from "formik";
import React, { useState } from "react";
//import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";
const FormPosteo = () => {
  //const [sentForm, setSentForm] = useState(false)
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  //const dispatch = useDispatch();



  return (
    <div className="container">
      <Formik
        className="container"
        initialValues={{
          name:"",
          description: "",
          rubro: "",
          image: "",
          
        }}
        validate={(data) => {
          let error = {};

          if (!data.name) {
            error.name = "Por favor escriba un texto";
          }
          return error;
          
        }}
        onSubmit={ async (data, { resetForm }) => {
         // dispatch(newPost(data));
         console.log(data);
            axios.post('https://promanitasapi.onrender.com/api/v1/adPosts', data)

         
        // await fetch("https://promanitasapi.onrender.com/api/v1/adPosts", {
        //         method: "POST",
        //         headers: {
        //           "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(data)
        //       })
        //       .then(response => response.json())
        //       .then(data => console.log("probando", data))
        //       .catch(error=>console.log(error))
        //         resetForm();
        //         cambiarFormularioEnviado(true);
        //         setTimeout(() => cambiarFormularioEnviado(false), 5000);
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
            <label htmlFor="name">Nombre</label>
              <Field
                className="input"
                name="name"
                
                placeholder="Texto"
                required
              ></Field>
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
              <label htmlFor="image">Imagen</label>
              <input
                type="file"
                id="image"
                name="image"
                placeholder="image"
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
                accept="image/*"
              />
              {touched.image && errors.image && (
                <div className="error">{errors.image}</div>
              )}
             
              <label htmlFor="description">Descripción</label>
              <Field
                className="input"
                name="description"
                as="textarea"
                placeholder="Description"
                required
              ></Field>
              {touched.description && errors.description && (
                <div className="error">{errors.description}</div>
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
//probando 3
//probando 2
