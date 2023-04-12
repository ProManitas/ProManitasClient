import axios from "axios";

export function searchAction(name) {
  return async function (dispatch) {
    try {
      const url = `https://promanitasapi.onrender.com/api/v1/adposts?name=${name}`;
      const json = await axios(url);
      const data = json.data.data;
      return dispatch({
        type: "SEARCH",
        payload: data,
      });
    } catch (error) {
      console.error("Error in search", error);
    }
  };
}

export function getServices() {
  return async function (dispatch) {
    try {
      const url = `https://promanitasapi.onrender.com/api/v1/services`;
      const json = await axios.get(url).then((response) => response.data);
      const data = json.data;
      return dispatch({
        type: "GET_SERVICES",
        payload: data,
      });
    } catch (error) {
      console.error("Error in getServices", error);
    }
  };
}
