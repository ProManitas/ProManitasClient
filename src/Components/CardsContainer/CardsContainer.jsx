import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";


const CardCont = ({ id, Rubro, imagen, descripcion }) => {
  return (
    <div className="Card">
      <div className="margen">
        <h3 className="parrafo">{Rubro}</h3>
      </div>
      <Link to={`/detail/${id}`}>
        <img className="img" src={imagen} alt="img not found" />
        
      </Link>
      <h5 className="descripcion">{descripcion}</h5>
    </div>
  );
};

export default CardCont;