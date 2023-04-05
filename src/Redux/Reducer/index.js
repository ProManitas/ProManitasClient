import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import userReducer from "../Reducer/userReducer"
import detailReducer from "../Reducer/detailReducer"
//aca importamos todos los reducers


const reducer= combineReducers({
    home: homeReducer,
    user: userReducer,
    detail: detailReducer
});
//aca  traemos dentro de comnineReducer todos los reducers, ejemplo:
// user:userReducers

export default reducer;