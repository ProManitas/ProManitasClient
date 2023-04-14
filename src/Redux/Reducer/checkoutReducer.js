// reducer.js

// Estado inicial
const initialState = {
    username: '',
    amount: 0
  };
  
  // Reducer
  const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERNAME':
        return {
          ...state,
          username: action.payload
        };
      case 'SET_PAYMENT':
        return {
          ...state,
        payment: action.payload
        };
      default:
        return state;
    }
  };
  
  export default checkoutReducer;