import React, { useEffect, useState } from "react";
import  {useDispatch, useSelector} from "react-redux";
import { getPro } from "../../Redux/Actions";
import "./Home.css";

import Footer from "../../Components/Footer/Footer.js";
// import Landing from "../../Components/Landing/Landing.jsx";
// import NavBar from "../../Components/NavBar/NavBar.jsx";
import CardContainer from "../../Components/CardsContainer/CardsContainer";



const Home = () => {
    
    const pros = useSelector (state => state.allPro)
    // console.log("por aca llega", pros)
    const losSeisPrimeros = pros.slice(0,6)
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
       id={el.id}
       Rubro ={el.Rubro}
       imagen = {el.imagen}
       descripcion = {el.descripcion}     
        
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