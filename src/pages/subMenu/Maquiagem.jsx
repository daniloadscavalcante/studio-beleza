import img1 from '../../assets/imagensMaquiagem.png'
import img2 from '../../assets/maquiagemInlustrativa.png'
import img3 from '../../assets/FotoMaquiagem.jpg'
import icone from '../../assets/icone-pincelMaq.png'
import HeroBase from '../../components/heroBase/HeroBase'

export default function Maquiagem(){
    return (
    
    <main>
        <HeroBase 
        titulo="maquiagem"
        bg="/img/banner-maquiagem.jpg"
        />
        
    <section className="maquiagem">
        <div className="iconePincel">
            <img src={icone} alt="icone pincel" styles="width: 100px;"/>
        </div>
        
       <h2>Faça maquiagens poderosas</h2>
       <div className="capaMaquiagem">
            <img src={img1} alt=""/>
       </div>
    </section>      
    
    <section class="maquiagem-servico">
        <div class="maquiagem-servico__center">                
            <div className="servico maquiagem-servico--coluna">                    
                <ul className="servico__lista servico__lista--coluna servico__lista--maquiagem">                        
                    <h4 className="servico__titulo servico__titulo--estetica">Serviços:</h4>
                    <li>fi a fio<i className="fa-solid fa-check"></i></li>
                    <li>lash lifting<i className="fa-solid fa-check"></i></li>
                    <li>volume brasileiro<i className="fa-solid fa-check"></i></li>
                    <li>classico<i className="fa-solid fa-check"></i></li>
                    <a href="#" className="btn servico__btn--maquiagem">Saiba mais</a>
                </ul>
                <div className="servico__imgMaquiagens">
                    <img src={img2} alt="imagem de maquiagens"/>
                </div>
            </div>                
        </div>
    </section>

    <section className="maquiagem-info">
        <div className="maquiagem-info__img">
            <img src={img3} alt=""/>
        </div>
       <div className="maquiagem-info__texto">                
            <h4>Micropigmentação:</h4>
            <p>é um procedimento diferente da antiga maquiagem definitiva, porque é, na verdade, uma maquiagem temporária. O aparelho usado tem uma rotação menor que o da tatuagem, deixando o traço mais suave.O pigmento usado é próprio para o rosto e não sofre variação de cor como o da tatuagem, que após alguns anos azulava as sobrancelhas.</p>
            <h4>Maquiagem definitiva:</h4>
            <p>é um tipo de tatuagem que perfura a camada mais profunda da pele. Se o resultado não agradar, é complicado livrar-se do problema.</p>                  
        </div>
    </section>        
</main>
    
    
    )
}