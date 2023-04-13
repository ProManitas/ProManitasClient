import React from 'react';
//import Logo from './Image/loguito.png';
import './FooterStyle.css'



const Footer = ()=>{
    return(
        <div class= "box">
            
                <ul><a className="a" href="/home">INICIO</a> </ul>
                <ul><a className="a" href="/about">QUIENES SOMOS</a> </ul>     
                <ul><a className="a" href="/contact">CONTACTO</a> </ul>    
                    
               </div>
    )
};

export default Footer;