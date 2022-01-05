import React from "react";
import Album from "./Album";
import Footer from "./Footer";
import NewCard from "./Card";
import projects from "./Projects";
import Heading from "./Heading";


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
    <Heading />
      <Album />
      {projects.map(createCard)}
      <Footer />
    </div>
  )
}

export default App;
