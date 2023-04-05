const initialState = {
    details: {},
    userImage: null
  };
  
  function detailReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_DETAILS':
        return {
          ...state,
          details: action.payload
        };
      case 'GET_USER_ADDREES':
        return {
          ...state,
          userAddrees: action.payload
        };
      default:
        return state;
    }
  }
  

export default detailReducer;