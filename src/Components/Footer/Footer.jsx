import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { AppBar } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <div style={{ paddingTop: "50px" }}></div>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          width: "100%",
          marginTop: "auto",
          top: "auto",
          bottom: 0,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body1" color="inherit" align="center">
            © 2023 Todos los derechos reservados
          </Typography>
          <Button
            href="/about"
            sx={{ my: 2, display: "block" }}
            color="secondary"
          >
            QUIENES SOMOS
          </Button>
          <Button
            href="/contact"
            sx={{ my: 2, display: "block" }}
            color="secondary"
          >
            CONTACTO
          </Button>
          <Button
            href="/terms"
            sx={{ my: 2, display: "block" }}
            color="secondary"
          >
            TERMINOS Y CONDICIONES
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Footer;

// <Box
// sx={{
//   bgcolor: "#f5f5f5",
//   bottom: 0,
//   left: 0,
//   width: "100%",
//   height: "60px",
//   display: "flex",
//   justifyContent: "center",
// }}
// >
// <Container>
//   <Toolbar>
//     <Typography variant="body1" sx={{ flexGrow: 1 }}></Typography>

// <Button
//   href="/about"
//   sx={{ my: 2, display: "block" }}
//   color="secondary"
// >
//   QUIENES SOMOS
// </Button>
// <Button
//   href="/contact"
//   sx={{ my: 2, display: "block" }}
//   color="secondary"
// >
//   CONTACTO
// </Button>
// <Button
//   href="/terms"
//   sx={{ my: 2, display: "block" }}
//   color="secondary"
// >
//   TERMINOS Y CONDICIONES
// </Button>
//   </Toolbar>
// </Container>
// </Box>
