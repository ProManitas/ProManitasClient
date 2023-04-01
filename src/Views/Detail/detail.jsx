import React from "react";
import Coments from "../../Components/coments/coments";
import { Link } from "react-router-dom";
//import styles from "./Detail.module.css";
import Button from "@mui/material/Button";
import { Container, Typography, Divider, Grid } from "@mui/material";
//import { ButtonBase } from "@mui/material";
import Calificacion from "../../Components/Rating/rating";
//import { Rating } from '@mui/material'



const Detail = () => {
  const avisos = [
    {
      id: "1",
      Rubro: "Electricista",
      descripcion: "Reparo en el día cualquier desperfecto eléctrico",
      Zona: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2__yHupQ0acjXyNuvWhiA3mkCCTajzQsXGQ&usqp=CAU",
      imagen:
        "https://us.123rf.com/450wm/ifong/ifong1508/ifong150800027/44218557-diversos-tipos-de-herramientas-de-plomer%C3%ADa-en-el-fondo-blanco.jpg",
      valoracion: 4,
    },
    {
      id: "2",
      Rubro: "Plomero",
      descripcion:
        "Reparo en el día tu cualquier desperfecto en tu instalación",
      Zona: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2__yHupQ0acjXyNuvWhiA3mkCCTajzQsXGQ&usqp=CAU",

      imagen:
        "https://us.123rf.com/450wm/ifong/ifong1508/ifong150800027/44218557-diversos-tipos-de-herramientas-de-plomer%C3%ADa-en-el-fondo-blanco.jpg",
      valoracion: 5,
    },
  ];

  const aviso = avisos[1];

  return (
    <Container
      sx={{ border: "6rem", borderStyle: "solid", borderColor: "#bc2525" }}
    >
      <div>
        <Typography variant="h4" textAlign="center">
          {aviso.Rubro}
        </Typography>

        

        <Typography variant="h6" textAlign="center">
          {aviso.descripcion}
        </Typography>
        <Grid
  container
  spacing={10}
  justifyContent="center"
  alignItems="center"
>
  <Grid item xs={7} sm={20} sx={{ maxWidth: 400 }}>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={aviso.imagen}
        alt={aviso.Rubro}
        style={{
          objectFit: "cover",
          width: "40%",
          height: "40%",
          boxShadow: "0 0 5px rgba(40, 37, 37, 0.3)",
          margin: "auto",
          position: "relative",
          left: "0",
          right: "0",
        }}
      />
    </div>
  </Grid>
</Grid>


        <Container />

        <div
          style={{
            objectFit: "cover",
                width: "30%",
                height: "30%",
                display: "center",
                boxShadow: "0 0 5px rgba(40, 37, 37, 0.3)",
                margin: "auto",
                position: "relative",
                left: "0",
                right: "0",
          }}
        >
          <img
            src={aviso.Zona}
            alt="Zona"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
       
        <div style={{ textAlign: "center" }}>
  <Calificacion calificacion={aviso.valoracion} />
</div>


        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link to="/home">
            <Button variant="contained">Volver</Button>
          </Link>
        </div>

        <Grid container justifyContent="center">
        <Link to="/contrato">
  <Button variant="contained" sx={{ width: "100px", mr: "10px" }}>
    Contratar
  </Button>
</Link>

  <Button variant="contained" onClick={() => console.log("Calificar Servicio")} sx={{ padding: "5px 10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", "&:hover": { backgroundColor: "#0062cc" } }}>
    Calificar
  </Button>
</Grid>
        <Divider />
        <Coments />
      </div>
    </Container>
  );
};

export default Detail;
//uni
