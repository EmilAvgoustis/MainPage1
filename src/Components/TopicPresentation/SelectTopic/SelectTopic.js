import "./SelectTopic.css";
import {useState, useEffect, useRef} from "react";

function SelectTopic(props) 
{
    
    // props = [data, reveal, currentId, pentagramButtonsArray]

    const specificTopicRefDiv = [null, null, null, null].map(() => {return useRef(null)});

    return (
  
      <div className="selectTopicOuterDiv"> 
        
        {
          Object.keys(props.data["component"]).map((key) => 
            { 
                return (

                    <div
                      key={key} 
                      ref={specificTopicRefDiv[parseInt(key)]}
                      className={key === `${props.currentId}` ? "specificTopic specificTopicOpacity" : "specificTopic"} 

                      style=
                            {
                             {
                               width: props.data[`${props.reveal}`]["width"],   
                               fontSize: props.data[`${props.reveal}`]["fontSize"]
                             }   
                            }  

                      onMouseEnter=
                      {
                        () => 
                        {
                          specificTopicRefDiv[parseInt(key)]
                            .current.classList.add("_specificTopicOpacity")
                        }
                      } 

                      onMouseLeave=
                      {
                        () => 
                        {
                          specificTopicRefDiv[parseInt(key)]
                            .current.classList.remove("_specificTopicOpacity")
                        }
                      }     
                        
                      onClick=
                      {
                        () => 
                        {
                          props.pentagramButtonsArray[parseInt(key)]["current"].click();
                        }
                      }  
                    >
                        <p>
                          {props.data["component"][`${key}`]["text"]}
                        </p>

                        <div className="stArrowDiv">
                            
                        </div>
                        
                    </div>

                );
            }
          )
        }      
        
      </div>
  
    );
  
}
  
export default SelectTopic;