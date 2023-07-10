import img from '../../assets/img-depilacao.jpg'
import img2 from '../../assets/depi-cera.jpg'

import HeroBase from "../../components/heroBase/HeroBase";

export default function Depilacao(){
    return (
        <main>
            <HeroBase 
            titulo="Depilação"
            bg="/img/banner-depilacao.jpg"
            />
            
            <section className="depilacao">
            <div className="depilacao__img">
                <img src={img} alt="depilação a laser"/>
            </div>
            <div className="depilacao__texto">
                <h2 className="depilacao__titulo">Depilação a laser</h2>
                <p>você. São especializados em criar um look único e treinar você para os cuidados diários. Oferecemos uma variedade de serviços como: corte masculino e feminino, coloração, tonalização, reflexos, mechas, luzes, ombre hair, tratamentos capilares e penteados para ocasiões especiais. Você pode se assegurar de estar recebendo um tratamento individualizado e com resultado.</p>
                <div className="depilacao-list">
                    <ul className="depilacao-list__beneTipos">
                        <span className="depilacao__titulo-list">Beneficios:</span>
                        <li>Sem dor</li>
                        <li>Rápido</li>
                        <li>Duração 3 meses</li>
                    </ul>
                    <ul className="depilacao-list__beneTipos">
                        <span className="depilacao__titulo-list">Tipos:</span>
                        <li>íntima</li>
                        <li>facial</li>
                        <li>Corporal Completa</li>
                        <li>Depilaçao Masculina</li>
                    </ul>
                </div>
                <a href="#" className="btn  depilacao__btn">Saiba mais</a> 
            </div>                    
        </section>
   
        <section className="depilacao depilacao--Cera">            
            <div className="depilacao__texto">
                <h2 className="depilacao__titulo">depilação com cera</h2>
                <p>você. São especializados em criar um look único e treinar você para os cuidados diários. Oferecemos uma variedade de serviços como: corte masculino e feminino, coloração, tonalização, reflexos, mechas, luzes, ombre hair, tratamentos capilares e penteados para ocasiões especiais. Você pode se assegurar de estar recebendo um tratamento individualizado e com resultado.</p>
                <div className="depilacao-list">
                    <ul className="depilacao-list__beneTipos">
                        <span className="depilacao__titulo-list">Beneficios:</span>
                        <li>Sem dor</li>
                        <li>Rápido</li>
                        <li>Duração 3 meses</li>
                    </ul>
                    <ul className="depilacao-list__beneTipos">
                        <span className="depilacao__titulo-list">Tipos:</span>
                        <li>íntima</li>
                        <li>facial</li>
                        <li>Corporal Completa</li>
                        <li>Depilaçao Masculina</li>
                    </ul>
                </div>
                <a href="#" className="btn  depilacao__btn">Saiba mais</a>  
            </div>
            <div className="depilacao__img">
                <img src={img2} alt="depilação com cera" />
            </div>  
        </section>
        </main>
    )
}