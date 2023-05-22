import LogoFooter from '../assets/logoFOOTER.svg'

export default function Footer(){
    return(
        <footer>
        <div className="footer-center">
            <div className="footer-center__logo">
                <img src={LogoFooter} alt="Logo da empresa" />
            </div>

            <div className="footer-contato">
                <h4 className="footer-contato__titulo">Contato</h4>
                <address className="footer-contato__endereco">Rua. Santos siqueira, 500 Centro,<br /> Santo André. </address>
                <a href="tel:+"><i className="fa-brands fa-whatsapp"></i>(11)924513658</a> <br />
                <a href="tel:+"><i className="fa-brands fa-whatsapp"></i>(11)44869215</a>
            </div>

            <div className="midias-socias test">
                <h4 className="">Redes Sociais</h4>
                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i> </a>       
            </div>
        </div>
    </footer>
    )
}