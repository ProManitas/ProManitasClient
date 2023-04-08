import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import userReducer from "../Reducer/userReducer";
import detailReducer from "../Reducer/detailReducer";
import pageReducer from "./paginadoReducer";
import { newPostReducer } from "./newPostReducer";
import searchReducer from "./searchReducer";
//aca importamos todos los reducers

const reducer = combineReducers({
  home: homeReducer,
  user: userReducer,
  detail: detailReducer,
  paginado: pageReducer,
  service: newPostReducer,
  search: searchReducer,
});
//aca  traemos dentro de comnineReducer todos los reducers, ejemplo:
// user:userReducers

export default reducer;
