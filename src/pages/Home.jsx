
import BlocoText from '../components/blocoText/BlocoText';
import Container from '../layout/Container';

import imgExp from '../assets/img_melhoresExpe.jpg'
import imgIntro from '../assets/estilosModerno.jpg'
import Parallax from '../components/parallax/Parallax'
import SliderDepo from '../components/slideDepo/SliderDepo'
import Galeria from '../components/Galeria';
import HeroBase from '../components/heroBase/HeroBase';
import BannerHome from '../components/bannerHome/BannerHome'

export default function Home(){
    return (
        <main>
            <HeroBase 
            tipo="componente"
            conteudo={<BannerHome />}
            />
            
            <Container>
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
            </Container>                
              <Parallax 
                    title="Venha ter uma experiencia incrivel com um dia gratis"
                    type="texto"
                    conteudo= "is simply dummy text of the printing and typesetting ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whenis simply dummy text of the printing and typesetting ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
                    />             
            <Container customClass='column-wrapper'>                
                <BlocoText                 
                customClass="b_texto-right"
                title="Proporcionamos as melhores experiências"
                text="psum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, tially unchanged. traset sheets containing Lorem Ipsum passages, and more recently with desktop"/>

                <div className='img-experiecia'>
                    <img src={imgExp} alt="mulher com toalha no cabelo" />
                </div>                    
            </Container>

            <Parallax title="Depoimentos" conteudo={<SliderDepo />} customClass="depoimentos"/> 
            <Galeria />
        </main>       
    
    
    
    )
}