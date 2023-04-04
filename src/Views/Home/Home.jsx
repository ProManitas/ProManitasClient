import React, { useEffect, useState } from "react";
import  {useDispatch, useSelector} from "react-redux";
import { getPro } from "../../Redux/Actions/homeAction";
import "./Home.css";

import Footer from "../../Components/Footer/Footer.js";

import CardContainer from "../../Components/CardsContainer/CardsContainer";



const Home = () => {
    
    const pros = useSelector (state => state.home.allPro)
    // console.log("por aca llega", pros)
    const losSeisPrimeros = pros.data ? pros.data.slice(0,6) : pros.data
    console.log("estos son",losSeisPrimeros)


    const dispatch = useDispatch();
    useEffect (() => {
        dispatch (getPro())
    }, [dispatch])






return (
    <div>   
       
        <div className="CardContainer">
     <div className="grid-Card">
     {losSeisPrimeros && losSeisPrimeros.map( el => {
//  console.log(el.job, el.firstname, el.rating, el.address)
// console.log()

return (             
  <CardContainer 
       UserId={el.UserId}
       name ={el.name}
       imagen = {el.imagen}
       description = {el.description}     
        
    />
)})}
    </div>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
    

)




}
//nuevas cosas
export default Home;