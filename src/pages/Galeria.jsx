import { useEffect, useState } from "react"

import "./Galeria.css"
import HeroBase from "../components/heroBase/HeroBase"

export default function Galeria(){

    const [galeria, setGaleria] = useState([])
    const [file, setFile] = useState(null)

    
    
    useEffect(() =>{
        fetch ('./dados/galeria.json')
        .then((r)=> r.json())
        .then((dados)=>{
            setGaleria(dados)          
        })
        .catch((error) => console.log("não pegou os dados")) 
    }, [])

 

    return (
    
    <main>
        <HeroBase 
        titulo="galeria"
        bg="/img/banner-geral.jpg"
        />
        
        <div>            
           <h2 className="title-center">Conheça um pouco do<br/> nosso trabalho</h2>          
        </div>         
        <section className="galeria"> 
        {galeria.map((item, index) => <div key={index} className={item.style}>
                <img src={item.url} alt={item.alt} onClick={() => setFile(item)}/>
            </div> )     
            }
        </section>

            {file ? <div className="lightbox" style={{display: file ? "flex" : "none"}}>
                <span onClick={() => setFile(null)}>&times;</span><img src={file.url} alt={file.alt}/>
            </div> : null}
        
                             
    </main>
    
    )
}