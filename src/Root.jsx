import React from "react";
import {
	Route,
   Routes
  } from "react-router-dom";
  
import Home from './pages/Home'
import Program from './pages/Programme'
import Hotels from './pages/Hotels'
import Photos from './pages/Photos'
import Confirmation from './pages/Confirmation'
import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


library.add(far, fab, fas);


function Routing() {
    return (
       <div className="App">
         <Header />
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/programme" element={<Program />} />
             <Route path="/hotels" element={<Hotels />} />
             <Route path="/photos" element={<Photos />} />
             <Route path="/confirmation" element={<Confirmation />} />
            
          </Routes>
         
       </div>
    );
 }
 
 export default Routing;