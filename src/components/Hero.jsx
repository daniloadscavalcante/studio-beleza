import Glider from 'react-glider';
import 'glider-js/glider.min.css';

export default function Hero(){
    return(        
        <Glider 
            className="slider-container" id="glider"
            draggable
            hasArrows
            hasDots
            slidesToShow={1}
            slidesToScroll={1}
            >
            
            <div class="slider"></div>
            <div class="slider1"></div>
            <div class="slider2"></div>
            <div class="slider3"></div>      

        </Glider>
    )
}