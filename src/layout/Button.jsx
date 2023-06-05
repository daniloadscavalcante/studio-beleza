import './Button.css'
import {Link} from 'react-router-dom'

export default function Button({url, customClass}){
    return ( 
        <button>
             <Link to={url} className={`${"btn"} ${[customClass]}`} target='_blank' rel="noopener noreferrer">Saiba mais </Link> 
        </button>
   
    
    )
}