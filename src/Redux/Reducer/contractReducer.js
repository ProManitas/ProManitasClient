// reducers/contractReducer.js

const contractReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CONTRACT_ID':
        const { userId, advertisementId } = action.payload;
        return {
          ...state,
          [userId]: {
            ...state[userId],
            [advertisementId]: action.payload.contractId, // Actualizar el ID de contrato para el usuario y el aviso específico
          },
        };
      default:
        return state;
    }
  };
  
  export default contractReducer;
  