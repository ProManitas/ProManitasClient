import axios from "axios";
// import user from "../arreglo.jsx"

export function getPro() {
  return async function (dispatch) {
    try {
      const url = "/adposts";
      const json = await axios(url);
      const data = json.data.data;
      // const allJson = json.data.data
      // console.log("por aca llega esto:", json.data.data)
      return dispatch({
        type: "GET_PRO",
        payload: data,
      });
    } catch (error) {
      console.error("Error in getPro", error);
    }
  };
}

export function getPaginated(pageNumber, pageSize) {
  console.log(axios.defaults.baseURL);
  return async function (dispatch) {
    try {
      const json = await axios.get(
        `/adposts?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      const data = json.data;
      return dispatch({
        type: "GET_PRO",
        payload: data,
      });
    } catch (error) {
      console.error("Error in getPaginated", error);
    }
  };
}
