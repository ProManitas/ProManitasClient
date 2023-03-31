import React, { useState } from "react";
import styles from "./coments.module.css";


const Coments = () => {
  const [comentario, setComent] = useState("");
  const [comentarios, setComents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComents([...comentarios, comentario]);
    setComent("");
  };

  return (
    <div>
      <h2>Comentarios</h2>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="comentario">
          Agregar comentario:
        </label>
        <br />
        <textarea
          className={styles.textarea}
          id="comentario"
          value={comentario}
          onChange={(e) => setComent(e.target.value)}
        />
        <br />
        <button className={styles.button} type="submit">
          Enviar comentario
        </button>
      </form>
      <ul>
        {comentarios.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
        }  

export default Coments;
//2