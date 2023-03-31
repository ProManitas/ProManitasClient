import React from 'react';
import Logo from './Image/logoProManitas.png';
import './FooterStyle.css'



const Footer = ()=>{
    return(
        <div class= "box">
            <div><img className = "logo" src={Logo} alt="" /></div>
            <div>
                    <ul> <a href="/Home">INICIO</a> </ul>
                    <ul><a href="/About">QUIENES SOMOS</a> </ul>     
                    <ul><a href="/FooterForm">CONTACTO</a> </ul>    
                    
                </div>
                
        </div>
    )
};

export default Footer;