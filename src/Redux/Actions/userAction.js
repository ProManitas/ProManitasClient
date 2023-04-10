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
        await axios.get(`https://promanitasapi.onrender.com/api/v1/users/${id}`).then((res) => 
        dispatch({
            type: GET_USER_ID,
            payload:res.data.data
        })
        )
    }
}


export function deleteUser(id) {
    return async function(){
        try {
            const deleted = await axios.delete(`https://promanitasapi.onrender.com/api/v1/users/${id}`)
            alert(deleted.data.data.message)
        } catch (error) {
            alert("Este usuario no puede ser eliminado, contacta con los administradores del sitio para solucionarlo")
        }
    }
}