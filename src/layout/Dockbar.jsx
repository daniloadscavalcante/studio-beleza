import Logo from '../assets/LOGO1.png'

export default function Dockbar(){
    return(
        <div className='dock-bar'>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='midias-socias'>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
            </div>
        </div>
    )
}