import React from "react";
import {
	Route,
   Routes
  } from "react-router-dom";
import Home from './pages/Home'
import Programme from './pages/Programme'
import Hotels from './pages/Hotels'
import Photos from './pages/Photos'
import Confirmation from './pages/Confirmation'
import Banner from "./components/Banner";
import Header from './components/Header';



function Routing() {
    return (
       <div className="App">
          <Banner />
          <Header />
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/programme" element={<Programme />} />
             <Route path="/hotels" element={<Hotels />} />
             <Route path="/photos" element={<Photos />} />
             <Route path="/confirmation" element={<Confirmation />} />
            
          </Routes>
         
       </div>
    );
 }
 
 export default Routing;