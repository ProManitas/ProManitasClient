import React from "react";
// import PaginatedComponent from "../../Components/Paginado/paginado";
// import Footer from "../../Components/Footer/Footer.js";
import { Container } from "@mui/material";
import SearchBarFilter from "../../Components/SercrBarFilter/SearchBarFilter";
import AllCardsContainer from "../../Components/AllCardsContainer/AllCardsContainer";

const Home = () => {
  return (
    <Container>
      <SearchBarFilter />
      <br />
      <hr />
      <br />
      <AllCardsContainer />
    </Container>
  );
};

export default Home;
