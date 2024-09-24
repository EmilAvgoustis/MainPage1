import "./TextBottomAppear.css";
import {useState, useRef, useEffect} from "react";

function TextBottomAppear(props) {

  /* props = [data, animationState]

    data=
    {
      "text": "something",    
      "font":
              {
                "fontFamily": "something",  
                "fontSize": "something",  
                "fontWeight": "something",
                "color": "something",  
              }
    }

  */

    function createWordArray(text)
    {
        let wordsArray = [];
        let tempString = "";

        for(let num = 0; num != text.length; num++)
        {
            if(text.charAt(num) !== " ")
            {
                tempString += text.charAt(num);
            }
            else
            {
              if(tempString !== "")
                {
                    wordsArray.push(tempString.toUpperCase());
                    tempString = "";
                }
            }

            if((num === (text.length) - 1) && tempString.length !== 0)
            {
                wordsArray.push(tempString.toUpperCase());
            }
        }

        return wordsArray;
    }

    const wordsArray = createWordArray(props.data["text"]);
    
    return (
  
      <>
        
        <div className ="testDivContainer">

            {
              wordsArray.map((word, index) =>
                {
                    return (

                        <div 
                          key={index} 
                          className="staticWordDiv"

                          style=
                              {
                                {
                                  fontFamily: props.data["font"]["fontFamily"],
                                  fontSize: props.data["font"]["fontSize"],
                                  fontWeight: props.data["font"]["fontWeight"],
                                  animation: `${props.animationState ? "revealOverflow" : "_revealOverflow"} 750ms 250ms both 1`
                                }
                              }  
                        >

                          {word}

                          <div 
                            className="movingWordDiv"
                            style=
                              {
                                {
                                  fontFamily: props.data["font"]["fontFamily"],
                                  fontSize: props.data["font"]["fontSize"],
                                  fontWeight: props.data["font"]["fontWeight"],
                                  color: props.data["font"]["color"],
                                  animation: `${props.animationState ? "rise" : "_rise"} 750ms 250ms both 1`
                                }
                              }
                          >
  
                            {word}
  
                          </div>    

                        </div>    
                    )
                }
              )
            }
            
        </div>
  
      </>
  
    );
  
  }
  
  export default TextBottomAppear;
  