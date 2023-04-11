import { useDispatch, useSelector } from "react-redux";
import Coments from "../../Components/coments/Coments";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Container, Typography, Divider, Grid, Box } from "@mui/material";
import Calificacion from "../../Components/Rating/rating";
import Maps from "../../Components/MapsComponent/Maps";
import { getDetail } from "../../Redux/Actions/detailAction";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const selectDetailData = useSelector((state) => ({
    adpostName: state.detail.adpost?.name,
    adpostDescription: state.detail.adpost?.description,
    adpostImage: state.detail.adpost?.image,
    userImage: state.detail.adpost?.user?.image,
    serviceName: state.detail.adpost?.service?.name,
    userCoordinates: state.detail.adpost?.user?.coordinates,
  }));

  return (
    <Container
      sx={{
        border: "4rem",
        borderStyle: "solid",
        borderColor: "#1976d2",
        marginTop: "250px",
      }}
    >
      <div>
        <Typography variant="h1" textAlign="center">
          {selectDetailData.adpostName}
        </Typography>
        <Typography variant="h6" textAlign="center">
          {selectDetailData.adpostDescription}
        </Typography>
        <img
          src={selectDetailData.adpostImage}
          alt={selectDetailData.adpostName}
        />
      </div>
      <Container
        sx={{ padding: "2rem", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
      >
        <Maps address={selectDetailData.userCoordinates} />
        <Typography variant="h5" textAlign="center">
          {selectDetailData.serviceName}
        </Typography>
        <img
          src={selectDetailData.userImage}
          alt="User"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
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
          <Calificacion calificacion="" />
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
        <a href={`/contrato/${id}`}>
          <Button variant="contained" sx={{ width: "100px", mr: "10px" }}>
            Contratar
          </Button>
        </a>
        <a href={`/calification/${id}`}>
          <Button
            variant="contained"
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
