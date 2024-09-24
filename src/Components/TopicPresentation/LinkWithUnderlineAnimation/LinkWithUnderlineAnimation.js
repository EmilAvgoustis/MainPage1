import './LinkWithUnderlineAnimation.css';

import {useRef, useEffect} from 'react';

function LinkWithUnderlineAnimation(props) {

  /* 
     props = [font, link]

     font should be of the form:

     font=
     {
        "fontFamily": "something", 
        "fontSize": "something", 
        "fontWeight": "something", 
        "text": "something", 
        "color": "something"
     }

     link should be a string
  */

    const linkRef = useRef(null);
    const spanRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() =>
      {
        Object.assign(spanRef.current.style, 
          {
            fontFamily: props.font["fontFamily"], 
            fontSize: props.font["fontSize"], 
            fontWeight: props.font[" fontWeight"], 
            color: props.font["color"],
          }
        );

        setTimeout(() =>
          {
            Object.assign(spanRef.current.style, 
              {
                height: `${spanRef.current.offsetHeight - 7.5}px`
                
              }
            );
          },
          20
        );

        Object.assign(sliderRef.current.style, 
          {
            backgroundColor: props.font["color"]
          }
        );
      },
      []
    );

    return (
  
      <>    
          <div className='lwuaContainer'>

            <a ref={linkRef} href={props.link} target="_blank"></a>

            <div className="fontDiv" onClick={() => {linkRef.current.click()}}>

                <div ref={spanRef}>
                  {props.font["text"]}
                </div>

                <div ref={sliderRef} className="slider"></div>

            </div>

          </div>     
      </>
  
    );
  
  }
  
  export default LinkWithUnderlineAnimation;