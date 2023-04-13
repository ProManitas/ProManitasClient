import axios from "axios";

export function searchAction(name) {
  return async function (dispatch) {
    try {
      const json = await axios(`/adposts?name=${name}`);
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
      const json = await axios.get("/services").then((response) => response.data);
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
