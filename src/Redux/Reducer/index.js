import { combineReducers } from "redux";
import paginatedReducer from "./paginatedReducer";
import userReducer from "../Reducer/userReducer";
import detailReducer from "./detailReducer";
import { newPostReducer } from "./newPostReducer";
import searchReducer from "./searchReducer";
import mapReducer from "./mapReducer";
import comentsReducer from "./comentsReducer";
import contractReducer from "./contractReducer";
import themeReducer from "./themeReducer";

const reducer = combineReducers({
  paginated: paginatedReducer,
  user: userReducer,
  detail: detailReducer,
  service: newPostReducer,
  search: searchReducer,
  maps: mapReducer,
  coments: comentsReducer,
  contracts: contractReducer,
  theme: themeReducer,
});
//aca  traemos dentro de comnineReducer todos los reducers, ejemplo:
// user:userReducers

export default reducer;
