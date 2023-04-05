import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Coments from "../../Components/coments/coments";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Container, Typography, Divider, Grid, Box } from "@mui/material";
import Calificacion from "../../Components/Rating/rating";
import Maps from "../../Components/MapsComponent/Maps";
import { getDetails, getUserAddress} from "../../Redux/Actions/detailAction";


const Detail = () => {


  // "id": 1,
  // 		"name": "Crawler",
  // 		"description": "http://dummyimage.com/187x100.png/ff4444/ffffff",
  // 		"image": "false",

  const { id } = useParams(); // Obtener el ID desde la URL
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const detail = useSelector((state) => state.detail);
  const address = getUserAddress()
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
        <Grid
          container
          spacing={10}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={7} sm={20} sx={{ maxWidth: 400 }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={detail.image}
                alt={detail.name}
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

        <Container
  sx={{ padding: "2rem", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
>

  <Maps address={address} />
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
          <Link to="/home">
            <Button variant="contained">Volver</Button>
          </Link>
        </div>

        <Grid container justifyContent="center">
          <Link to={`/contrato/${id}`}>
            <Button variant="contained" sx={{ width: "100px", mr: "10px" }}>
              Contratar
            </Button>
          </Link>

          <Link to="/calification/:id">
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
