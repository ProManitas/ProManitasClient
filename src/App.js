import React from "react";
import Home from "./Views/Home/Home.jsx";
import Detail from "./Views/Detail/detail";
import LoginForm from "./Views/Login/LoginForm/LoginForm.jsx";
import RegistryForm from "./Views/Login/RegistryForm/RegistryForm.jsx";
import About from "./Components/Footer/About/About.js";
import FooterForm from "./Components/Footer/FooterForm/FooterForm.js";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import AreaAcuerdo from "./Components/AreaAcuerdo/acuerdo";
import FormCalification from "./Components/FormCalification/FormCalification";
import UnderConstruction from "./Components/UnderConstruction/UnderConstruction.jsx";
import FormPosteo from "./Components/FormPosteo/FormPosteo.js";
import {AuthenticationGuard} from "./Views/Login/AuthenticationGuard/authentication-guard"
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Views/Login/Profile/Profile.jsx";


function App() {
  const location = useLocation();

  const {isLoading} = useAuth0()

  if(isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <div className="App">
      {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/construction" && <Navbar />}
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registryForm" element={<RegistryForm />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<FooterForm />} />
        <Route path="/contrato/" element={<AreaAcuerdo />} />
        <Route path="/calification/" element={<FormCalification />} />
        <Route exact path="/" element={<Landing />} />
        <Route path="/construction" element={<UnderConstruction />} />
        <Route path="/posteo" element={<FormPosteo />} />
        <Route 
        path="/profile" 
        element={<AuthenticationGuard component= {Profile}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
