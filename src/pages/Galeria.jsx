import { useEffect, useState } from "react"

import "./Galeria.css"

export default function Galeria(){

    const [galeria, setGaleria] = useState([])
    const [novosdados, setnovosdados] = useState([])

    useEffect(() =>{
        fetch ('./dados/galeria.json')
        .then((r)=> r.json())
        .then((dados)=>{
            setGaleria(dados)
            console.log(dados[0].url)
            
        })
        .catch((error) => console.log("não pegou os dados")) 
    
        fetch ('./dados/test.json')
            .then((r)=> r.json())
            .then((dados)=>{
                console.log(dados.galeria);
                setnovosdados(dados.galeria)
            })
            .catch((error) => console.log("não pegou os dados test")) 

    }, [])


    return (
    
    <main>
        <p>Pagina Galeria</p>
        <section className="introducao">            
           <h2>Conheça um pouco do<br/> nosso trabalho</h2>          
        </section>         
        <section className="galeria"> 
        {galeria.map((item, index) => <div key={index} className={item.style}>
                <img src={item.url} alt={item.alt}/>
            </div> )}
        </section>
        {novosdados.map((novosdado, index) => <div key={index}><span>{novosdado.src}</span></div>)}
        {/* {galeria.length > 0 ? <section className="galeria">  
            <div className="galeriaImg1 w-3 h-2" >
                <img src={galeria[0].url} alt={galeria[0].alt}/>
            </div> 
            <div className="galeriaImg2 w-2 h-3" >
                <img src={galeria[1].url} alt={galeria[1].alt}/>
            </div>
            <div className="galeriaImg3 w-3 h-2"> 
                <img src={galeria[2].url} alt={galeria[2].alt}/>
            </div>	
	        <div className="galeriaImg4 w-3 h-2">
                <img src={galeria[3].url} alt={galeria[3].alt}/>
            </div>
            <div className="galeriaImg5 w-3 h-2" >
                <img src={galeria[4].url} alt={galeria[4].alt}/>
            </div>
            <div className="galeriaImg6 w-3 h-2">
                <img src={galeria[5].url} alt={galeria[5].alt}/>
            </div>
            <div className="galeriaImg7 w-2 h-3" >
                <img src={galeria[6].url} alt={galeria[6].alt}/>
            </div>
            <div className="galeriaImg8 w-4 h-2">
                <img src={galeria[7].url} alt={galeria[7].alt}/>
            </div>
            <div className="galeriaImg9 w-3 h-3" >
                <img src={galeria[8].url} alt={galeria[8].alt}/>
            </div>
            <div className="galeriaImg10 w-4 h-2" >
                <img src={galeria[9].url} alt={galeria[9].alt}/>
            </div>
            <div className="galeriaImg11 w-3 h-2" >
                <img src={galeria[10].url} alt={galeria[10].alt}/>
            </div>
            <div className="galeriaImg12 w-3 h-2" >
                <img src={galeria[11].url} alt={galeria[11].alt}/>
            </div>
            
            
        </section> : null} */}
                     
    </main>
    
    )
}