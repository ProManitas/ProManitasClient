import React, { useEffect, useState } from "react";
import  {useDispatch, useSelector} from "react-redux";
import { getPro } from "../../Redux/Actions";
import "./Home.css";

// import Footer from "../../Components/Footer/Footer.jsx";
// import Landing from "../../Components/Landing/Landing.jsx";
// import NavBar from "../../Components/NavBar/NavBar.jsx";
import CardContainer from "../../Components/CardsContainer/CardsContainer";



const Home = () => {
    
    const pros = useSelector (state => state.allPro)
    console.log("por aca llega", pros)
    const losSeisPrimeros = pros.data.slice(0,6)
    console.log("estos son",losSeisPrimeros)


    const dispatch = useDispatch();
    useEffect (() => {
        dispatch (getPro())
    }, [dispatch])
    console.log()






return (
    <div>   
        <div>
            <h1>EL Home motherfucker</h1>
            {/* <NavBar/> */}
        </div>
        <div>
            <h2>Los Filtros irian por Aca mas o menos</h2>
        </div>
        <div>
     <div>
     {losSeisPrimeros && losSeisPrimeros.map( el => {
 console.log(el.job, el.firstname, el.rating, el.address)
return (             
  <CardContainer 
        imgage={el.image}
        firstName={el.firstname} 
        lastname={el.lastname}
        address={el.address}
        // rating={el.rating}
        
    />
)})}
    </div>
    <div>
        <h2>Aca iria el footer</h2>
    </div>
    </div>
    </div>
    

)




}
//nuevas cosas
export default Home;