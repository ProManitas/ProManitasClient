import  React from "react";
import logo from "./logo.png"
// import { useHistory } from 'react-router-dom';

import "./Card.css";

const CardCont = ({rubro, zona, descripcion, image}) => {

//imagen, valoracion, descripcion,rubro(oficio),ubicacion o zona 


    // let history = useHistory();
// const job = ["carpintero","electricista", "plomero", "cerrajero", "remolcador", "gomero"]
    // const rutaDetalle = (e) => {
    //     history.push(`/home/${id}`)
    // } 
    //cambiar foto de perfil
    // console.log("esto es",rubro)
    return (
        <div className="Card">
            <h3>{rubro}</h3>
            <img className="img" src = {image} alt = "img not found" />
            <h4>{zona}</h4>
            <h4>{descripcion}</h4>


        </div>
    )
}

export default CardCont;