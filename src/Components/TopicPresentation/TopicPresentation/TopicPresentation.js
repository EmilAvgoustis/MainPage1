import './TopicPresentation.css';

import Hourglass from "../Hourglass/Hourglass.js";
import TextBottomAppear from "../TextBottomAppear/TextBottomAppear.js";
import LinkWithUnderlineAnimation from "../LinkWithUnderlineAnimation/LinkWithUnderlineAnimation.js";
import SelectTopic from "../SelectTopic/SelectTopic.js";
import ChangingLinkDots from "../ChangingLinkDots/ChangingLinkDots.js";
import InfoWithLinks from "../InfoWithLinks/InfoWithLinks.js";


import {useState, useEffect} from "react";

function TopicPresentation(props) { 

  // props = [jsonData]  

  // Set data for selectTopic component 

  const selectTopicData =
  {
    "true": 
            {
              "width": "200px",
              "fontSize": "32px" 
            },
    "false": 
            {
              "width": "0px",
              "fontSize": "0px" 
            },      
    "component":
                 {

                 }          

  };

  Object.keys(props.jsonData["data"]).forEach((key) =>
    { 
      Object.assign(selectTopicData["component"], 
        {
          [`${key}`]:
                      {
                        "text": props.jsonData["data"][`${key}`]["text"]
                      }
        }
      );
    }
  );

  // Set data for Hourglass component 

  const hourglassAnimationObj =
  {
    "true": 
            {
              "sandLine": "fallingSandLine",
              "risingSand": "sandRise", 
              "fallingSand": "sandFall",
              "duration": `${props.jsonData["duration"]}`
            },
    "false": 
            {
              "sandLine": "_fallingSandLine",
              "risingSand": "_sandRise", 
              "fallingSand": "_sandFall",
              "duration": `${props.jsonData["duration"]}`
            },   
  };

  const hourglassCssObj =
  {
    "baseColor": "black",
    "glassColor": "red",
    "sandColor": "#f9bb28",
    "top":
          {
            "0": "168px",
            "1": "324px",
            "2": "446px",
            "3": "534px"
          }
  }

  const [hourglassState, setHourglassState] = useState(false);

  // Set reference for changingLinkDots which will then be passed to selectTopic component

  const [pentagramButtonsArray, setPentagramButtonsArray] = useState([]);

  // Set reveal state, to reveal and hide components when screen width >= 1000px

  const [reveal, setReveal] = useState(false);

  const selectTopicMediaQuery = window.matchMedia("(min-width: 1000px)");

  selectTopicMediaQuery.addEventListener("change", () =>
    {
      if(selectTopicMediaQuery.matches)
      {
        setReveal(true);
      }
      else if(!selectTopicMediaQuery.matches)
      {
        setReveal(false);
      }
    }
  );

  useEffect(() =>
    {
      if(selectTopicMediaQuery.matches)
      {
        setReveal(true);
      }
      else if(!selectTopicMediaQuery.matches)
      {
        setReveal(false);
      }

    },
    []
  );  
  
  //Control unit

  const [displayId, setDisplayId] = useState([0, 0]); // displayId[0] is the current state, displayId[1] is the previous state
  
  return (

  <> 
    
    <div className="container">
    
      <div className='backgroundImagesContainer'>

        {
          Object.keys(props.jsonData["data"]).map((key) =>
            {
              return (

                <div 
                  key={`backgroundImageDiv${key}`}
                  className='backgroundImageDiv'
                  style=
                  {
                    {
                      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
                                        url(${props.jsonData["data"][key]["backgroundImage"]})`,
                      animation: `${key === `${displayId[0]}` ? "opacityRiseGradual 1000ms both 1" : 
                                  (key === `${displayId[1]}` ? "opacityFallGradual 1000ms both 1" : 
                                                             "opacityFallImmediate 1000ms both 1")}`
                    }
                  }
                >
                </div>

              ); 

            }
          )
        }

      </div>

      <div className='infoLinksContainer'>
        
        <InfoWithLinks 
          data={props.jsonData["data"][`${displayId[0]}`]} 
          animationState = {hourglassState}
        />

      </div>

      <div className='selectTopicContainer'>
        <SelectTopic 
          data={selectTopicData} 
          reveal={reveal}
          currentId={displayId[0]}
          pentagramButtonsArray={pentagramButtonsArray}
        />
      </div>

      <div
        className='hourglassContainer'
        style=
        {
          {
            top: `${hourglassCssObj["top"][`${displayId[0]}`]}`,
            zIndex: `${reveal ? 2 : 0}`,
            opacity: `${reveal ? 1 : 0}`
          }
        }
      >
      
        <Hourglass 
          cssObj={hourglassCssObj}
          animation={hourglassAnimationObj[`${hourglassState}`]}
          currentId={displayId[0]}
          
          style=
          {
            {
              position: "absolute",
              zIndex: "2"
            }
          }
        />
      
      </div>    
      

      <div 
        className='changingLinkDotsContainer'
        style=
              {
                {
                  zIndex: `${reveal ? 0 : 2}`,
                  opacity: `${reveal ? 0 : 1}`
                }   
              }
      >
          <ChangingLinkDots 
            changeDisplayId={setDisplayId} 
            currentId={displayId[0]}
            changeHourglassState={setHourglassState}
            currentHourglassState={hourglassState}
            setPentagramButtonsArray={setPentagramButtonsArray}
            duration={props.jsonData["duration"]}
          />


      </div>

    </div>
  </> 
  );

}

export default TopicPresentation;
