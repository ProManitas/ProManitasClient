import React from "react";
import Coments from "../../Components/coments/coments";
import { Link, useParams } from "react-router-dom";
import formCalification from "../../Components/FormCalification/FormCalification";

//import styles from "./Detail.module.css";
import Button from "@mui/material/Button";
import { Container, Typography, Divider, Grid, Box } from "@mui/material";
//import { ButtonBase } from "@mui/material";
import Calificacion from "../../Components/Rating/rating";
//import { Rating } from '@mui/material'

const Detail = () => {
  const avisos = [
    // {
    //   id: 1,
    //   Rubro: "Electricista",
    //   descripcion: "Reparo en el día cualquier desperfecto eléctrico",
    //   Zona: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2__yHupQ0acjXyNuvWhiA3mkCCTajzQsXGQ&usqp=CAU",
    //   imagen:
    //     "https://us.123rf.com/450wm/ifong/ifong1508/ifong150800027/44218557-diversos-tipos-de-herramientas-de-plomer%C3%ADa-en-el-fondo-blanco.jpg",
    //   valoracion: 4,
    // },
    // {
    //   id: 2,
    //   Rubro: "Plomero",
    //   descripcion:
    //     "Reparo en el día tu cualquier desperfecto en tu instalación",
    //   Zona: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2__yHupQ0acjXyNuvWhiA3mkCCTajzQsXGQ&usqp=CAU",

    //   imagen:
    //     "https://us.123rf.com/450wm/ifong/ifong1508/ifong150800027/44218557-diversos-tipos-de-herramientas-de-plomer%C3%ADa-en-el-fondo-blanco.jpg",
    //   valoracion: 5,
    // },const users = [
    {
      id: 1,
      Rubro: "Carpinteria",
      Zona: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2__yHupQ0acjXyNuvWhiA3mkCCTajzQsXGQ&usqp=CAU",
      descripcion:
        "Resuelvo todo tipo de problemas, armado y reparacion de techos",
      imagen:
        "https://www.shutterstock.com/image-photo/carpenter-worker-work-carpentry-workshop-260nw-1924568534.jpg",
      valoracion: 5,
    },
    {
      id: 2,
      Rubro: "Gasista matriculado",
      Zona: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2__yHupQ0acjXyNuvWhiA3mkCCTajzQsXGQ&usqp=CAU",
      descripcion: "Solución inmediata, colocación y reparación de cañerias",
      imagen:
        "https://us.123rf.com/450wm/ifong/ifong1508/ifong150800027/44218557-diversos-tipos-de-herramientas-de-plomer%C3%ADa-en-el-fondo-blanco.jpg",
      valoracion: 3,
    },
    {
      id: 3,
      Rubro: "Plomero",
      Zona: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2__yHupQ0acjXyNuvWhiA3mkCCTajzQsXGQ&usqp=CAU",
      descripcion:
        "Intalacion de cañeria de agua fria y caliente con herramientas varias",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_947814-MLA51848199535_102022-O.webp",
      valoracion: 1,
    },
    {
      id: 4,
      Rubro: "Electricista matriculado",
      Zona: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2__yHupQ0acjXyNuvWhiA3mkCCTajzQsXGQ&usqp=CAU",
      descripcion:
        "Arreglos en general las 24 horas, intalacion en locales y planos certificados",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_899276-MLA50624277114_072022-O.webp",
      valoracion: 1,
    },
    {
      id: 5,
      Rubro: "Pintor",
      Zona: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2__yHupQ0acjXyNuvWhiA3mkCCTajzQsXGQ&usqp=CAU",
      descripcion:
        "Arreglamos problemas de humedad, pintamos urgente para entrega de departamento",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_288011-MLA20450208544_102015-O.webp",
      valoracion: 2,
    },
    {
      id: 6,
      Rubro: "Mecanico",
      Zona: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2__yHupQ0acjXyNuvWhiA3mkCCTajzQsXGQ&usqp=CAU",
      descripcion: "Urgencia las 24 horas",
      imagen:
        "https://www.shutterstock.com/image-photo/young-professional-technician-car-mechanic-260nw-2150428379.jpg",
      valoracion: 2,
    },
  ];

  const { id } = useParams(); // Obtener el ID desde la URL
  const aviso = avisos.find((aviso) => aviso.id === parseInt(id)); //avisos.find((aviso) => aviso.id === parseInt(id));;

  return (
    <Container
      sx={{ border: "4rem", borderStyle: "solid", borderColor: "#1976d2" }}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Calificacion calificacion={aviso.valoracion} />
          </Box>
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

          <Link to="/construction">
            <Button
              variant="contained"
              onClick={() => console.log("Calificar Servicio")}
              sx={{
                padding: "5px 10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#0062cc" },
              }}
            >
              Calificar
            </Button>
          </Link>
        </Grid>
        <Divider />
        <Coments />
      </div>
    </Container>
  );
};

export default Detail;
//uni
