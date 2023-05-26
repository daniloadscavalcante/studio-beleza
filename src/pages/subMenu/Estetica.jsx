import HeroBase from '../../components/heroBase/HeroBase'
import Container from '../../layout/Container'


export default function Estetica(){
    return (
        <main>
            <HeroBase 
            titulo=" Estética"
            bg="/img/banner-estetica.jpg"
            />
            <p>pagina Estetica</p>
        
        <Container>
        <p className="introducao__texto">você. São especializados em criar um look único e treinar você para os cuidados diários. Oferecemos uma variedade de serviços como: corte masculino e feminino, coloração, tonalização, reflexos, mechas, luzes, ombre hair, tratamentos capilares e penteados para ocasiões especiais. Você pode se assegurar de estar recebendo um tratamento individualizado e com resultado.</p>
        </Container>

        <section className="prevImgEstetica">
            <div className="prevImgCabelo__img">
                <img src="/thumbs/img-estetica.jpg" alt="mulher maquiada"/>
            </div>
            <div className="prevImgCabelo__img">
                <img src="./thumbs/img2-estetica.jpg" alt="mulher com cilios  grande"/>
            </div>
            <div className="prevImgCabelo__img">
                <img src="./thumbs/img3-estetica.jpg" alt="mulher maquiada"/>
            </div>
            <div className="prevImgCabelo__img">
                <img src="./thumbs/img4-estetica.jpg" alt="mulher maquiada com gliter"/>
            </div>
        </section>
        
        <section className="estetica-servico">
            <div className="estetica-servico__center">
                <h4 className="servico__titulo servico__titulo--estetica">Serviços:</h4>
                <div className="servico">
                    <ul className="servico__lista servico__lista--coluna">                        
                        <li>fi a fio<i className="fa-solid fa-check"></i></li>
                        <li>lash lifting<i className="fa-solid fa-check"></i></li>
                        <li>volume brasileiro<i className="fa-solid fa-check"></i></li>
                        <li>classico<i className="fa-solid fa-check"></i></li>
                        <li>alongamento<i className="fa-solid fa-check"></i></li>
                        <li>correção de cor<i className="fa-solid fa-check"></i></li>
                        <li>volume hibrido<i className="fa-solid fa-check"></i></li>
                        <li>tonalidade<i className="fa-solid fa-check"></i></li>                                               
                    </ul>
                    <div className="servico__imgRostocilios">
                        <img src="/img/rosto-estetica.png" alt="imagem ilustrativa"/>
                    </div>
                </div>
                <a href="#" className="btn servico__btn-estetica">Saiba mais</a>
            </div>
        </section>

        <section className="estetica-prev">
            <h2 className="estetica-prev__titulo">Tecnicas e estilos Inovadores</h2>
        <div className="prevImgEstetica">
                <div className="prevImgCabelo__img">
                    <img src="/thumbs/img-tecnica.jpg" alt="sobrancelha de rena"/>
                </div>
                <div className="prevImgCabelo__img">
                    <img src="/thumbs/img2-tecnica.jpg" alt="Maquiagem inovadora"/>
                </div>
                <div className="prevImgCabelo__img">
                    <img src="/thumbs/img3-tecnica.jpg" alt="tecnica fio a fio "/>
                </div>
                <div className="prevImgCabelo__img">
                    <img src="/thumbs/img4-tecnica.jpg" alt="maquiagem tradicional"/>
                </div>
            </div>
        </section>

        <section className="bronzeHarmonizacao">
            <h2 className="bronze-titulo">Bronzeamento e Harmonização</h2>
            <div className="bronzeamento">
                <div className="bronzeamento__img">
                    <img src="/img/estetica-bronzeamento.jpg" alt="bronzeamento"/>
                </div>

                <div className="bronzeamento__img">
                    <img src="/img/harmonizacao.jpg" alt="harmonização"/>
                </div>                
            </div>
        </section>

        <section className="microagulhamento">
            <h2>Microagulhamento</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipseen the
                Lorem Ipsum is simply dummy text of the typesetting industry.as been the
                </p>
                <div className="microagulhamento-img">
                    <img src="/img//microagulhameto.jpg" alt=""/>
                </div>
        </section>
        
    </main>
    
    
    )
}