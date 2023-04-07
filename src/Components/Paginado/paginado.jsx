import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pagination } from "../../Redux/Actions/paginationAction";
import CardContainer from "../../Components/CardsContainer/CardsContainer";
import { Button, Container, Pagination } from "@mui/material";


const PaginatedComponent=() => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const pageSize = 5; // establece el número de elementos por página
  const dispatch = useDispatch();
  const data = useSelector((state) => state.paginado.page);
  console.log("aca llega de paginado:", data )

  useEffect(() => {
    dispatch(pagination(currentPageNumber, pageSize));
  }, [dispatch, currentPageNumber, pageSize]);

  const handlePageChange=(pageNumber) => {
    setCurrentPageNumber(pageNumber);
  }
// pros.data ? pros.data.slice(0,6) : pros.data
  return (
    
    <div>
        <Pagination/>
    <Container>
      <ul>
        {data.data ? data.data.map( el => (
            <CardContainer 
            id = {el.id}
            image= {el.image}
            name = {el.name}
            />
        )) :data.data}
      </ul>
      <Button variant="contained" onClick={() => handlePageChange(currentPageNumber - 1)}>Anterior</Button>
      <Button variant="contained"  onClick={() => handlePageChange(currentPageNumber + 1)}>Siguiente</Button>
    </Container>
    </div>
  );
}

export default PaginatedComponent;
{/* <button
  onClick={() => handlePageChange(currentPageNumber + 1)}
  disabled={data.data.length < pageSize}
>
  Siguiente
</button> */}
