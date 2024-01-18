import { Routes, Route } from "react-router-dom";
import React from 'react';
import './css/PhotoUpload.css';
import './css/Loading.css';
import './css/GhostLeg.css';
import PhotoUpload from "./pages/PhotoUpload";
import Loading from "./pages/Loading";
import GhostLeg from "./pages/GhostLeg";

function App() {
  return (
    <Routes>
      <Route path='/' element={<PhotoUpload/>}/>
      <Route path='/loading' element={<Loading/>}/>
      <Route path='/ghostleg' element={<GhostLeg/>}/>
    </Routes>
  );
}

export default App;
