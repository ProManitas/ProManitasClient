import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react"; 
import { useDispatch, useSelector } from "react-redux";
import  { getServices, getPosts, deletePosts,updatePost} from "../../Redux/Actions/noticesAction"

const MyNoticesUser = () => {
    const {user} = useAuth0()
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getServices())
    dispatch(getPosts());
    }, [dispatch])


const allServices = useSelector((state) => state.notices.services)
console.log("servicios:",allServices)

const  allPosts = useSelector((state) => state.notices.adposts)
console.log("posts:",allPosts)





}

export default MyNoticesUser

