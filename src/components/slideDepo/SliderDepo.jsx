
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SliderDepo.css"

export default function SimpleSlider(){
    
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1
      };       
    
    return(                 
        <Slider className='depo-carrosel' {...settings}>
            <div className="depoimentos__info">                    
                <p className="depoimentos__texto">is simply dummy text of the printing and typesetting ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whenis simply dummy text of the printing and typesetting ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="depoimentos__info">                   
                <p className="depoimentos__texto">which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as</p>
            </div>
            <div className="depoimentos__info">                    
                <p className="depoimentos__texto">eproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by by Cicero, written in 45 BC. This book is a treatise on the theory of</p>
            </div>
            <div className="depoimentos__info">                    
                <p className="depoimentos__texto">Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.Quem num gosta di mé, boa gentis num é.Atirei o pau no gatis, per gatis num morreus.Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
            </div> 
        </Slider>        

    )
}