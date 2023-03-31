import React from "react";
import Home from "./Views/Home/Home.jsx"
// import Detail from 
import  LoginForm from "./Views/Login/LoginForm/LoginForm.jsx";
import RegistryForm from "./Views/Login/RegistryForm/RegistryForm.jsx";
import About from "./Components/Footer/About/About.js"
import FooterForm from "./Components/Footer/FooterForm/FooterForm.js"
import { Route, Routes } from "react-router-dom"


function App() {
  return (

    <div>
      <Routes>
        {/* <Route path="/detail" element={<Detail />} /> */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registryForm" element={<RegistryForm />} />
        <Route exact path="/home" element={<Home />} />
        <Route path ="/about" element ={<About />}/>
        <Route path ="/contact" element={< FooterForm/>}  />
        {/* <Route exact path = "/" element={<Landing/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
