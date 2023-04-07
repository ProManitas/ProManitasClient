import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Coments from "../../Components/coments/coments";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Container, Typography, Divider, Grid, Box } from "@mui/material";
import Calificacion from "../../Components/Rating/rating";
import Maps from "../../Components/MapsComponent/Maps";
import { getDetails } from "../../Redux/Actions/detailAction";

const Detail = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(id)); 
  }, [dispatch, id]);

  const detail = useSelector((state) => state.detail.details);
  const user = useSelector((state) => state.detail.user);

  return (
    <Container
      sx={{ border: "4rem", borderStyle: "solid", borderColor: "#1976d2" }}
    >
      <div>
        <Typography variant="h1" textAlign="center">
          {detail.name}
        </Typography>

        <Typography variant="h6" textAlign="center">
          {detail.description}
        </Typography>

        <img src={detail.image} alt={detail.name} />
      </div>

      <Container
        sx={{ padding: "2rem", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
      >
        <Maps address={user.coordinates} />
      </Container>

      <div style={{ textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Calificacion calificacion="1" />
        </Box>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a href="/home">
          <Button variant="contained">Volver</Button>
        </a>
      </div>

      <Grid container justifyContent="center">
      <a href="/contrato">
  <Button variant="contained" sx={{ width: "100px", mr: "10px" }}>
    Contratar
  </Button>
</a>

<a href="/calification">
  <Button
    variant="contained"
    // onClick={() => console.log("Calificar Servicio")}
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
</a>

      </Grid>

      <Divider />
      <Coments />
    </Container>
  );
};

export default Detail;
//uni
