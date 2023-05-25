import styles from '../layout/Container.module.css'

export default function Container(props){
    return(
        <section className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</section>
    )
}