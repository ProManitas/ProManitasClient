import axios from 'axios';

export const getPro = () => {
    return async function (dispatch) {
      try {
        const json = await axios.get("https://promanitasapi.onrender.com/api/v1/user")
        console.log("estos son las :", json.data)
        return dispatch ({
          type: "GET_PRO",
          payload: json.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }