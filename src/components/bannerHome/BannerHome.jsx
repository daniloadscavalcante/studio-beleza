import * as React from "react";
import Glider from 'react-glider';
import 'glider-js/glider.min.css';


export default function BannerHome(){
    const INTERVAL = 3000;
    const MAX = 3;
  
    const intervalRef = React.useRef(null);
  
    const callbackRef = React.useCallback(
      (glider) => {
        if (glider) {
          if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
              let index = glider.page;
              if (index < MAX) {
                index += 1;
              } else {
                index = 0;
              }
              glider.scrollItem(index, false);
            }, INTERVAL);
          }
        }
      },
      [intervalRef]
    );
  
    React.useEffect(
      () => () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      },
      [intervalRef]
    );

    return(        
        <Glider 
            className="slider-container" 
            draggable
            hasArrows
            hasDots
            slidesToShow={1}            
            ref={callbackRef}
            >
            
            <div className="slider"></div>
            <div className="slider1"></div>
            <div className="slider2"></div>
            <div className="slider3"></div>      

        </Glider>
    )
}