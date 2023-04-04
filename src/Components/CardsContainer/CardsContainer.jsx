import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";


const CardCont = ({ UserId, name, description }) => {
  return (
    <div className="Card">
      <div className="margen">
        <h3 className="parrafo">{name}</h3>
      </div>
      <Link to={`/detail/${UserId}`}>
        <img className="img" src="https://tse1.mm.bing.net/th?id=OIP.cMYrFwWr8oHCYBddiNboCwHaHa&pid=Api&P=0" alt="img not found" />
        
      </Link>
      <h5 className="descripcion">{description}</h5>
    </div>
  );
};

export default CardCont;