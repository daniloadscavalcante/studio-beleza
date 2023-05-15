import BlocoText from '../components/BlocoText'
import imgIntro from '../assets/estilosModerno.jpg'

export default function SecaoMain(){
    return(
        <div className="s_estilosModerno">
            <div className="s_estilosModerno__img">
                <img src={imgIntro} alt=" mulher cabelo loiro" />                
            </div>
            <BlocoText 
            title="Estilos Mordernos"
            text= "Lorem has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s"
            textBtn="Saiba mais"
            />                    
        </div>
    )
}