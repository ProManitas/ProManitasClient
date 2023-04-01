import axios from 'axios';
import user from "../arreglo.jsx"

export const getPro = () => {
    return function (dispatch) {
      try {
        const json = user;
        return dispatch ({
          type: "GET_PRO",
          payload: json
        })
      } catch (error) {
        console.log(error)
      }
    }
  }