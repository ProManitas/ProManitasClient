import axios from 'axios';

 export const newPost = (payload) => {
    return async (dispatch)=>{
        try {
           const response = await axios.post("https://promanitasapi.onrender.com/api/v1/adPosts",payload);
           
           dispatch({
            type: 'NEW_POST',
            payload: response.data,
           }); 
          
        } catch (error) {
            dispatch({
                type: 'ERROR_POST',
                payload:error.message,
            });
        }
     
    };
  };

// cambio de prueba

/*import axios from 'axios';

export const createUser = (payload) => {
  return (dispatch) => {
    dispatch({ type: 'NEW_POST' });
    axios.post("https://promanitasapi.onrender.com/api/v1/adPosts", payload)
      .then(response => {
        dispatch({ type: 'NEW_POST', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'NEW_POST_ERROR', payload: error.message });
      });
  };
};
  */
 