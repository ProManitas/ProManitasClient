import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";


const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",height: "60px",  display: "flex",
    justifyContent: "center",}}>
      <Container>
        <Toolbar>
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          
          </Typography>
         
          
          <Button href="/about" sx={{ my: 2, display: "block" }} color="secondary"> 
            QUIENES SOMOS
          </Button>
          <Button href="/contact" sx={{ my: 2, display: "block" }} color="secondary">
            CONTACTO
          </Button>
          <Button href="/terms" sx={{ my: 2, display: "block" }} color="secondary"> 
            TERMINOS Y CONDICIONES
          </Button>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Footer;













