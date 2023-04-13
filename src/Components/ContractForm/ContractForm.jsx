import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendContract, setContractId } from '../../Redux/Actions/contractAction';
import { TextField, Button, Checkbox, Grid, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContractForm = ({ userId, advertisementId }) => {
  const [contractData, setContractData] = useState({
    DateJob: '',
    contractDetails: '', // Cambio en el nombre del campo
    Amount: '',
    rating_commitment: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    const fieldValue = event.target.type === 'checkbox' ? checked : value;

    setContractData({
      ...contractData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(sendContract(userId, advertisementId, contractData))
      .then(() => {
        // ID de contrato en Redux
        dispatch(setContractId(userId, advertisementId));
        
        navigate('/checkout');
      });
  };



  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Nombre del Usuario"
            name="userName"
            value={contractData.userName}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
        <Grid item xs={12}>
  <TextField
    label="Detalles del Contrato"
    name="contractDetails"
    value={contractData.contract_Details}
    onChange={handleChange}
    required
    fullWidth
    multiline
    rows={4}
    placeholder="Trabajo de plomería en calefón..."
  />
</Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Monto Acordado"
            name="Amount"
            value={contractData.Amount}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Fecha acordada para realizar el trabajo"
            type="date"
            name="DateJob"
            value={contractData.DateJob}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
        <FormControlLabel
        control={
          <Checkbox
            name="rating_commitment"
            checked={contractData.rating_commitment}
            onChange={handleChange}
            required
          />
        }
        label="Me comprometo a calificar una vez hecho el trabajo"
      />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Enviar Contrato
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContractForm;

