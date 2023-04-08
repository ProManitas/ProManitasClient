import axios from "axios";

export function searchAction(name) {
  return async function (dispatch) {
    try {
      const url = `https://promanitasapi.onrender.com/api/v1/adposts?name=${name}`;
      const json = await axios(url);
      const data= json.data.data
    //   console.log("Action search data", json.data.data);
      return dispatch({
        type: "SEARCH",
        payload: data,
      });
    } catch (error) {
      console.error("Error in search", error);
    }
  };
}
