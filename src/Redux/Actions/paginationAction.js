import axios from 'axios';
// import user from "../arreglo.jsx"

export function pagination (pageNumber, pageSize) {
    return async function (dispatch) {
      try {
        const url = `https://promanitasapi.onrender.com/api/v1/adposts?pageNumber=${pageNumber}&pageSize=${pageSize}`
        const json = await axios(url) ;
        console.log("actions:",json.data)
        // const allJson = json.data.data
        // console.log("por aca llega esto:", json.message.data)
        return dispatch ({
          type: "NEW_PAGE",
          payload: json.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }