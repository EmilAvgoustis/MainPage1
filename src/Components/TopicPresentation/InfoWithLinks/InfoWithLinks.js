import "./InfoWithLinks.css";
import {useState, useRef, useEffect} from "react";
import LinkWithUnderlineAnimation from "../LinkWithUnderlineAnimation/LinkWithUnderlineAnimation.js";
import TextBottomAppear from "../TextBottomAppear/TextBottomAppear.js";

function InfoWithLinks(props) {

  /* 
    props = [data, animationState]

   
  */

    return (
 
        <div className="infoWithLinksOuterDiv">

          <div className="authorInfoContainer">
  
              <div 
                className="authorInfo"
                style={{"animation": `${props.animationState ? "goUp" : "_goUp"} 750ms 250ms 1 both`}}
              >
  
                  <img className="authorImage" src={props.data["authorPhoto"]} />
  
                  <span>Author: </span>
                  
                  <LinkWithUnderlineAnimation 
                    
                    font=
                    {
                      {
                          "fontFamily": "Kaligrafica", 
                          "fontSize": "25px", 
                          "fontWeight": "500", 
                          "text": props.data["authorName"], 
                          "color": "white"
                       }       
                    }
		    
                    link={props.data["authorLink"]}  		
        
                  />
                     
              </div>

          </div>

          <div style={{marginTop: "10px"}}>

            <TextBottomAppear
                 
              data=
              {
                 {
                     "text": props.data["text"],    
                     "font":
                             {
                               "fontFamily": "Kaligrafica",  
                               "fontSize": "50px",  
                               "fontWeight": "500",
                               "color": "white"
                             }
                   }   
              }
              
              animationState={props.animationState}
           
           />
          
          </div> 
          
          <div 
            className="buttonContainer"
          >
    
              <a 
                href={props.data["href"]} 
                target="_blank"
                
                style={{"animation": props.animationState ? "goUp 750ms 250ms 1 both" : "_goUp 750ms 250ms 1 both",}}
              >
  
                  <span>READ ARTICLE</span>
  
              </a>  
  
          </div>

      </div>
  
    );
  
  }
  
  export default InfoWithLinks;
  