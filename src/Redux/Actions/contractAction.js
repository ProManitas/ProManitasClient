import axios from 'axios';

//  enviar el contrato al back
export const sendContract = (username, detail, dateJob) => {
  return async (dispatch) => {
    try {
      //  Axios al back  enviar el contrato
       await axios.post("https://promanitasapi.onrender.com/api/v1/contract/", {
        username,
        detail,
        dateJob
       });
      
    } catch (error) {
     throw new Error(error);
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