import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Toolbar,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchAction } from "../../Redux/Actions/searchAction";

export default function SearchBarFilter({ preinput }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  // const [service, setService] = useState("");

  useEffect(() => {
    if (preinput) {
      setInput(preinput);
      dispatch(searchAction(preinput));
    }
  }, [dispatch, preinput]);

  const changeHandler = (event) => {
    const input = event.target.value;
    setInput(input);
  };

  const changeSelect = (event) => {
    const selected = event.target.value;
    console.log("Cambie a:", selected);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    if (input) {
      dispatch(searchAction(input));
      navigate(`/home/search?query=${input}`);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          marginTop: "1%",
          background: theme.palette.primary.main,
          paddingBottom: "1.5%",
          paddingTop: "1.5%",
          borderRadius: "5px",
        }}
      >
        <Toolbar>
          <Grid container alignItems={"center"} spacing={2}>
            <FormControl>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="Buscar"
                  sx={{
                    alignItems: "center",
                    "& .MuiInputLabel-shrink": {
                      color: "darkgray !important",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "darkgray",
                      },
                      height: "40px",
                      "& fieldset": {
                        height: "60px",
                      },
                    },
                  }}
                  inputProps={{
                    style: { paddingTop: "29px" },
                  }}
                  onChange={changeHandler}
                  value={input}
                />
                <IconButton onClick={searchHandler} size="large">
                  <Search />
                </IconButton>
              </Grid>
            </FormControl>
            <FormControl>
              <Grid
                item
                sx={{ height: "40px", display: "flex", alignItems: "center" }}
              >
                <InputLabel
                  sx={{
                    "&.Mui-focused": {
                      color: "darkgray",
                    },
                    "& .MuiOutlinedLabel-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "darkgray",
                      },
                    },
                  }}
                >
                  Rubro
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  variant="filled"
                  onChange={changeSelect}
                  sx={{
                    width: "8em",
                    height: "55px",
                    marginTop: "10%",
                    paddingBottom: "15px",
                    "& .MuiSelect-root": {
                      "& .MuiInputBase-root": {
                        alignItems: "center",
                      },
                    },
                  }}
                >
                  <MenuItem value="undefined">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Plomeria"}>Plomeria</MenuItem>
                  <MenuItem value={"Albañileria"}>Albañileria</MenuItem>
                  <MenuItem value={"Cerrajeria"}>Cerrajeria</MenuItem>
                  <MenuItem value={"Gasista"}>Gasista</MenuItem>
                  <MenuItem value={"Pintura"}>Pintura</MenuItem>
                  <MenuItem value={"Servicios Generales"}>Servicios Generales</MenuItem>
                </Select>
              </Grid>
            </FormControl>
          </Grid>
        </Toolbar>
      </Container>
    </ThemeProvider>
  );
}
