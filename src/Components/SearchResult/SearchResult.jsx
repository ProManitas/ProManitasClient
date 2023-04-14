import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBarFilter from "../SercrBarFilter/SearchBarFilter";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardAdPost from "../CardAdPost/CardAdPost";
import { getServices } from "../../Redux/Actions/searchAction";
import PaginatedResult from "../PaginatedResult/PaginatedResult";

export default function SearchResult() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);
  const services = useSelector((state) => state.search.services);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const flag = query.get("query");
  const search = useSelector((state) => state.search.search);

  // lógica de paginado
  const [searchPerPage, setSearchPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastService = currentPage * searchPerPage;
  const indexOfFirstService = indexOfLastService - searchPerPage;
  const currentSearch = search.slice(indexOfFirstService, indexOfLastService);

  const paginatedFunc = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <SearchBarFilter preinput={flag} />
      <br />
      <hr />
      <br />
      <Container>
        <Grid container spacing={2} justifyContent={"center"}>
          {currentSearch.length > 0 &&
            currentSearch.map((element, index) => (
              <CardAdPost
                key={index}
                id={element.id}
                name={element.name}
                services={services}
                serviceID={element.ServiceId}
                image={element.image}
              />
            ))}
        </Grid>
      </Container>
      {search.length > 0 && (
        <PaginatedResult
          searchPerPage={searchPerPage}
          totalServices={search.length}
          paginatedFunc={paginatedFunc}
        />
      )}
    </Container>
  );
}
