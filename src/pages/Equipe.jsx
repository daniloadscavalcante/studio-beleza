import { useEffect, useState } from "react"

export default function Equipe(){

        const [imgs, setImgs] = useState([])
            
        useEffect(() =>{
            fetch('./dados/imgs.json')
            .then((response)=> response.json())
            .then((k) => {
              setImgs(k)
              
            })       
            console.log(imgs)

        }, [])
           


    return (
        <>
        
        <p>Pagina Equipe</p>
        
        <img src="" alt="" />



        </>
        
    )
}