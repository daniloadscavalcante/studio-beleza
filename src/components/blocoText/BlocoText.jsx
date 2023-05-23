import styles from '../blocoText/BlocoText.module.css'

export default function BlocoText({title, text, textBtn, customClass}){
    return(
        <div className={`${styles.b_texto} ${styles[customClass]}`}>
            <h2 className="s_estilosModerno__tutilo">{title}</h2>
            <p>{text}</p>
            <a href="https" className="s_estiloModerno__btn">{textBtn}</a>
        </div>
    )
}