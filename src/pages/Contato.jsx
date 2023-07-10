import HeroBase from "../components/heroBase/HeroBase"
import  "../layout/TitleCenter.css"

export default function Contato(){
    return (
    <main>
        <HeroBase 
        titulo ="Contato"
        bg ="/img/banner-maquiagem.jpg"
        />
        
        <div>
            <h2 className="title-center">Entre em contato para mais<br/>informações</h2>  
        </div>         
        <section className="contatoMain">  
            <span className="formTitlePromocao">Cadastre-se e receba promoções incrveis</span>
            <div className="contatoMain__form">             
                    <form id="form" >                        
                        <label for="cxNome">Nome Completo:</label>
                        <input type="text" id="cxNome" name="nome" placeholder="Nome:" required />
                        <label for="cxEmail">E-mail:</label>
                        <input type="email" id="cxEmail" name="email" placeholder="Email:" required />
                        <label for="cxWhat">Whatsapp:</label>
                        <input type="tel" id="cxWhat" name="zap" placeholder="(xx)xxxxx-xxxx" required/>

                        <button  className="btn btn-form" id="enviar">Cadastrar</button>
                    </form>                     
                       

                    <div className="contatoMain__maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.475862018933!2d-46.55989058557098!3d-23.443293684741654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef454fbde8b1b%3A0xb6a4fd9cc0f78140!2sAcademia%20Forma%20Ideal!5e0!3m2!1spt-BR!2sbr!4v1677867281208!5m2!1spt-BR!2sbr" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </div>

            <section class="contatoMain-info">
                <div>
                     <h4>Endereço:</h4>
                     <p><i className="fa-solid fa-location-dot"></i>Av. Pedro de souza lopes, 1232 - 02212000<br/>Guarulhos - SP</p>
                     <p><i className="fa-solid fa-location-dot"></i>Av. Dr ribeiro cardoso, 453 - 03256433<br/>Centro - SP</p>
                </div>

                <div>
                    <h4>Contato:</h4>
                    <a href="tel:+"><i className="fa-solid fa-phone-flip"></i>Telefone: 2222-2222</a>
                    <a href="tel:+"><i className="fa-brands fa-whatsapp"></i>Whatsapp: (11) 9 3333-4444</a>
                    <a href="mailto:"><i className="fa-regular fa-envelope"></i>Email: testecompor@sa.com.br</a>
                </div>
             </section> 
        </section>    
    </main>
    
        
    )
}