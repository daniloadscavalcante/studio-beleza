import Hero from '../components/Hero'
import Dockbar from '../layout/Dockbar'
import Navbar from '../layout/Navbar'


export default function Header(){
    return(
        <header>
            <Dockbar />  
            <Navbar />
            <Hero />
        </header>
    )
}