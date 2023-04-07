const initialState = {
  details: {
    postImage: "",
    postDescription: "",
    userImage: "",
    serviceName: ""
  },
  user: {},
  services: []
};

function detailReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_DETAILS':
      return {
        ...state,
        details: {
          postImage: action.payload.postImage,
          postDescription: action.payload.postDescription,
          userImage: action.payload.userImage,
          serviceName: action.payload.serviceName
        }
      };
    case 'GET_USER':
      return {
        ...state,
        user: {
          userImage: action.userImage
        }
      };
    case 'GET_SERVICES':
      return {
        ...state,
        services: action.payload
      };
    default:
      return state;
  }
}

export default detailReducer;

