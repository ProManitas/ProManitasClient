import React from 'react';
import Logo from './Image/loguito.png';
import './FooterStyle.css'



const Footer = ()=>{
    return(
        <div class= "box">
            <div><img className = "logo" src={Logo} alt="" /></div>
            <div >
                    <ul> <a href="/home">INICIO</a> </ul>
                    <ul><a href="/about">QUIENES SOMOS</a> </ul>     
                    <ul><a href="/contact">CONTACTO</a> </ul>    
                    
                </div>
                
        </div>
    )
};

export default Footer;