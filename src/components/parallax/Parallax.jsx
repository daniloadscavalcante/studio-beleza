import styles from '../parallax/Parallax.module.css';

export default function Parallax({title, conteudo, type, customClass}){
    return(
        <section className={`${styles.parallax} ${styles[customClass]}`}>
            <h2>{title}</h2>
            {type ==="texto" ? (<p>{conteudo}</p>) : (conteudo) }            
        </section>
    )
}