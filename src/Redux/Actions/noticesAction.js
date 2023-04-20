import axios from 'axios';

export function getUsers(){
    return async function(dispatch){
        try {
         const responseUsers= await axios.get(`/users/`);
        return dispatch({
            type:"ALL_USERS",
            payload: responseUsers.data.data
        })
        } catch (error) {
        console.log(error)            
        }
    }
}

export function getServices(){
    return async function(dispatch){
        try {
         const responseService= await axios.get(`/services/`);
        return dispatch({
            type:"ALL_SERVICE",
            payload: responseService.data.data
        })
        } catch (error) {
        console.log(error)            
        }
    }
}

export function getPosts (){
    return async function(dispatch){
        try {
            const responsePosts = await axios.get(`/adposts`);
            return dispatch({
                type:"ALL_POSTS",
                payload:responsePosts.data.data
            })
        } catch (error) {
            console.log(error)
            
        }
    }
}


export function deletePost(postId) {
  return async function (dispatch) {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.delete(`/adposts/${postId}`);
      dispatch({ type: "DELETE_POSTS", payload: postId });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updatePost(postData) {
  return async function (dispatch) {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.put(`/adposts/${postData.id}`, postData);
      dispatch({ type: "PUT_POSTS", payload: response.data.data });
    } catch (error) {
      console.log(error);
    }
  };
}