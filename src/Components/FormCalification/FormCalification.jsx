import React, { useState, useEffect } from "react";
//import axios from "axios";
import {Rating} from "@mui/material";
import PanToolIcon from "@mui/icons-material/PanTool";
import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

function RatingForm({onRatingResult}) {

  const [ratingValue, setRatingValue] = useState(0);
  //const [, setAverageRating] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setRatingValue(parseFloat(event.target.value));
  };

  useEffect(() => {
    // const postData = async () => {
    //   const rating = parseFloat(ratingValue);
    //   if (!isNaN(rating)) {
    //     try {
    //       const response = await axios.post(`/api/adpost/${id}/`, {
    //         rating: ratingValue,
    //       });
    //       setAverageRating(response.data.averageRating);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    // };
    // postData();
  }, [ratingValue, id]); //  solicitud HTTP cada vez que ratingValue cambia

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  
    if (!isNaN(ratingValue)) {
      
        // const response = await axios.post(`/adpost/${id}/`, {
        //   rating: ratingValue,
        // });
        // setAverageRating(response.data.averageRating);
        onRatingResult(ratingValue);
        
      alert(`Calificación enviada: ${ratingValue}`);
      navigate(-1);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
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
              precision= {0}
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
              value={0}
              checked={ratingValue === 0}
              onChange={handleChange}
              style={{ display: "none" }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", fontSize: 24 }}>
            <input
              type="radio"
              name="rating"
              value={1}
              checked={ratingValue === 1}
              onChange={handleChange}
              style={{ display: "none" }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", fontSize: 24 }}>
            <input
              type="radio"
              name="rating"
              value={2}
              checked={ratingValue === 2}
              onChange={handleChange}
              style={{ display: "none" }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", fontSize: 24 }}>
          <input
            type="radio"
            name="rating"
            value={3}
            checked={ratingValue === 3}
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
    </form>
  );
}

export default RatingForm;

