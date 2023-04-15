import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import SearchBarFilter from "../SercrBarFilter/SearchBarFilter";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardAdPost from "../CardAdPost/CardAdPost";
import { getServices, searchAction } from "../../Redux/Actions/searchAction";

export default function SearchResult() {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const preCatSelected = query.get("cat");
  const preinputSearch = query.get("search");
  useEffect(() => {
    dispatch(getServices());
    if (!preinputSearch && !preCatSelected) {
      dispatch(searchAction(preinputSearch, preCatSelected));
    }
    if (preinputSearch) {
      dispatch(searchAction(preinputSearch, null));
    }
    if (preCatSelected) {
      dispatch(searchAction(null, preCatSelected));
    }
  }, [dispatch, preCatSelected, preinputSearch]);
  const services = useSelector((state) => state.search.services);
  const search = useSelector((state) => state.search.search);

  return (
    <Container>
      <SearchBarFilter
        preinputSearch={preinputSearch}
        preCatSelected={preCatSelected}
      />
      <br />
      <hr />
      <br />
      <Container>
        <Grid container spacing={2} justifyContent={"center"}>
          {services.length &&
            search?.map((element, index) => (
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
    </Container>
  );
}
