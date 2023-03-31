import React from "react";
import Coments from "../../Components/coments/coments";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
  const avisos = [
    {
      id: "1",
      Rubro: "Electricista",
      descripcion: "reparo en el dia tu cualquier desperfecto electrico",
      Zona: "Buenos Aires",
      imagen:
        "https://images.unsplash.com/photo-1606676539940-12768ce0e762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      valoracion: "4 manitos",
    },
    {
      id: "2",
      Rubro: "Plomero",
      descripcion: "reparo en el dia tu cualquier desperfecto de gas",
      Zona: "Cordoba",
      imagen:
        "https://images.unsplash.com/photo-1606676539940-12768ce0e762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      valoracion: "3 manitos",
    },
  ];

  const aviso = avisos[0];

  return (
    <div>
      <h1>{aviso.Rubro}</h1>
      <img src={aviso.imagen} alt={aviso.Rubro} />
      <p>{aviso.descripcion}</p>
      <p>{aviso.Zona}</p>
      <p>{aviso.valoracion}</p>
      <Link to="/home">
        <button>Volver al Home</button>
      </Link>
      <button onClick={() => console.log("Contratar Servicio")}>
        Contratar Servicio
      </button>
      <button onClick={() => console.log("Calificar Servicio")}>
        Calificar Servicio
      </button>

      <h6 className={styles.comments}>
        <Coments avisoId={aviso.id} />
      </h6>
    </div>
  );
};

export default Detail;

//uni