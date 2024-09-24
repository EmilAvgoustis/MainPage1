import "./Hourglass.css";

function Hourglass(props)
{ 
    /* props = [cssObj, animation]

    cssObj must be of the form:

    cssObj =
    {
      "baseColor": "something",
      "glassColor": "something",
      "sandColor": "something"
    }

    animation must be of the form:

    animation =
    {
      "sandLine": "something",
      "risingSand": "something", 
      "fallingSand": "something",
      "duration": "something"
    },

    */


    return (

        <>

            <div 
                className="hourglassOuterDiv" 
            >
                <div 
                    className="hourglassBase top" 
                    style={{backgroundColor: props.cssObj["baseColor"]}}
                >  
                </div>

                <div className="column left"></div>
                <div className="column right"></div>

                <div className="glassBase top"></div>
                

                <div 
                    className="glass top"
                    style={{backgroundColor: props.cssObj["glassColor"]}}
                >

                    <div 
                        className="fallingSand" 
                        style=
                              {
                                {
                                  backgroundColor: props.cssObj["sandColor"],
                                  animation: `${props.animation["fallingSand"]} 
                                              ${props.animation["duration"]}ms 
                                              1 both cubic-bezier(.39,-0.07,.97,.58)`
                                }
                              }
                    ></div>


                </div>

                <div 
                    className="glass bottom"
                    style={{backgroundColor: props.cssObj["glassColor"]}}
                >

                    <div 
                        className="sandLine" 
                        style=
                              {
                                {
                                  backgroundColor: props.cssObj["sandColor"],
                                  animation: `${props.animation["sandLine"]} 
                                              500ms 1 both linear`
                                }
                              }
                    ></div>

                    <div 
                        className="risingSand" 
                        style=
                              {
                                {
                                  backgroundColor: props.cssObj["sandColor"],
                                  animation: `${props.animation["risingSand"]} 
                                              ${props.animation["duration"] - 500}ms
                                              500ms 
                                              1 both cubic-bezier(.46,.17,.87,.61)`
                                }
                              }
                    ></div>


                </div>

                <div className="glassBase bottom"></div>

                <div 
                    className="hourglassBase bottom" 
                    style={{backgroundColor: props.cssObj["baseColor"]}}
                >
                </div>

            </div>
        
        </>
       
    );
}

export default Hourglass;

