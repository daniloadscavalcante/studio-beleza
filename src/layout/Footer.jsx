import LogoFooter from '../assets/logoFOOTER.svg'

export default function Footer(){
    return(
        <footer>
        <div class="footer-center">
            <div class="footer-center__logo">
                <img src={LogoFooter} alt="Logo da empresa" />
            </div>

            <div class="footer-contato">
                <h4 class="footer-contato__titulo">Contato</h4>
                <address class="footer-contato__endereco">Rua. Santos siqueira, 500 Centro,<br /> Santo André. </address>
                <a href="tel:+"><i class="fa-brands fa-whatsapp"></i>(11)924513658</a> <br />
                <a href="tel:+"><i class="fa-brands fa-whatsapp"></i>(11)44869215</a>
            </div>

            <div class="midias-socias test">
                <h4 class="">Redes Sociais</h4>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i> </a>       
            </div>
        </div>
    </footer>
    )
}