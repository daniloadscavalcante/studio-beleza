import img from '../../assets/cabelo-cacheado.jpg'
import img2 from '../../assets/img-cabelo.jpg'
import img3 from '../../assets/img2-cabelo.jpg'
import img4 from '../../assets/img3-cabelo.jpg'
import svg from '../../assets/secadorPng 1.png'
import HeroBase from '../../components/heroBase/HeroBase'
import Container from '../../layout/Container'


export default function Cabelo(){
    return (
        <main>
            <HeroBase 
            titulo="cabelo"
            bg="/img/banner-cabelo.jpg"
            />
            <p>pagina cabelo</p>
            <Container customClass="column">
      
                <p className="introducao__texto">você. São especializados em criar um look único e treinar você para os cuidados diários. Oferecemos uma variedade de serviços como: corte masculino e feminino, coloração, tonalização, reflexos, mechas, luzes, ombre hair, tratamentos capilares e penteados para ocasiões especiais. Você pode se assegurar de estar recebendo um tratamento individualizado e com resultado.</p>
                
        
                <section className="prevImgCabelo">
                    <div className="prevImgCabelo__img">
                        <img src={img} alt="mulher cabelo cacheado"/>
                    </div>
                    <div className="prevImgCabelo__img">
                        <img src={img2} alt="mulher cabelo liso"/>
                    </div>
                    <div className="prevImgCabelo__img">
                        <img src={img3} alt="mulher cabelo loiro cacheado"/>
                    </div>
                    <div className="prevImgCabelo__img">
                        <img src={img4} alt="mulher cabelo descolorido"/>
                    </div>
                </section>
                
                <section className="cabelo-servico">
                    <div className="cabelo-servico__center">
                        <h4 className="servico__titulo">Alguns serviços:</h4>
                        <div className="servico">
                            <ul className="servico__lista">
                                <div className="servico__lista-coluna">
                                <li>BOTOX<i className="fa-solid fa-check"></i></li>
                                <li>PROGESSIVA<i className="fa-solid fa-check"></i></li>
                                <li>DESFRISAGEM<i className="fa-solid fa-check"></i></li>
                                <li>CAUTERIZAÇÃO<i className="fa-solid fa-check"></i></li>
                                <li>NUTRIÇÃO<i className="fa-solid fa-check"></i></li>
                                <li>TONALIDADE<i className="fa-solid fa-check"></i></li>
                                </div>
                                <div className="servico__lista-coluna">
                                <li>LUZES<i className="fa-solid fa-check"></i></li>
                                <li>SELAGEM<i className="fa-solid fa-check"></i></li>
                                <li>CRON CAPILAR<i className="fa-solid fa-check"></i></li>
                                <li>ALONGAMENTO<i className="fa-solid fa-check"></i></li>
                                <li>CORTE BORDADO<i className="fa-solid fa-check"></i></li>
                                <li>CORREÇÃO DE COR<i class="fa-solid fa-check"></i></li>
                                </div>
                                <div className="servico__lista-coluna">
                                <li>MEGA HAIR<i className="fa-solid fa-check"></i></li>
                                <li>CRON CAPILAR<i className="fa-solid fa-check"></i></li>
                                <li>CORTE + ESCOVA<i className="fa-solid fa-check"></i></li>
                                <li>MORENA ILUMINADA<i className="fa-solid fa-check"></i></li>
                                <li>REDUÇÃO DE VOLUME<i className="fa-solid fa-check"></i></li>
                                <li>REDUÇÃO DE VOLUME<i className="fa-solid fa-check"></i></li>
                                </div>
                            </ul>
                            <div className="servico__imgSecador">
                                <img src={svg} alt=""/>
                            </div>
                        </div>
                        <a href="#" className="btn servico__btn">Saiba mais</a>
                    </div>
                </section>
            </Container>
    </main>
        
    )

}