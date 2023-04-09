import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getUserId} from "../../Redux/Actions/userAction"
import style from "./UserDetail.module.css"


const UserDetail = () => {

    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(()=>{
        dispatch(getUserId(id))
    },[dispatch, id])

    const detail = useSelector((state)=> state.user.userId)
    

    if(!detail.id){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div>
            <div className={style.container}>
                
                <img src={detail.image} alt={detail.username}/>
                <h1>{detail.firstname}</h1>
                <h1>{detail.lastname}</h1>
                <h1>{detail.cellnumber}</h1>
                <h1>{detail.password}</h1>
                <h1>{detail.address}</h1>

                <button>Modificar</button> 
                <button>Eliminar usuario</button>

                <h3>OJO  no regresar a profile, se rompe el sitio.  Lo estaré revisando, ir a home desde este punto</h3>

            </div>
        </div>
    )
}

export default UserDetail;