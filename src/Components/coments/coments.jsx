import { Button, Container, TextareaAutosize, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Coments = () => {
  const [comentario, setComent] = useState("");
  const [comentarios, setComents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComents([...comentarios, comentario]);
    setComent("");
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ bgcolor: "#fff", p: 3, borderRadius: 2, boxShadow: "0px 3px 6px rgba(0,0,0,0.16)" }}>
        <Typography variant="h5" gutterBottom>
          Preguntas y respuestas
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={8}>
              <TextareaAutosize
               aria-label="comentario"
               placeholder="Escribe tu pregunta aquí"
               value={comentario}
               onChange={(e) => setComent(e.target.value)}
               rows={6}
               cols={50}
               sx={{ width: "100%", p: 1, my: 2, borderRadius: 1, border: "1px solid #ccc" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button variant="contained" type="submit" fullWidth>
                Envía tu Pregunta
              </Button>
            </Grid>
          </Grid>
        </form>
        <ul sx={{ listStyleType: "none", m: 0, p: 0 }}>
          {comentarios.map((c, i) => (
            <li key={i} sx={{ borderBottom: "1px solid #ccc", p: 2 }}>
              {c}
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  );
};


export default Coments;
