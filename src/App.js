import React from "react";
import Home from "./Views/Home/Home.jsx"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    
      <div>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
        </Routes>
      </div>
  );
}

export default App;
