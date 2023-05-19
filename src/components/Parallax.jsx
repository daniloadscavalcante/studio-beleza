import styles from '../components/Parallax.module.css';

export default function Parallax({title, conteudo, type}){
    return(
        <section className={styles.parallax}>
            <h2>{title}</h2>
            {type ==="texto" ? (<p>{conteudo}</p>) : (conteudo) }            
        </section>
    )
}