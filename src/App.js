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

function App() {
  const location = useLocation();
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
        <Route path="/contrato/:id" element={<AreaAcuerdo />} />
        <Route path="/calification/:id" element={<FormCalification />} />
        <Route exact path="/" element={<Landing />} />
        <Route path="/construction" element={<UnderConstruction />} />
        <Route path="/posteo" element={<FormPosteo />} />
      </Routes>
    </div>
  );
}

export default App;
