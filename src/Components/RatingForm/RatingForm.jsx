import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

const RatingForm = ({ open, handleClose }) => {
  const classes = useStyles();
  const [value, setValue] = useState("1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    // Add code to submit the rating
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Calificar Servicio</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Seleccione la cantidad de estrellas que desea otorgar.
        </DialogContentText>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Calificación</FormLabel>
          <RadioGroup
            aria-label="rating"
            name="rating"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="1" control={<Radio />} label="1 estrella" />
            <FormControlLabel value="2" control={<Radio />} label="2 estrellas" />
            <FormControlLabel value="3" control={<Radio />} label="3 estrellas" />
            <FormControlLabel value="4" control={<Radio />} label="4 estrellas" />
            <FormControlLabel value="5" control={<Radio />} label="5 estrellas" />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RatingForm;


//import RecommendIcon from '@mui/icons-material/Recommend';