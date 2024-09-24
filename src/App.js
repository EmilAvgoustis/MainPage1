import './App.css';

import Navigation from './Components/Navigation/Navigation.js';
import TopicPresentation from './Components/TopicPresentation/TopicPresentation/TopicPresentation.js';
import ResponsiveSkeleton from "./Components/ResponsiveSkeleton/ResponsiveSkeleton.js";
import Footer from './Components/Footer/Footer.js';

import jsonData from "./Components/TopicPresentation/data.json";
import jsonNav from "./nav.json";
import jsonFooter from "./Components/Footer/Footer.json";

import {useState, useEffect} from "react";

/*

Object.assign(document.body.style, 
  {
    backgroundImage: "url(./Images/apollon.jpg)",
    backgroundSize: "125% auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 0px",
    backgroundAttachment: "fixed"
  }    
);

*/

function App() { 

  return (

  <> 
    
    <Navigation 
      data={jsonNav}
    />

    <TopicPresentation jsonData={jsonData}/>

    <ResponsiveSkeleton />

    <Footer data={jsonFooter} />
    
  </> 

  );

}

export default App;
