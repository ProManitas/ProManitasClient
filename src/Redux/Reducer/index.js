import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import userReducer from "../Reducer/userReducer";
import detailReducer from "./detailReducer";
import { newPostReducer } from "./newPostReducer";
import searchReducer from "./searchReducer";
import mapReducer from "./mapReducer";
import comentsReducer from "./comentsReducer";
import checkoutReducer from "./checkoutReducer";

const reducer = combineReducers({
  home: homeReducer,
  user: userReducer,
  detail: detailReducer,
  service: newPostReducer,
  search: searchReducer,
  maps:mapReducer,
  coments:comentsReducer,
  checkoutReducer
});
//aca  traemos dentro de comnineReducer todos los reducers, ejemplo:
// user:userReducers

export default reducer;
