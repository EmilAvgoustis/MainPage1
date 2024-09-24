import "./ResponsiveSkeleton.css";
import data from "./data.json";

import { useState } from "react";

function ResponsiveSkeleton() { 



    return (
  
      <div className="rsOuterDiv"> 
        
        <div className="rsArticleWithTextDiv">

            {
                Object.keys(data).map((key, index) =>
                  (
                    <div key={index} className="rsArticleWithTextInnerDiv">{data[key]}</div>
                  )
                )
            }

        </div>

        <div className="rsArticleWithoutTextDiv">

          
            
        </div>

        <div className="rsCategoriesDiv">

          <div className="rsCategoriesInnerDiv">
  
          
              
          </div>
            
        </div>

        <div className="rsVideosDiv">


            
        </div>
    
      </div> 
  
    );
  
  }
  
  export default ResponsiveSkeleton;