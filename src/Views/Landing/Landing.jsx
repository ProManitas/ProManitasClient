import {
  AppBar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import icon from "./../../Images/icon.png";
import images from "./../../Images/LandingImages/imagesLanding";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/LoginButton/LoginButton";

const { carpentry, electric, gas, mecanic, pintor, plumber } = images;

const cards = [
  {
    id: 1,
    image: carpentry,
    title: "Carpinteria",
    description:
      "Obtenga la tranquilidad de saber que sus necesidades de mantenimiento de carpintería están en manos de expertos. Nuestros usuarios altamente capacitado está listo para hacer el trabajo por usted",
    route: "/home",
  },
  {
    id: 2,
    image: electric,
    title: "Electricistas",
    description:
      "Mantenga su hogar seguro y con energía con nuestros electricistas altamente capacitados. Confíe en nosotros para proporcionar soluciones eléctricas eficientes y confiables",
    route: "/home",
  },
  {
    id: 3,
    image: gas,
    title: "Gasistas",
    description:
      "La seguridad es lo primero cuando se trata de gas en su hogar. Confíe en nuestros gasistas calificados para realizar inspecciones y reparaciones de gas para mantener su hogar seguro y protegido",
    route: "/home",
  },
  {
    id: 4,
    image: mecanic,
    title: "Mecanicos",
    description:
      "Mantenga su automóvil funcionando sin problemas con nuestros mecánicos expertos. Desde el mantenimiento regular hasta las reparaciones importantes, podemos cuidar de su vehículo",
    route: "/home",
  },
  {
    id: 5,
    image: pintor,
    title: "Pintores",
    description:
      "Transforme su hogar con nuestros pintores profesionales. Con atención al detalle y un compromiso con la calidad, podemos darle a su hogar el aspecto que desea",
    route: "/home",
  },
  {
    id: 6,
    image: plumber,
    title: "Promeros",
    description:
      "Deje sus problemas de fontanería en nuestras manos. Nuestros plomeros profesionales están equipados para manejar cualquier problema de plomería que pueda tener en su hogar",
    route: "/home",
  },
];

export default function Landing() {
  const [isHover, setIsHover] = useState(0);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleMouseOver = (id) => {
    console.log("Tengo el mouse en la targeta con el id:", id);
    setIsHover(id);
  };

  const handleMouseOut = () => {
    setIsHover(0);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar>
        <Toolbar>
          <Grid justifyContent="center" alignItems="center" container>
            <Grid>
              {!isAuthenticated && (
                <Link>
                  <LoginButton />
                </Link>
              )}
              {!isAuthenticated && (
                <Link>
                  <Button
                    color="secondary"
                    onClick={() => loginWithRedirect({ screen_hint: "signup" })}
                  >
                    Registrarse
                  </Button>
                </Link>
              )}
              {!isAuthenticated && (
                <Link href="/home">
                  <Button color="secondary">Ingresar como invitado</Button>
                </Link>
              )}
              {isAuthenticated && (
                <Link href="/home">
                  <Button color="secondary">Ingresar</Button>
                </Link>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box marginTop={"5%"}>
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
              <Typography align="center" variant="h5" marginTop={"9%"}>
                ¿Necesita ayuda en el hogar? Encuentre soluciones en nuestra
                página web de servicios técnicos. Con una variedad de opciones
                de reparación y mantenimiento, encontrará lo que necesita para
                mantener su hogar funcionando sin problemas
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <img
              src={icon}
              alt="Promanitas Logo"
              placeholder="Promanitas"
              width={"100%"}
              height={"100%"}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        marginTop={"5%"}
      >
        <Grid container>
          {cards.map((card) => (
            <Grid item xs={12} md={2} key={card.id}>
              <Link href={card.route}>
                <Card
                  style={{ padding: 0 }}
                  onMouseOver={() => handleMouseOver(card.id)}
                  onMouseOut={handleMouseOut}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    height={250}
                    style={{ padding: 0 }}
                  />
                  <Slide
                    direction="down"
                    in={isHover === card.id}
                    mountOnEnter
                    unmountOnExit
                  >
                    <CardContent>
                      <Typography variant="h4">{card.title}</Typography>
                      <Typography variant="body2">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Slide>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

// import React, { useState } from "react";
// import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
// import { useSpring, animated } from "react-spring";

// const MyCard = () => {
//   const [cards, setCards] = useState([
//     { isExpanded: false },
//     { isExpanded: false },
//     { isExpanded: false },
//   ]);

//   const handleToggle = (index) => {
//     setCards((prevState) => {
//       const updatedCards = [...prevState];
//       updatedCards[index].isExpanded = !prevState[index].isExpanded;
//       return updatedCards;
//     });
//   };

//   const springProps = useSpring({
//     height: cards[0].isExpanded ? 500 : 200,
//     config: { duration: 300 },
//   });

//   return (
//     <>
//       {cards.map((card, index) => (
//         <Card key={index} onClick={() => handleToggle(index)}>
// <CardMedia
//   component="img"
//   height="200"
//   image="https://www.example.com/my-image.jpg"
// />
//           <animated.div style={springProps}>
//             <CardContent>
//               <Typography variant="body2">
//                 Información adicional de la tarjeta {index}
//               </Typography>
//             </CardContent>
//           </animated.div>
//         </Card>
//       ))}
//     </>
//   );
// };

// <Grid container>
//   <Grid item xs={6}>
//     <Box
//       sx={{
//         margin: "auto",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         alignContent: "center",
//       }}
//     >
//       <Typography align="center" variant="h1">
//         Bienvenido a promanitas
//       </Typography>
//       <Typography align="center" variant="h5">
//         Encuentra ayuda rápida para cualquier problema en tu hogar.{" "}
//       </Typography>
//       <Link href="/home">
//         <Button variant="contained"> Ingresar</Button>
//       </Link>
//     </Box>
//   </Grid>
//   <Grid item xs={6}>
//     <img src={icon} alt="Promanitas Logo" placeholder="Promanitas" />
//   </Grid>
// </Grid>
