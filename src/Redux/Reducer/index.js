import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
//aca importamos todos los reducers


const reducer= combineReducers({
    home: homeReducer,
});
//aca  traemos dentro de comnineReducer todos los reducers, ejemplo:
// user:userReducers

export default reducer;