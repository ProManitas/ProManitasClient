import "./FormPosteoStyle.css";
import axios from "axios";
import { getName } from "../../Redux/Actions/newPostActions";
import { Formik, Field } from "formik";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FormPosteo = ({selectedPost}) => {
  const dispatch = useDispatch();

  const [ input, setInput] = useState({
    rubros:[]
  })
  useEffect(() => {
    dispatch(getName());
  }, [dispatch]);
  
  const posts = useSelector((state) => state.service.names);
  console.log("esto trae post:", posts)

  const [selectedPosts, setSelectedPosts] = useState(["select"]);

  const [formularioEnviado, cambiarFormularioEnviado] = useState(true);


  const handlerPost = (e) => {
    if(!input.rubros.includes(e.target.value)){
      setInput ({
        ...input,
        rubros:[...input.rubros, e.target.value]
      })
    }
  }
  //agregue selectedPosts
  
    return (
      <div className="container">
      <Formik
        className="container"
        initialValues={{
          post: "", // establecer como ""
          description: "",
          name: "",
          image: "",
        }}
        validate={(data) => {
          let error = {};

          if (!data.post || data.post === "select") {
            error.post = "Por favor seleccione rubro";
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
          <form onSubmit={handleSubmit}  className="form">
            <div>
            <select name="post" onChange={handleChange}>
  <option value="select">Seleccione un rubro</option>
  {posts?.map((post) => (
    <option key={post} value={post}>{post}</option>
  ))}
</select>
              {touched.post && errors.post && (
                <div className="error">{errors.post}</div>
              )}
              <label htmlFor="title">Titulo</label>
              <Field
                className="input"
                name="title"
                placeholder="Texto"
                required
              ></Field>

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