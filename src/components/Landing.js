import React, {useState} from "react";
import About from "./about";
import ParticleContainer from "./ParticleContainer";
import Heading from "./Heading"; 
import { Link, Outlet } from "react-router-dom";
import { Button } from '@mui/material';




function Landing(){
    const [enter, setEnter] = useState(false);


  function handleClick() {
    setEnter(!enter)
    
  }


   
    return(
        <div >
        <Heading />
        <About />
        <Link to="app">
            <Button variant='contained' onClick={handleClick} style={{backgroundColor:"blue",  marginLeft: "850px", transform: enter ? "scale(0)" : "scale(1)" }}>
              <p>Enter</p>
            </Button>
        </Link>
        <Outlet />
        <ParticleContainer />
        </div>
        )
};


export default Landing;