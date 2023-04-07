import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import PanToolIcon from "@mui/icons-material/PanTool";
import { Box, Button } from "@mui/material";

function RatingForm() {
  const [ratingValue, setRatingValue] = useState(-1);
  const [averageRating, setAverageRating] = useState(0);
 //para conexion del back
  // useEffect(() => {
  //   // Hacer una solicitud HTTP al backend para obtener el promedio de calificaciones
  //   axios
  //     .get("/api/adpost/1/calificacion/promedio")
  //     .then((response) => {
  //       setAverageRating(response.data.averageRating);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [ratingValue]); // Ejecutar la solicitud HTTP cada vez que ratingValue cambia

  const handleChange = (event) => {
    setRatingValue(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    // Hacer una solicitud HTTP al backend para enviar la calificación
    axios
      .post("/api/avisos/1/calificacion", {
        rating: ratingValue,
      })
      .then((response) => {
        // Actualizar el promedio de calificaciones
        setAverageRating(response.data.averageRating);
      })
      .catch((error) => {
        console.error(error);
      });

    alert(`Calificación enviada: ${ratingValue}`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: 24,
          }}
        >
          <Rating
            name="simple-controlled"
            value={ratingValue}
            precision={0.5}
            emptyIcon={
              <PanToolIcon sx={{ fontSize: 60, color: "#9e9e9e" }} />
            }
            icon={<PanToolIcon sx={{ fontSize: 60, color: "#1976d2" }} />}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
            align="center"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", fontSize: 24 }}>
          <input
            type="radio"
            name="rating"
            value="-1"
            checked={ratingValue === -1}
            onChange={handleChange}
            style={{ display: "none" }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", fontSize: 24 }}>
          <input
            type="radio"
            name="rating"
            value="0"
            checked={ratingValue === 0
}
            onChange={handleChange}
            style={{ display: "none" }}
          />
         
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", fontSize: 24 }}>
          <input
            type="radio"
            name="rating"
            value="1"
            checked={ratingValue === 1}
            onChange={handleChange}
            style={{ display: "none" }}
          />
          
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", fontSize: 24 }}>
          <input
            type="radio"
            name="rating"
            value="2"
            checked={ratingValue === 2}
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <label style={{ marginRight: "16px", marginLeft: "8px" }}>
           <p>Califica el aviso con la cantidad de ProManitas que merece!</p> 
           <p>Recuerda que así otros usuarios podrán decidir si lo contratan también!</p>
            
          </label>
        
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Button variant="contained" onClick={handleSubmit}>
            Enviar calificación
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default RatingForm;

