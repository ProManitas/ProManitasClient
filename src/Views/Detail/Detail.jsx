import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Coments from "../../Components/ComentsDetail/ComentsDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Container, Typography, Divider, Grid, Box } from "@mui/material";
import Maps from "../../Components/MapsComponent/Maps";
import { getDetail } from "../../Redux/Actions/detailAction";
//import RatingForm from "../../Components/FormCalification/FormCalification"
import { Image } from "cloudinary-react";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  //const [ratingResult, setRatingResult] = useState(0);

  // const handleRatingResult = (result) => {
  //   setRatingResult(result); // Actualiza el estado con el resultado de la calificación
  // };

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
    <Container>
      <Typography variant="h1" textAlign="center">
        {selectDetailData.adpostName}
      </Typography>
      <Typography variant="h6" textAlign="center">
        {selectDetailData.adpostDescription}
      </Typography>
      <div style={{ display: 'flex' }}>
        <Image
          cloudName="dhlvgmhea"
          publicId={selectDetailData.adpostImage}
          alt={selectDetailData.adpostName}
          width="400"
          height="400"
          crop="fill"
        />
        <Container
          sx={{
            padding: '2rem',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Maps address={selectDetailData.userCoordinates} />
          <Typography variant="h5" textAlign="center">
            {selectDetailData.serviceName}
          </Typography>
          <Image
            cloudName="dhlvgmhea"
            publicId={selectDetailData.userImage}
            alt="User"
            width="100"
            height="100"
            crop="fill"
          />
        </Container>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        ></Box>
      </div>
  <Coments />
      
      
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
        </a><div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a href="/home">
          <Button variant="contained">Volver</Button>
        </a>
        
      </div>
      </Grid>
      <Divider />
      
    </Container>
  );
};
export default Detail;

//