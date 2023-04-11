import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendContract, setContractId } from '../../Redux/Actions/contractAction'; // 
import { TextField, Button } from '@mui/material';


const ContractForm = ({ userId, advertisementId }) => {
  const [contractData, setContractData] = useState({
    userName: '',
    contractDetails: '',
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setContractData({
      ...contractData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar el contrato al backend
    dispatch(sendContract(userId, advertisementId, contractData));
    // Establecer el ID de contrato en el estado de Redux
    dispatch(setContractId(userId, advertisementId));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombre del Usuario"
        name="userName"
        value={contractData.userName}
        onChange={handleChange}
        required
      />
      <TextField
        label="Detalles del Contrato"
        name="contractDetails"
        value={contractData.contractDetails}
        onChange={handleChange}
        required
      />
      {/* Otros campos de contrato, si es necesario */}
      <Button type="submit">Enviar Contrato</Button>
    </form>
  );
};

export default ContractForm;