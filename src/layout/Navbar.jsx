import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className='nav-wrapper'>
            <ul className='menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/servicos" className='item'>Serviços</Link>                
                    <ul className= 'sub-menu'>
                        <li><Link to="/cabelo">Cabelo</Link></li>
                        <li><Link to="/depilacao">Depilação</Link></li>
                        <li><Link to="/manicure" className='arrow-downM'>Manicure</Link>
                            <ul className='sub-menu-M'>
                                <li><Link to="/unhadegel">Unha de Gel </Link></li>
                            </ul>
                        </li>
                        <li><Link to="/estetica">Estética</Link></li>
                        <li><Link to="/maquiagem">Maquiagem</Link></li>
                    </ul>
                </li>
                <li><Link to="https://wa.me/5511933448282" target='_blank' rel="noopener noreferrer">Agenda</Link></li>
                <li><Link to="/galeria">Galeria</Link></li>
                <li><Link to="/equipe">Equipe</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    )
}