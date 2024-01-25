import { Routes, Route } from "react-router-dom";
import React from 'react';
import './css/PhotoUpload.css';
import './css/Loading.css';
import './css/GhostLeg.css';
import './css/Result.css';
import './css/Modal.css';
import './css/SpeechBubble.css';
import PhotoUpload from "./pages/PhotoUpload";
import Loading from "./pages/Loading";
import GhostLeg from "./pages/GhostLeg";
import Maintainance from "./pages/Maintainance";

function App() {
  return (
    <Routes>
      <Route path='/' element={<PhotoUpload/>}/>
      <Route path='/loading' element={<Loading/>}/>
      <Route path='/ghostleg' element={<GhostLeg/>}/>      
      <Route path='/maintainance' element={<Maintainance/>}/>
    </Routes>
  );
}

export default App;
