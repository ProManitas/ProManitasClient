import axios from 'axios';

export function getDetails(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`https://promanitasapi.onrender.com/api/v1/adposts${id}`)
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getUserAddress(id) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`https://promanitasapi.onrender.com/api/v1/users/${id}`);
        const user = response.data;
        return dispatch({
          type: 'GET_USER_ADDRESS',
          payload: user.address
        });
      } catch (error) {
        console.error(error);
      }
    };
  }

  