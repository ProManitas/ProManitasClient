import axios from 'axios';
// import user from "../arreglo.jsx"

export function getPro () {
    return async function (dispatch) {
      try {
        const json = await axios("https://promanitasapi.onrender.com/api/v1/adposts") ;
        // const allJson = json.data.data
        console.log("por aca llega esto:", json.data.data)
        return dispatch ({
          type: "GET_PRO",
          payload: json.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }