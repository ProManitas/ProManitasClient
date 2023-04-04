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
/*import { combineReducers } from "redux";

//aca importamos todos los reducers


const reducer= combineReducers({});
//aca  traemos dentro de comnineReducer todos los reducers, ejemplo:
// user:userReducers

export default reducer;*/