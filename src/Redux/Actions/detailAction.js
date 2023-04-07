import axios from 'axios';

export const getDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://promanitasapi.onrender.com/api/v1/adposts/${id}`);
    
    if (data.adPost) {
      const { image, description, UserId, ServiceId } = data.adPost;

      // Obtener la imagen del usuario asociado al adPost
      const userResponse = await axios.get(`https://promanitasapi.onrender.com/api/v1/users/${UserId}`);
      const { image: userImage } = userResponse.data.users;

      // Obtener el servicio asociado al adPost
      const serviceResponse = await axios.get(`https://promanitasapi.onrender.com/api/v1/services/${ServiceId}`);
      const { name: serviceName } = serviceResponse.data.services;

      return dispatch({
        type: 'GET_DETAILS',
        payload: {
          postImage: image,
          postDescription: description,
          userImage,
          serviceName,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};


export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://promanitasapi.onrender.com/api/v1/users/${id}`);
    const { image } = data.users;
    dispatch({
      type: 'GET_USER',
      userImage: image
    });
  } catch (error) {
    console.error(error);
    // Enviar una acción de error si se desea
  }
};


export const getServices = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://promanitasapi.onrender.com/api/v1/services/${id}`);
    return dispatch({
      type: 'GET_SERVICES',
      payload: data
    });
  } catch (error) {
    console.error(error);
  }
};
  



    