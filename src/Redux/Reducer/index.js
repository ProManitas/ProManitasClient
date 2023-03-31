const initialState = {
    allPro:[] 
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case "GET_PRO":
            return {
                ...state,
                allPro:action.payload
            }
            default: return state;
    }
}

export default rootReducer;