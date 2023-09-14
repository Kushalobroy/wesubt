import React, { useState } from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar"
import Home from './Home'


function Ahome() {
  const[toggle, setToggle] = useState(true)
  const Toggle = () =>{
    setToggle(!toggle)
  }
  return (

    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
          {toggle && <div className="col-4 col-md-2  bg-white vh-100 position-fixed">
          <Sidebar />
          </div>}
         {toggle && <div className="col-4 col-md-2"></div>}
          <div className="col">
            <Home Toggle={Toggle}/>
            
          </div>
      </div>
    </div>
    
      
      
   
  );
}

export default Ahome;