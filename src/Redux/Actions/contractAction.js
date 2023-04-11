
import axios from 'axios';

// Acción para enviar el contrato al backend
export const sendContract = (userId, advertisementId, contractData) => {
  return (dispatch) => {
    // Realizar solicitud Axios al backend para enviar el contrato
    axios.post(`/api/contratos/${userId}/${advertisementId}`, contractData)
      .then((response) => {
        // Manejar la respuesta exitosa, si es necesario
      })
      .catch((error) => {
        // Manejar el error, si es necesario
      });
  };
};

// Acción para establecer el ID de contrato en el estado de Redux
export const setContractId = (userId, advertisementId) => {
  return {
    type: 'SET_CONTRACT_ID',
    payload: {
      userId,
      advertisementId,
    },
  };
};