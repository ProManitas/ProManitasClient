import React from "react";
import './FooterForm.css'
//import { useState} from "react";

//const initialForm ={
 //   name:"",
 //   email:"",
 //   message:"",
//}

const FooterForm = ()=>{
   // const [form, setForm] = useState(initialForm);

   /* const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();

        
    };
*/
    return(
    
    <div className = "form" id = "wrapper">
        <h1 >Contáctenos</h1>
        <form className ="form" action="https://formsubmit.co/yanicorc@gmail.com" method="POST">
        <label>Nombre:</label>
            <input className ="input"
            type="text"
             name="name" 
             //laceholder="Nombre" 
             //onChange={handleChange} 
             //value={form.name}
             />
             <label>Email:</label>
              <input className ="input"
            type="text"
             name="email" 
             //placeholder="Email" 
             //onChange={handleChange} 
             //value={form.email}
             />
             <label>Asunto:</label>
              <input className ="input"
            type="text"
             name="asunto" 
             />
             <label>Mensaje:</label>
             <textarea className ="input" name="mensaje"rows="3" cols="15"></textarea>
             <input type="submit" value="Enviar"/>
             

        </form>
        </div>
    


    )
};

export default FooterForm;