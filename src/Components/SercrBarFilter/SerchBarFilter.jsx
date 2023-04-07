import { Search, TextFields } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Toolbar,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

export default function SearchBarFilter(props) {
  const theme = useTheme();

  const [input, setInput] = useState("");
  const [service, setService] = useState("");

  const changeHandler = (event) => {
    const input = event.target.value;
    setInput(input);
  };

  const changeSelect = (event) => {
    const selected = event.target.value;
    console.log("Cambie a:", selected);
  };

  const searchHandler = () =>{
    console.log("hago la Busqueda con:", input);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          marginTop: "6%",
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
                  <Search/>
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
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Plumber"}>Plumber</MenuItem>
                  <MenuItem value={"Carpentry"}>Carpentry</MenuItem>
                  <MenuItem value={"Electric"}>Electric</MenuItem>
                  <MenuItem value={"gasman"}>Gasista</MenuItem>
                  <MenuItem value={"Mecanic"}>Mecanico</MenuItem>
                  <MenuItem value={"painter"}>Pintor</MenuItem>
                </Select>
              </Grid>
            </FormControl>
          </Grid>
        </Toolbar>
      </Container>
    </ThemeProvider>
  );
}

// justifyContent: "center",

// "&.Mui-focused": {
//   color: "darkgray",
//   marginTop: "10px",
//   transform: 'translate(0, -6px) scale(0.75)',
// },
// marginTop: 1,
// "& .MuiOutlinedLabel-root": {
//   "&.Mui-focused fieldset": {
//     borderColor: "darkgray",
//   },
//   height: "40px",
//   marginTop: "10px",
//   "& fieldset": {
//     height: "60px",
//   },
// },
