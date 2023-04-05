import axios from "axios";

export const GET_ALL_USERS= "GET_ALL_USERS"
export const GET_USER_ID =  "GET_USER_ID"


export function getAllUsers() {
    return async function(dispatch){
        try {
            const jsonData = await axios.get("https://promanitasapi.onrender.com/api/v1/users")
            dispatch({
                type: GET_ALL_USERS,
                payload:jsonData.data.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export function getUserId(id) {
    return async function(dispatch){
        const jsonData = await axios.get(`https://promanitasapi.onrender.com/api/v1/users/${id}`)
        dispatch({
            type: GET_USER_ID,
            payload:jsonData.data.data[0]
        })
    }
}