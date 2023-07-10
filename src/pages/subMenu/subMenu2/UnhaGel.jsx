import img1 from '../../../assets/unha.jpg'
import img2 from '../../../assets/img-unhadegel.jpg'
import img3 from '../../../assets/img2-unhadegel.jpg'
import img4 from '../../../assets/img3-unhadegel.jpg'
import icone from '../../../assets/bi_brush.svg'
import HeroBase from '../../../components/heroBase/HeroBase'

export default function UnhaGel(){
    return (
            <main>
                <HeroBase 
                titulo="Unha de Gel"
                bg ="/img/banner-unhaDeGel.jpg"
                />
                
            <section className="unhaDeGel">
                <div className="unhaDegel__img">
                    <img src={img1} alt="depilação a laser"/>
                </div>
                <div className="unhaDegel__texto">
                    <h2 className="unhaDegel__titulo">UNHA DE GEL</h2>
                    <p>você. São especializados em criar um look único e treinar você para os cuidados diários. Oferecemos uma variedade de serviços como: corte masculino e feminino, coloração, tonalização, reflexos, mechas, luzes, ombre hair, tratamentos capilares e penteados para ocasiões especiais. Você pode se assegurar de estar recebendo um tratamento individualizado e com resultado.</p>
                    
                    <a href="#" className="btn unhaDeGel__btn">Saiba mais</a>  
                </div>                    
            </section>
            <section className="servicoUnhagel">
                <div className="serv">
                    <h2 className="servicoUnhagel__titulo">manicure e pedicure</h2>                
                    <ul className="servicoUnhagel__list">
                        <li>Esmaltação em gel<img className="iconUnhagel" src={icone} alt=""/></li>
                        <li>Esmaltação<img className="iconUnhagel" src={icone} alt=""/></li>
                        <li>Alongamento<img className="iconUnhagel" src={icone} alt=""/></li>
                        <li>Blindagem<img className="iconUnhagel" src={icone} alt=""/></li>
                        <li>Banho de gel<img className="iconUnhagel" src={icone} alt=""/></li>
                        <li>Aplicação de unhas postiças<img className="iconUnhagel" src={icone} alt=""/></li>
                        <li>Unha Decorada<img className="iconUnhagel" src={icone} alt=""/></li>
                    </ul>                
                </div>
            </section>

            <section className="imgs-ilustrativa">            
                <div className="imgs-ilustrativa__servico">
                <figure>
                        <img src={img2} alt=""/>
                </figure>
                <figure>
                        <img src={img3} alt=""/>
                </figure>
                <figure>
                        <img src={img4} alt=""/>
                </figure>       
                </div>
                <a href="#" className="btn  imgs-ilustrativa__btn">Saiba mais</a>  
            </section>
            
        </main>
    
    
    )
}