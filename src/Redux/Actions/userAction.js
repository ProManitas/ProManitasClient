import axios from "axios";

export const GET_ALL_USERS= "GET_ALL_USERS"


export function getAllUsers() {
    return async function(dispatch){
        try {
            const jsonData = await axios.get("https://promanitasapi.onrender.com/api/v1/users?pageNumber=1&pageSize=5")
            dispatch({
                type: GET_ALL_USERS,
                payload:jsonData.data.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

