import styles from './Title.module.css';

export default function Title({texTitle, customClass}){
    return <h2 className={`${styles.titleWhite} ${styles[customClass]}`}>{texTitle}</h2>
    
}