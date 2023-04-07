import React, { useState } from 'react';
import {
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  TextField,
} from '@mui/material';

const RatingForm = () => {
  //const [userName, setUserName] = useState('');
  //const [contractId, setContractId] = useState('');
  
  const [userName, setUserName] = useState('miNombreDeUsuario');
  const [contractId, setContractId] = useState('miContrato123');
  const [showForm, setShowForm] = useState(true); 
  const [rating, setRating] = useState([]);
  //const [showForm, setShowForm] = useState(false);
  
  
  
  

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleContractIdChange = (event) => {
    setContractId(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (userName === 'miNombreDeUsuario' && contractId === 'miContrato123') {
      setShowForm(true);
    } else {
      alert('Lo siento, el nombre de usuario o el ID de contrato no coinciden.');
    }
  };
  

  const handleRatingChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setRating([...rating, value]);
    } else {
      setRating(rating.filter((item) => item !== value));
    }
  };

  const handleRatingSubmit = (event) => {
    event.preventDefault();
    alert('Gracias por calificar, ayudas al buen funcionamiento de ProManitas.');
    console.log(`La calificación es: ${rating.join(', ')}`);
  };

  if (!showForm) {
    return (
      <form onSubmit={handleFormSubmit}>
        <Typography variant="h6" component="h2">
          Por favor, ingrese su nombre de usuario y el ID de su contrato:
        </Typography>
        <TextField label="Nombre de usuario" value={userName} onChange={handleUserNameChange} />
        <TextField label="ID de contrato" value={contractId} onChange={handleContractIdChange} />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleRatingSubmit}>
      <Typography variant="h6" component="h2">
        ¿Cómo calificarías nuestro servicio?
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox value="1" onChange={handleRatingChange} />}
          label="Muy malo"
        />
        <FormControlLabel
          control={<Checkbox value="2" onChange={handleRatingChange} />}
          label="Malo"
        />
        <FormControlLabel
          control={<Checkbox value="3" onChange={handleRatingChange} />}
          label="Regular"
        />
        <FormControlLabel
          control={<Checkbox value="4" onChange={handleRatingChange} />}
          label="Bueno"
        />
        <FormControlLabel
          control={<Checkbox value="5" onChange={handleRatingChange} />}
          label="Excelente"
        />
      </FormGroup>
      <Button type="submit" variant="contained" disabled={rating.length === 0}>
        Enviar
      </Button>
    </form>
  );
};

export default RatingForm;


