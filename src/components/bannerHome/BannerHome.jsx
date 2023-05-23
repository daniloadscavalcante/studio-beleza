import Glider from 'react-glider';
import 'glider-js/glider.min.css';


export default function BannerHome(){
    return(        
        <Glider 
            className="slider-container" id="glider"
            draggable
            hasArrows
            hasDots
            slidesToShow={1}
            slidesToScroll={1}
            >
            
            <div className="slider"></div>
            <div className="slider1"></div>
            <div className="slider2"></div>
            <div className="slider3"></div>      

        </Glider>
    )
}