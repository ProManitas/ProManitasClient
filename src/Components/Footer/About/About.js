import * as React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const grupoPromanitas = [
  {
    image: "https://avatars.githubusercontent.com/u/105263588?v=4 ",
    name: "Julian",
    description: "Desarrolador FullStack",
    linkedin: "",
    github: "https://github.com/Srezequielr",
  },
  {
    image: "https://avatars.githubusercontent.com/u/101506122?v=4",
    name: "Manuel",
    description: "Desarrolador FullStack",
    linkedin: "",
    github: "https://github.com/Zetta94",
  },
  {
    image:
      "https://media.licdn.com/dms/image/D4D03AQE_V2R6C2wnmg/profile-displayphoto-shrink_800_800/0/1667335985931?e=2147483647&v=beta&t=hJg61A-PUX_Qun4bybEG1UOwuDgvl2xnEplCrCJAJGU ",
    name:"Mariana",
    description: "Desarrolador FullStack",
    linkedin: "https://www.linkedin.com/in/marigaby-flores-0a2540255",
    github: "https://github.com/Marigabyfc",
  },
  {
    image: "https://avatars.githubusercontent.com/u/98289398?v=4 ",
    name: "Lucio",
    description: "Desarrolador FullStack",
    linkedin: "",
    github: "https://github.com/lucioSantia",
  },
  {
    image: "https://avatars.githubusercontent.com/u/104286335?v=4 ",
    name: "Kevin",
    description: "Desarrolador FullStack",
    linkedin: "",
    github: "https://github.com/RaiderAlf",
  },
  {
    image: " https://avatars.githubusercontent.com/u/111536207?v=4",
    name: "Maria",
    description: "Desarrolador FullStack",
    linkedin: "",
    github: "https://github.com/Mlobeto/",
  },
  {
    image:
      "https://avatars.githubusercontent.com/u/46719844?v=4 ",
    name: "Gabriela",
    description: "Desarrolador FullStack",
    linkedin:
      "https://www.linkedin.com/in/gabriela-acevedo-512414a9/?locale=en_US",
    github: "https://github.com/gabydesi",
  },
  {
    image:
      "https://avatars.githubusercontent.com/u/105172384?s=400&u=b7485ebd3331e4bd9894315b41ddd316b0b2713f&v=4 ",
    name: "Yanina ",
    description: "Desarrolador FullStack",
    linkedin: "https://www.linkedin.com/in/yanina-zurcher-1945b6254",
    github: "https://github.com/yanirc1981",
  },
];

const theme = createTheme();
export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={16}>
          {grupoPromanitas.map((grupoPromanitas) => (
            <Grid item key={grupoPromanitas} xs={12} sm={6} md={4}>
              <Card style={{ backgroundColor: "#f2f2f2" }}>
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={grupoPromanitas.image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {grupoPromanitas.name}
                  </Typography>
                  <Typography>{grupoPromanitas.description}</Typography>
                </CardContent>
                <CardActions style={{ paddingTop: 5 }} disableSpacing>
                  <IconButton
                    
                    aria-label="github"
                    href={grupoPromanitas.github}
                    target="_blank"
                  >
                    <GitHubIcon color="black"  /> {/*secondary */}
                  </IconButton>
                  <IconButton
                    aria-label="linkedin"
                    href={grupoPromanitas.linkedin}
                    target="_blank"
                  >
                    <LinkedInIcon color="black" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
