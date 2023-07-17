import {Link} from 'react-router-dom'
import { useState } from 'react'

export default function Navbar(){
    
    const [ativo, setAtivo] = useState(false)

   function handleToggle(){
    setAtivo(!ativo)  
    console.log('clicou')  
   }
   function handlehideMenu(){
    setAtivo(false)
   }
   function handleLinkClick(e) {
    e.stopPropagation();
  }
    return(
        <nav className='nav-wrapper'>
            <div className={`toggle ${ativo ? 'Ativo' : ''}`} onClick={handleToggle}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            
            <ul className={`menu ${ativo ? 'Ativo' : ''}`}onClick={handlehideMenu}>
                <span className="close-toggle">&times;</span>
                <li><Link to="/">Home</Link></li>
                <li><Link className='item' onClick={handleLinkClick}>Serviços</Link>                
                    <ul className= 'sub-menu'>
                        <li><Link to="/cabelo">Cabelo</Link></li>
                        <li><Link to="/depilacao">Depilação</Link></li>
                        <li><Link className='arrow-downM' onClick={handleLinkClick}>Manicure</Link>
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