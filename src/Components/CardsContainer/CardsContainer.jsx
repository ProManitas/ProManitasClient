import  React from "react";
// import  {Link} from "react-router-dom"
// import detail from "../../Views/Detail/detail.jsx"

import "./Card.css";

const CardCont = ({Rubro, imagen, id}) => {
    



   
    return (
        // <Link to={`/detail/${id}`}>
        <div className="Card" >
            <div className="margen">
            <h3 className="parrafo">{Rubro}</h3>
            </div>
            <img className="img" src = {imagen} alt = "img not found" />


        </div>
    //    </Link>
    )
}

export default CardCont;