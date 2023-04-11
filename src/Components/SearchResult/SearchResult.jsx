import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import SearchBarFilter from "../SercrBarFilter/SearchBarFilter";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardAdPost from "../CardAdPost/CardAdPost";
import { getServices } from "../../Redux/Actions/searchAction";

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

  return (
    <Container>
      <SearchBarFilter preinput={flag} />
      <br />
      <hr />
      <br />
      <Container>
        <Grid container spacing={2} justifyContent={"center"}>
          {services.length && search?.map((element, index) => (
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
