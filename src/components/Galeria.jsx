import img1 from '../assets/img1_galeria.png'
import img2 from '../assets/img2_galeria.png'
import img3 from '../assets/img3_galeria.png'
import img4 from '../assets/img4_galeria.png'
import img5 from '../assets/img5_galeria.png'
import img6 from '../assets/img6_galeria.png'
import img7 from '../assets/img7_galeria.png'
import img8 from '../assets/img8_galeria.png'

export default function Galeria(){
    const imagens = [img1, img2, img3, img4, img5, img6, img7, img8]

   
    return(    
        <section class="galeria-home">
            <h2 class="galeria-home__titulo">Galeria</h2>
            <div class="galeria-home__cards">
                {imagens.map(img =>(
                    <article className='galeria-home__card' key={img}>
                        <figure>
                            <img className='galeria-home__card__img' src={img} alt="" /
                        </figure>                    
                    </article>
                ))}                          
            </div>   
        </section>
        
    )
}