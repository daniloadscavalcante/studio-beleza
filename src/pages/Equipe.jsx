import { useEffect, useState } from "react"
import  "../layout/TitleCenter.css"


export default function Equipe(){

        const [imgs, setImgs] = useState([])
        const url = './dados/imgs.json'
        
        useEffect(() =>{
            fetch(url)
            .then((response)=> response.json())
            .then((k) => {
              setImgs(k)
             
            
            }) 
            .catch((error) => console.log("não pegou os dados"))      
           
        }, [])           


    return (
        <main>
            <div>
                <h2 className="title-center">Profssionais</h2>
            </div>
            
            <section className="profissionais">       
                {imgs.map(item => (
                    <figure key={item.nome}>
                        <img src={item.url} alt={item.alt} />
                        <figcaption>{item.nome}</figcaption>
                    </figure>
                ))}
            </section>
        </main>        
        
    )
}