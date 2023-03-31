import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import icon from "./../../Images/icon.png";

export default function Landing() {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={5} margin="auto" >
          <CardMedia
            style={{
              height: "100%",
              width: "100%",
            }}
            component="img"
            image={icon}
            title="Imagen"
          />
        </Grid>
      <Typography variant="h1">¡Bienvenido a Promanitas!</Typography>
      </Grid>
    </Container>
  );
}

{
  /* <Button variant="outlined">
<Link underline="none">Ingresar</Link>
</Button> */
}
