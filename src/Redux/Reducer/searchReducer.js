const initialState = {
  search: [],
};

function searchReducer(state = initialState, action) {
    // console.log("Data desde el reducer", action.payload);
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return { ...state };
  }
}

export default searchReducer;
