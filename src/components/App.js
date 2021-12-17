import { PinDropSharp } from "@mui/icons-material";
import React from "react";
import Album from "./Album";
import Footer from "./Footer";
import NewCard from "./Card";
import projects from "./Projects";

function createCard(projects){
  return(
    <NewCard 
      id={projects.id}
      key={projects.id}
      name={projects.name}
      description={projects.description}
      img={projects.img}
      link={projects.link}
      source={projects.source}
    />
  )
}




function App(){
  return(
    <div>
      <Album />
      {projects.map(createCard)}
    <Footer />
    </div>
  )
}

export default App;