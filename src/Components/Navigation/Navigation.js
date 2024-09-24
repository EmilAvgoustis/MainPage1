import "./Navigation.css";

import {useState, useEffect, useRef} from "react";

function Navigation(props)
{ 
    //props = [data]

    const revealQuery = window.matchMedia("(min-width: 1000px)");

    const [revealState, setRevealState] = useState(false);
    const [menuClickState, setMenuClickState] = useState(false);
    const [revealHorizontalVideos, setRHV] = useState(false);
    const [revealVerticalVideos, setRVV] = useState(false);

    revealQuery.addEventListener("change", () =>
      {
        if(revealQuery.matches)
        {
            setRevealState(true);
            setRVV(false);

            if(smallScreenMenuDivRef.current !== null)
            {
                removeMenu();
            } 
        }  
        else if(!revealQuery.matches)
        {
            setRevealState(false);
            setRHV(false);
        }
      }
    );
    
    useEffect(() =>
      {
        if(revealQuery.matches)
        {
            setRevealState(true);
        }    
      },[]
    );

    const smallScreenMenuDivRef = useRef(null);
    const horizontalVideosDivRef = useRef(null);
    const menuItemVideosRef = useRef(null);
    const verticalVideosDivRef = useRef(null);
    const menuItemVideosVerticalRef = useRef(null);
    const menuButtonRef = useRef(null);
    
    //closes opened catalogs when you click outside them 

    document.addEventListener("click", (event) => 
      {
        if
        (
          smallScreenMenuDivRef.current !== null && 
          !smallScreenMenuDivRef.current.contains(event.target) &&
          event.target !== menuButtonRef.current
        )  
        {
            removeMenu();
        } 

        if(horizontalVideosDivRef.current !== null && event.target !== menuItemVideosRef.current)
        {
          setRHV(false);
        }     

        if(verticalVideosDivRef.current !== null && event.target !== menuItemVideosVerticalRef.current)
        {
          setRVV(false);
        }  
      }
    );

    function removeMenu()
    {
      smallScreenMenuDivRef.current.style.marginRight = "-250px";

          setTimeout(() =>
            {
              setMenuClickState(false); 
            },
            500
          );
    }

    return ( 

        <nav className="navigationDiv">

          <a 
            className="themePhotoLink"
            href={props.data["links"]["Home"]}
            target="_blank"
          >
            {props.data["theme"]}
          </a>

          {
            revealState ? 

            <div className="menuItemsContainer">
                {
                  Object.keys(props.data["links"]).map((name, index) =>
                    (
                      <a 
                        key={props.data["links"][name]} 
                        className="menuItemLink" 
                        href={props.data["links"][name]} 
                        target="_blank"

                        style={{order: `${index}`}}
                      >     
                          {name}
                      </a>
                    )
                  )
                }

                <button 
                  ref={menuItemVideosRef}
                  className="menuItemVideos"
                  onClick={() => {setRHV(!revealHorizontalVideos)}}

                  style={{backgroundColor: `${revealHorizontalVideos ? "rgba(255, 255, 255, 0.3)" : "transparent"}`}}
                >
                    Videos

                    {
                        revealHorizontalVideos ? 
                        
                        <div 
                          ref={horizontalVideosDivRef}
                          className="horizontalVideosDiv"
                        >

                            {
                              Object.keys(props.data["videos"]).map((name) =>
                                (
                                  <a 
                                    key={props.data["videos"][name]} 
                                    className="videoLink" 
                                    href={props.data["videos"][name]} 
                                    target="_blank"
                                  >     
                                      {name}
                                  </a>     
                                )
                              )
                            }

                        </div>

                        :<></>
                    }

                </button>
            </div> 

            : 
            
            <button
              ref={menuButtonRef}
              className="menuButton"
              onClick={() => {setMenuClickState(true)}}
            >
                Menu
            </button>
          }
          
          {
            menuClickState ?

            <div
              ref={smallScreenMenuDivRef}
              className="smallScreenMenuDiv"

              style={{height: `${document.body.scrollHeight}px`}}
            >
                <button
                  className="xGoldDiv"
                  onClick={removeMenu}
                >
                </button>

                {
                  Object.keys(props.data["links"]).map((name, index) =>
                      (
                        <a 
                          key={props.data["links"][name]} 
                          className="menuItemLink" 
                          href={props.data["links"][name]} 
                          target="_blank"
  
                          style={{order: `${index}`}}
                        >     
                            {name}
                        </a>
                      )
                    )
                }

                <button 
                  ref={menuItemVideosVerticalRef}
                  className="menuItemVideos"
                  onClick={() => {setRVV(!revealVerticalVideos)}}

                  style={{backgroundColor: `${revealVerticalVideos ? "rgba(255, 255, 255, 0.3)" : "transparent"}`}}
                >
                    Videos

                    {
                        revealVerticalVideos ? 
                        
                        <div 
                        ref={verticalVideosDivRef}
                        className="verticalVideosDiv">

                            {
                              Object.keys(props.data["videos"]).map((name) =>
                                (
                                  <a 
                                    key={props.data["videos"][name]} 
                                    className="videoLink" 
                                    href={props.data["videos"][name]} 
                                    target="_blank"
                                  >     
                                      {name}
                                  </a>     
                                )
                              )
                            }

                        </div>

                        :<></>
                    }

                </button>

            </div>

            :<></>
          }          

        </nav>
       
    );
}

export default Navigation;