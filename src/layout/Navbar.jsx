import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className='nav-wrapper'>
            <ul className='menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/servicos">Serviços</Link></li>
                <li><Link to="https://wa.me/55119999988888" target='_blank' rel="noopener noreferrer">Agenda</Link></li>
                <li><Link to="/galeria">Galeria</Link></li>
                <li><Link to="/equipe">Equipe</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    )
}