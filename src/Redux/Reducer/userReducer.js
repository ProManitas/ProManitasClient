import {GET_ALL_USERS} from "../Actions/userAction"

const initialState = {
    allUsers:[],
    user:{},
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ALL_USERS:
            return{
                ...state,
                allUsers: action.payload,
                
            }
        default:
            return {...state}
    }
}

export default userReducer;