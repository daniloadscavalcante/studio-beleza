import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className='nav-wrapper'>
            <ul className='menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/servicos">Serviços</Link></li>
                <li><Link to="/agenda">Agenda</Link></li>
                <li><Link to="/galeria">Galeria</Link></li>
                <li><Link to="/equipe">Equipe</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    )
}