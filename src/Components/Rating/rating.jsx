import React from "react";
import { Rating, Box } from "@mui/material";
import PanToolIcon from "@mui/icons-material/PanTool";



function Calificacion(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", fontSize: 24 }}>
      <Rating
        name="simple-controlled"
        value={props.calificacion}
        readOnly
        precision={0.5}
        emptyIcon={<PanToolIcon sx={{ fontSize: 48, color: "#9e9e9e" }} />}
        icon={<PanToolIcon sx={{ fontSize: 48, color: "#1976d2" }} />}
        align="center"
      />
    </Box>
  );
}

export default Calificacion;








