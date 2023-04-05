
const initialState = {
    post: [],
    loading: false,
    error:null,
  };
  
  export const newPostReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'NEW_POST':
        return {
          ...state,
          post: [...state.post, action.payload],
          loading: false,
          error: null,
        };
        case 'ERROR_POST':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
      default:
        return state;
    }
  };



/*const initialState={
newPost : {},
};

function newPost(state = initialState, action) {
    switch(action.type) {
        case "NEW_POST":
            return{
                ...state,
            };
            default: return state;
    }
}

export default newPost;*/