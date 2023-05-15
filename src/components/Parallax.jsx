import styles from '../components/Parallax.module.css';

export default function Parallax({title, conteudo}){
    return(
        <section className={styles.parallax}>
            <h2>{title}</h2>
            {conteudo}
            
        </section>
    )
}