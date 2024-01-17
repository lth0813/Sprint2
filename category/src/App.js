import { Routes, Route } from "react-router-dom";
import React from 'react';
import './css/PhotoUpload.css';
import './css/GhostLeg.css';
import PhotoUpload from "./pages/PhotoUpload";
import GhostLeg from "./pages/GhostLeg";

function App() {
  return (
    <Routes>
      <Route path='/' element={<PhotoUpload/>}/>
      <Route path='/ghostleg' element={<GhostLeg/>}/>
    </Routes>
  );
}

export default App;
