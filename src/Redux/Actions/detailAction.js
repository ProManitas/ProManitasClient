import axios from "axios";

export const FETCH_DETAIL_REQUEST = "FETCH_DETAIL_REQUEST";
export const FETCH_DETAIL_SUCCESS = "FETCH_DETAIL_SUCCESS";
export const FETCH_DETAIL_FAILURE = "FETCH_DETAIL_FAILURE";

export const fetchDetailRequest = () => {
  return {
    type: FETCH_DETAIL_REQUEST
  };
};

export const fetchDetailSuccess = (data) => {
  return {
    type: FETCH_DETAIL_SUCCESS,
    payload: data
  };
};

export const fetchDetailFailure = (error) => {
  return {
    type: FETCH_DETAIL_FAILURE,
    payload: error
  };
};

export const getDetail = (postId) => {
  return (dispatch) => {
    dispatch(fetchDetailRequest());
    axios.get(`https://promanitasapi.onrender.com/api/v1/adposts/${postId}`)
      .then(response => {
        const detailData = {
          description: response.data.data.description,
          image: response.data.data.image
        };
        dispatch(fetchDetailSuccess(detailData));
      })
      .catch(error => {
        dispatch(fetchDetailFailure(error.message));
      });
  };
};
export const getServiceDetail = (serviceId) => {
  return (dispatch) => {
    dispatch(fetchDetailRequest());
    axios
      .get(`https://promanitasapi.onrender.com/api/v1/services/${serviceId}`)
      .then((response) => {
        const detailData = {
          name: response.data.data.name,
          image: response.data.data.image,
        };
        dispatch(fetchServiceDetailSuccess(detailData));
      })
      .catch((error) => {
        dispatch(fetchDetailFailure(error.message));
      });
  };
};

export const FETCH_SERVICE_DETAIL_REQUEST = "FETCH_SERVICE_DETAIL_REQUEST";
export const FETCH_SERVICE_DETAIL_SUCCESS = "FETCH_SERVICE_DETAIL_SUCCESS";
export const FETCH_SERVICE_DETAIL_FAILURE = "FETCH_SERVICE_DETAIL_FAILURE";

export const fetchServiceDetailRequest = () => {
  return {
    type: FETCH_SERVICE_DETAIL_REQUEST,
  };
};

export const fetchServiceDetailSuccess = (data) => {
  return {
    type: FETCH_SERVICE_DETAIL_SUCCESS,
    payload: data,
  };
};

export const fetchServiceDetailFailure = (error) => {
  return {
    type: FETCH_SERVICE_DETAIL_FAILURE,
    payload: error,
  };
};
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  };
};

export const getUser = (userId) => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios.get(`https://promanitasapi.onrender.com/api/v1/users/${userId}`)
      .then(response => {
        const userData = {
          image: response.data.data.image
        };
        dispatch(fetchUserSuccess(userData));
      })
      .catch(error => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};






  



    