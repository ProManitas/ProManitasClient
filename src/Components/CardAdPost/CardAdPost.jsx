import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export default function CardAdPost({
  name,
  services,
  image,
  ServiceId,
  id,
}) {
  let cardService = "";
if (!ServiceId) {
  cardService = services.length >= 6 ? services[5].name : '';
} else {
  cardService = services?.find((service) => service.id === ServiceId)?.name || '';
}

const { isAuthenticated } = useAuth0();
    
    return (

      <Grid item xs={12} sm={6} md={4}>
      {isAuthenticated ? (
        <Link href={`/detail/${id}`}>
          <Card>
            <CardContent>
              <Typography variant="h5">{cardService}</Typography>
              <Typography variant="h6">{name}</Typography>
              <CardMedia
                component="img"
                image={image}
                height={250}
                style={{ padding: 0 }}
              ></CardMedia>
            </CardContent>
          </Card>
        </Link>
      ) : (
        <div onClick={() => alert("Debes iniciar sesión o registrarte para poder continuar")}>
          <Card>
            <CardContent>
              <Typography variant="h5">{cardService}</Typography>
              <Typography variant="h6">{name}</Typography>
              <CardMedia
                component="img"
                image={image}
                height={250}
                style={{ padding: 0 }}
              ></CardMedia>
            </CardContent>
          </Card>
        </div>
      )}
    </Grid>
  
  );
}

  
