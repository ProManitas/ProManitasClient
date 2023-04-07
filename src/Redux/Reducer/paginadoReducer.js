const initialState = {
    page:[] 
}

 function pageReducer (state = initialState, action){
    switch(action.type){
        case "NEW_PAGE":
            return {
                ...state,
                page:action.payload
            }
            default: return state;
    }
}

export default pageReducer;