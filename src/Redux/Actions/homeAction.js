import axios from "axios";
// import user from "../arreglo.jsx"

export function getPro() {
  return async function (dispatch) {
    try {
      const url = "https://promanitasapi.onrender.com/api/v1/adposts";
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
  return async function (dispatch) {
    try {
      const url = `https://promanitasapi.onrender.com/api/v1/adposts?pageNumber=${pageNumber}&pageSize=${pageSize}`;
      const json = await axios.get(url)
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
