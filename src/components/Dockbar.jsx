import Logo from '../assets/LOGO1.png'

export default function Dockbar(){
    return(
        <div className='dock-bar'>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='midias-socias'>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
            </div>
        </div>
    )
}