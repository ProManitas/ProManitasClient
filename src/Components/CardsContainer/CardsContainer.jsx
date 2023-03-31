import  React from "react";
import logo from "./logo.png"
// import { useHistory } from 'react-router-dom';

// import ".CardsConteiner.css";

const CardCont = ({image , id, address}) => {

//imagen, valoracion, descripcion,rubro(oficio),ubicacion o zona 


    // let history = useHistory();
// const job = ["carpintero","electricista", "plomero", "cerrajero", "remolcador", "gomero"]
    // const rutaDetalle = (e) => {
    //     history.push(`/home/${id}`)
    // } 
    //cambiar foto de perfil
    return (
        <div>
            <h3>Oficio:....</h3>
            <img src = {logo} alt = "img not found" />
            <h4>{address}</h4>
            <h4>Puntuacion:</h4>


        </div>
    )
}

export default CardCont;