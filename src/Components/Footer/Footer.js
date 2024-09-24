import './Footer.css';

import {useState, useEffect} from "react";

function Footer(props) { 

  // props = [data]  
    
  return (

  <div className='footerWrapper'> 

    <div className='footerLinksDiv'>

        <div className='footerLinksDivWords'>

            <span 
              style=
              {
                {
                  width: "100%",
                  fontFamily: "Kaligrafica",
                  fontSize: "32px",
                  color: "#77715f",
                  marginBottom: "10px"
                }
              }
            >
                Links
            </span>

            {
                props.data["footerLinksDivWords"].map((linkObj, index) => 
                  (
                    <a 
                        key={`footerLinksDivWordsLink${index}`}  
                        className='footerLinksDivWordsLink'
                        href={linkObj["href"]}
                    >
                        {linkObj["title"]}
                    </a>    
                  )
                )
            }

        </div>

        <div className='footerLinksDivTags'>

            <span 
              style=
              {
                {
                  width: "100%",
                  fontFamily: "Kaligrafica",
                  fontSize: "32px",
                  color: "#77715f",
                  marginBottom: "10px"
                }
              }
            >
                Tags
            </span>

            {
                props.data["footerLinksDivTags"].map((linkObj, index) => 
                  (
                    <a 
                        key={`footerLinksDivTagsLink${index}`}  
                        className='footerLinksDivTagsLink'
                        href={linkObj["href"]}
                    >
                        {linkObj["title"]}
                    </a>  
                  )
                )
            }

        </div>

        <div className='footerLinksDivQuotes'>

            <span 
              style=
              {
                {
                  width: "100%",
                  fontFamily: "Kaligrafica",
                  fontSize: "32px",
                  color: "#77715f",
                  marginBottom: "10px"
                }
              }
            >
                Quotes
            </span>

            <span
              style=
              {
                {
                  fontFamily: "Kaligrafica",
                  fontSize: "25px",
                  color: "#cccccc",
                }
              }
            >
                He who goes against the day, should not fear the night. 
                What is day for all beings, for the awakened one is night,
                and what is night for all beings for the awakened one is day.
                <br /><br />
                - Golovin

            </span>

        </div>

        <div className='footerLinksDivImages'>

              {
                props.data["footerLinksDivImages"].map((linkObj, index) => 
                  (
                    <a 
                      key={`footerLinksDivImagesLink${index}`}
                      className='footerLinksDivImagesLink'
                      href={linkObj["href"]} 
                    >
                      <div
                        className='footerLinksDivImagesLinkPhoto'
                        style={{backgroundImage: `url(${linkObj["photo"]})`}}
                      >
                      </div>
                      
                      <span className='footerLinksDivImagesLinkTitle'>{linkObj["title"]}</span>
                      <span className='footerLinksDivImagesLinkDate'>{linkObj["date"]}</span>

                    </a>
                  )
                ) 
              }

        </div>

    </div>

    <div className='footerCopyrightDiv'>

      <span className='footerCopyrightDivCopyright'>
        &copy; 2024 GolovinFond        
      </span>

    </div>

    
  </div> 

  );

}

export default Footer;
