import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'


import Galeria from './pages/Galeria'
import Equipe from './pages/Equipe'
import Contato from './pages/Contato'
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Cabelo from './pages/subMenu/Cabelo'
import Depilacao from './pages/subMenu/Depilacao'
import Estetica from './pages/subMenu/Estetica'
import Maquiagem from './pages/subMenu/Maquiagem'
import UnhaGel  from './pages/subMenu/subMenu2/UnhaGel'

function App() {
  return (
    <Router>         
      <Header />
        <Routes>
            <Route path='/' element={<Home />} />            
              <Route path='/cabelo' element={<Cabelo />} />   
              <Route path='/depilacao' element={<Depilacao />} />   
              <Route path='/estetica' element={<Estetica />} />   
              <Route path='/maquiagem' element={<Maquiagem />} />   
              <Route path='/unhadegel' element={<UnhaGel />} />         
            <Route path='/galeria' element={<Galeria />} />
            <Route path='/equipe' element={<Equipe />} />
            <Route path='/contato' element={<Contato />} />        
        </Routes>
        <Footer />
</Router>  
    
  );
}

export default App;
