import React from "react";
import './FormPosteoStyle.css';
import { useState } from "react";

//const rubros =[carpinteria, gasista, plomeria,electricista, pintura]

const initialForm ={
    rubro:"",
    imagen:"",
    zona:"",
    descripcion:"",

};

const FormPosteo = ()=>{

const [form, setForm] = useState(initialForm);

const handleChange = (e)=>{
    setForm({
        ...form,
        [e.target.name] : e.target.value,
    });
};
const handleSubmit = (e)=>{
    e.preventDefault();

    //validaciones del formulario
    //si todo es correcto enviamos e form
};

    return (
        <div className = "container">
            <h3 className ="form">Realizar Publicacion</h3>
            <form className ="form" onSubmit={handleSubmit}>
            <label>Rubro:</label>
                <input  className ="input"
                type = "text"
                name = "rubro"
                placeholder = "Rubro"
                onChange ={handleChange}
                value = {form.rubro.toLowerCase()}/>
                <label>Imagen:</label>
                <input  className ="input"
                type = "img"
                name = "imagen"
                placeholder = "Imagen"
                onChange ={handleChange}
                value = {form.imagen}/>
                <label>Zona:</label>
                <input  className ="input"
                type = "text"
                name = "zona"
                placeholder = "Zona"
                onChange ={handleChange}
                value = {form.zona}/>
                <label>Descripcion:</label>
             <textarea className ="input" name="descripcion"rows="3" cols="15"></textarea>
             <input type="submit" value="Publicar"/>
               


            </form>

        </div>
    )
};

export default FormPosteo;