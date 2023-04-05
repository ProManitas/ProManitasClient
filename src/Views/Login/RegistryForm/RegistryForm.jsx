import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../Redux/Actions/userAction";
import axios from "axios";

const RegistryForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.user.allUsers);
  // console.log("showing all the users data",users)
  const oneUser = users.slice(0, 10);
  //console.log(oneUser);

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
        .then((response) => console.log(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handlerSubmit(e)}>
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
          <label>Imagen:</label>
          <input
            type="text"
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





//falta unificar formulario de registro con formik, por ahora queda pendiente

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import { Formik } from "formik";
// import {getAllUsers} from "../../../Redux/Actions/userAction"
// import style from "./RegistryForm.module.css";
// import logo from "../../../Images/icon.png";
// import axios from "axios";

// axios.defaults.headers = {
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*'
// };

// const RegistryForm = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate();

//   const users = useSelector(state => state.user.allUsers)
//   //console.log("showing all the users data",users)

//   useEffect(()=>{
//     dispatch(getAllUsers())
//   },[dispatch])

//   const [sentForm, setSentForm] = useState(false);

//   const handleSubmit = () => {}

//   // Redirigir al usuario a la ruta "home"
//   function handleRegister(values) {
//     setTimeout(() => {
//       navigate("/");
//     }, 2000);
//   }

//   return (
//     <div className={style.container}>
//       <Formik
//         initialValues={{
//           username: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     cellnumber: "",
//     address: "",
//     image: "",
//         }}
//         validate={(data) => {
//           let error = {};

//           if (!data.username) {
//             error.username = "Por favor ingresa el nombre de usuario";
//           } else if (data.username.length > 20) {
//             error.username =
//               "El nombre de usuario no puede superar los 20 caracteres";
//           }

//           if (!data.firstName) {
//             error.firstName = "Por favor ingresa tu nombre";
//           } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(data.firstName)) {
//             error.firstName = "El nombre sólo puede contener letras y espacios";
//           }

//           if (!data.lastName) {
//             error.lastName = "Por favor ingresa tu apellido";
//           } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(data.lastName)) {
//             error.lastName =
//               "El apellido sólo puede contener letras y espacios";
//           }

//           if (!data.email) {
//             error.email = "Por favor ingresa tu correo electrónico";
//           } else if (
//             !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(data.email)
//           ) {
//             error.email =
//               "El correo sólo puede contener letras, números, guiones y guión bajo";
//           }

//           if (!data.password) {
//             error.password = "Por favor ingresa la contraseña";
//           } else if (!data.password.match(/\d/)) {
//             error.password = "La contraseña debe contener al menos un número";
//           }

//           if (!data.cellnumber) {
//             error.cellnumber =
//               "Por favor ingresa tu número de teléfono de contacto";
//           } else if (!/^[0-9_.+-]*$/.test(data.cellnumber)) {
//             error.cellnumber =
//               "Este campo sólo puede contener números y guiones";
//           }

//           if (!data.address) {
//             error.address =
//               "Por favor ingresa el nombre de la zona donde vives";
//           } else if (data.username.length > 30) {
//             error.username = "Este campo no puede superar los 30 caracteres";
//           }

//           return error;
//         }}
//         onSubmit={ values  => {
//           axios.post("https://promanitasapi.onrender.com/api/v1/users", values)
//           console.log(values);
//           setSentForm(true);
//           setTimeout(() => setSentForm(false), 3000);
//           handleRegister(values);
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleSubmit,
//           handleChange,
//           handleBlur,
//           isSubmitting
//         }) => (
//           <form className={style.form} onSubmit={handleSubmit}>
//             <div className={style.container}>
//               <img src={logo} alt="" className={style.logo} />
//             </div>

//             <div>
//               <div>
//                 <label htmlFor="username">Nombre de usuario: </label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   placeholder="Nombre de usuario"
//                   value={values.username}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={style.input}
//                 />
//                 {touched.username && errors.username && (
//                   <div className={style.error}>{errors.username}</div>
//                 )}
//               </div>

//               <div>
//                 <label>Primer nombre: </label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   placeholder="Nombre"
//                   value={values.firstName}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={style.input}
//                 />
//                 {touched.firstName && errors.firstName && (
//                   <div className={style.error}>{errors.firstName}</div>
//                 )}
//               </div>

//               <div>
//                 <label>Apellido: </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   placeholder="Apellido"
//                   value={values.lastName}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={style.input}
//                 />
//                 {touched.lastName && errors.lastName && (
//                   <div className={style.error}>{errors.lastName}</div>
//                 )}
//               </div>

//               <div>
//                 <label>Correo electrónico: </label>
//                 <input
//                   type="text"
//                   id="email"
//                   name="email"
//                   placeholder="Correo electrónico"
//                   value={values.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={style.input}
//                 />
//                 {touched.email && errors.email && (
//                   <div className={style.error}>{errors.email}</div>
//                 )}
//               </div>

//               <div>
//                 <label>Contraseña:</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder="Contraseña"
//                   value={values.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={style.input}
//                 />
//                 {touched.password && errors.password && (
//                   <div className={style.error}>{errors.password}</div>
//                 )}
//               </div>

//               <div>
//                 <label>Número de teléfono: </label>
//                 <input
//                   type="tel"
//                   id="cellnumber"
//                   name="cellnumber"
//                   placeholder="(Código de área)Número"
//                   value={values.cellnumber}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={style.input}
//                 />
//                 {touched.cellnumber && errors.cellnumber && (
//                   <div className={style.error}>{errors.cellnumber}</div>
//                 )}
//               </div>

//               <div>
//                 <label>Dirección: </label>
//                 <input
//                   type="text"
//                   id="address"
//                   name="address"
//                   placeholder="Zona donde vives"
//                   value={values.address}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={style.input}
//                 />
//                 {touched.address && errors.address && (
//                   <div className={style.error}>{errors.address}</div>
//                 )}
//               </div>

//               {/* <div>
//                 <label>
//                   ¿Deseas publicar un aviso o buscas a un profesional?
//                 </label>
//                 <select
//                   type="text"
//                   id="role"
//                   name="role"
//                   value={values.role}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={style.input}
//                 >
//                   <option>Selecciona tu respuesta</option>
//                   <option>Deseo publicar un aviso</option>
//                   <option>Deseo contactar con un profesional</option>
//                 </select>
//               </div>

//               <div>
//                 <label>
//                   Si deseas publicar un aviso, hablanos un poco de tu
//                   experiencia
//                 </label>
//                 <input
//                   type="text"
//                   id="experience"
//                   name="experience"
//                   placeholder="Cuéntanos un poco de tu experiencia laboral"
//                   value={values.experience}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={style.input}
//                 />
//                 {touched.experience && errors.experience && (
//                   <div className={style.error}>{errors.experience}</div>
//                 )}
//               </div> */}

//               <div>
//                 <label>Agrega tu foto: </label>
//                 <input
//                   type="text"
//                   id="image"
//                   name="image"
//                   placeholder="URL de tu foto"
//                   value={values.image}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={style.input}
//                 />
//               </div>

//               <div>
//                 <button type="submit" disabled={isSubmitting}className={style.button}>
//                   Crear usuario
//                 </button>
//               </div>

//               <div className={style.exito}>
//                 {sentForm && <p>¡Registro enviado con éxito! Por favor inicia sesión.</p>}
//               </div>
//             </div>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default RegistryForm;
