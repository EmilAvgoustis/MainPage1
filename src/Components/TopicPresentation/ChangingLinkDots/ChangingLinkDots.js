import "./ChangingLinkDots.css";
import {useState, useEffect, useRef} from "react";

function ChangingLinkDots(props) 
{
    /* 
      props = [
                changeDisplayId, 
                currentId, 
                currentHourglassState, 
                changeHourglassState, 
                setPentagramButtonsArray,
                duration
              ]

      changeDisplayId is a function which changes the control unit state displayId

      currentId is Id of the currentState

      duration is link display duration
    */ 

    //  
   
    const attributesObj = {};
    
    [0, 1, 2, 3].forEach((id) =>
      {
        Object.assign(attributesObj, 
          {
            [`pentagramDiv${id}`]:
                                  {
                                    "id": id,
                                    "ref": useRef(null)
                                  }      
          }    
        );
      }
    );

    useEffect(() =>
      {
        props.setPentagramButtonsArray(

          Object.keys(attributesObj).map((key) =>
            {
              return attributesObj[key]["ref"];
            }
          )

        );        
      },
      []
    );

    //Event handlers

    function clickHandler(id)
    {
        props.changeDisplayId([id, props.currentId]);
        props.changeHourglassState(!props.currentHourglassState);
    }

    function animationEndHandler(id)
    {
      props.changeDisplayId([(id === 3 ? 0 : id + 1), props.currentId]);
      props.changeHourglassState(!props.currentHourglassState);
    }

    return (
  
      <div className="changingLinkDotsOuterDiv"> 
           
          {
            [0, 1, 2, 3].map((id) =>
              {
                return <div 
                          key={id}
                          ref={attributesObj[`pentagramDiv${id}`]["ref"]}
                          className="pentagramDiv" 
                          id={`pentagramDiv${id}`}
                          onClick={() => {clickHandler(id)}}
                       >

                            <div 
                              className="animatingPentagramDiv"
                              style=
                              {
                               {
                                   animation: `${id === props.currentId ? 
                                    `${props.currentHourglassState ? "shrinkWidth" : "_shrinkWidth"} ${props.duration}ms both 1` : "none"}`
                                 
                               }
                              }
                              onAnimationEnd={() => {animationEndHandler(id)}}
                            >

                            <img 
                              className="animatingPentagramImg" 
                              src="./Images/pentagramRed.png"
                            />

                         </div>        

                       </div>;  
              }
            )
          }

      </div>
  
    );
  
}
  
  export default ChangingLinkDots;