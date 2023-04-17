import "./FormPosteoStyle.css";
import axios from "axios";
import { getName } from "../../Redux/Actions/newPostActions";
import { Formik, Form, Field } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUsers } from "../../Redux/Actions/userAction";

const letrasRegExp = /[a-zA-Z ]/


const FormPosteo = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  
  useEffect(() => {
    dispatch(getName());
    dispatch(getAllUsers());
  }, [dispatch]);

  const posts = useSelector((state) => state.service.names);
  
  const usersDb = useSelector((state) => state.user.allUsers);

  const filteredUser = usersDb.filter((elem) => elem.email === user.email);

  return (
    <div className="container">
      <Formik
        className="container"
        initialValues={{
          service: "",
          description: "",
          name: "",
          image: "",
        }}
        validate={(data) => {
          let error = {};

          if (data.name.length > 20) {
            error.name = "El título no puede tener más de 20 caracteres";
          } else if (!letrasRegExp.test(data.name)){
            error.name = "El título no debe contener números" 
          } 
          if (!data.service || data.service === "select") {
            error.service = "Por favor seleccione rubro";
          }
  
          return error;
        }}
        onSubmit={(data, { resetForm }) => {
          console.log(data, "testing")
          try {
            dispatch(getName(data));
            axios
              .post("/adPosts", {
                name: data.name,
                description: data.description,
                image: data.image,
                username: filteredUser[0].username,
                service: data.service
              })
              .then((response) => (response.data))
              .catch((error) =>(error));
            resetForm();
            setTimeout(() => {
              alert("Aviso publicado correctamente")
              navigate("/home");
            }, 2000);
          } catch (error) {
            error(error);
          }
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
          <Form onSubmit={handleSubmit} className="form">
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

              {filteredUser[0] && filteredUser[0].email ? 
              <div>
              <label htmlFor="username">Nombre de usuario:</label>
              <input
              type="text"
              id="username"
              name="username"
              value={filteredUser[0] && filteredUser[0].username}
              readOnly
              required
              />
              </div> : null
            }

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
                required
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
            
        {filteredUser[0] && filteredUser[0].email ? 
            <div>
              <button className="button" type="submit">
                Publicar
              </button>
              
            </div>: <div className="error"><p>¡Por favor completa tus datos desde tu perfil para poder publicar avisos!</p></div>
              }
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormPosteo;
//
