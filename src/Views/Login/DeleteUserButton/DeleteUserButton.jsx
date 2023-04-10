import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const DeleteUserButton = (id) => {
  const { user, logout } = useAuth0();
  const showDelete = id.toString().includes("-");

  const handlerDeleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `https://promanitasapi.onrender.com/api/v1/users/${id}`
      );
      console.log(response.data);
      logout({ returnTo: window.location.origin });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {showDelete && (
        <div onClick={handlerDeleteUser}>
          <button>Eliminar usuario</button>
        </div>
      )}
    </div>
  );
};

export default DeleteUserButton;
