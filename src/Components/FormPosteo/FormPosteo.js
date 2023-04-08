import "./FormPosteoStyle.css";
import axios from "axios";
import { getName } from "../../Redux/Actions/newPostActions";
import { Formik, Field } from "formik";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FormPosteo = ({ selectedPost }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    service: [],
  });
  useEffect(() => {
    dispatch(getName());
  }, [dispatch]);

  const posts = useSelector((state) => state.service.names);
  console.log("esto trae post:", posts);

  // const [selectedPosts, setSelectedPosts] = useState(["select"]);

  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  const users = [
    //ponemos user por defecto
    { value: "ctatterton0", label: "ctatterton0" },
    { value: "wlissandrini1", label: "wlissandrini1" },
    { value: "ltoman6", label: "ltoman6" },
  ];

  const handlerPost = (e) => {
    if (!input.service.includes(e.target.value)) {
      setInput({
        ...input,
        service: [...input.service, e.target.value],
      });
    }
  };
  //agregue selectedPosts

  return (
    <div className="container">
      <Formik
        className="container"
        initialValues={{
          service: "", // establecer como ""
          description: "",
          name: "",
          image: "",
          username: "",
        }}
        validate={(data) => {
          let error = {};

        {/*}  if (!data.username) {
            error.username = "Por favor ingresa tu nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(data.username)) {
            error.username = "El nombre sólo puede contener letras y espacios";
          }{*/}
          if (data.name.length > 20) {
            error.name = "El título no puede tener más de 20 caracteres";
          }

          if (!data.service || data.service === "select") {
            error.service = "Por favor seleccione rubro";
          }
          return error;
        }}
        onSubmit={(data, { resetForm }) => {
          dispatch(getName(data));
          console.log("este es el post que se va a publicar", data);
          axios
            .post("https://promanitasapi.onrender.com/api/v1/adPosts", data)
            .then((response) => console.log("probando", response.data))
            .catch((error) => console.log(error));
          resetForm();
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 2000);
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
              <select name="service" onChange={handleChange}>
                <option value="select">Seleccione un rubro</option>
                {posts?.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {touched.service && errors.service && (
                <div className="error">{errors.service}</div>
              )}
              <label htmlFor="name">Titulo</label>
              <Field
                className="input"
                name="name"
                placeholder="Texto"
                required
              ></Field>
               {touched.name && errors.name && (
                <div className="error">{errors.name}</div>
              )}
               <label htmlFor="username">Nombre de usuario</label>
              <Field name="username">
                {({ field }) => (
                  <select {...field}>
                    {users.map((users) => (
                      <option key={users.value} value={users.value}>
                        {users.label}
                      </option>
                    ))}
                  </select>
                )}
              </Field>

              {/*}  <label htmlFor="username">Nombre de Usuario</label>
              <Field
              
                className="input"
                name="username"
                placeholder="Nombre de usuario"
                required

              ></Field>
              {touched.username && errors.username && (
                <div className="error">{errors.username}</div>
              )}{*/}

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

              <label htmlFor="title">Descripción</label>
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
              <button className="button" type="submit">
                Publicar
              </button>
              {formularioEnviado && (
                <p className="exito">Publicación exitosa!</p>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default FormPosteo;
//
