import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import icon from "./../../Images/icon.png";

export default function Landing() {
  return (
    <Container
      sx={{
        border: 2,
        borderRadius: 5,
        boxShadow: 4,
        pb: 2,
        width: "100%",
        height: "100%",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Box
            sx={{
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Typography align="center" variant="h1">
              Bienvenido a promanitas
            </Typography>
            <Typography align="center" variant="h5">
              Encuentra ayuda rápida para cualquier problema en tu hogar.{" "}
            </Typography>
            <Link href="/home">
              <Button variant="contained"> Ingresar</Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={icon} alt="Promanitas Logo" placeholder="Promanitas" />
        </Grid>
      </Grid>
    </Container>
  );
}

{
  /* <Button variant="outlined">
<Link underline="none">Ingresar</Link>
</Button> */
}
