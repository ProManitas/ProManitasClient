import axios from 'axios';

//  enviar el contrato al back
export const sendContract = (userId, advertisementId, contractData) => {
  return async (dispatch) => {
    try {
      //  Axios al back  enviar el contrato
       await axios.post(`/api/contract/${userId}/${advertisementId}`, contractData);
      
    } catch (error) {
     
    }
  };
};
//  ID de contrato 
export const setContractId = (userId, advertisementId) => {
  return {
    type: 'SET_CONTRACT_ID',
    payload: {
      userId,
      advertisementId,
    },
  };
};