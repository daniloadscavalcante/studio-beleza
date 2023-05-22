import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Servicos from './pages/Servicos'

import Galeria from './pages/Galeria'
import Equipe from './pages/Equipe'
import Contato from './pages/Contato'
import Header from "./layout/Header"
import Footer from "./layout/Footer"

function App() {
  return (
    <Router>         
      <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/servicos' element={<Servicos />} />            
            <Route path='/galeria' element={<Galeria />} />
            <Route path='/equipe' element={<Equipe />} />
            <Route path='/contato' element={<Contato />} />        
        </Routes>
        <Footer />
</Router>  
    
  );
}

export default App;
