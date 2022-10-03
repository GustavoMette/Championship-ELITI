import styles from '../styles/footer.module.css'

export default function footer() {
    return (
<div className={styles.footer}>
    <footer>
        <h1 className={styles.siga}>Nos Siga</h1>
        <h1 className={styles.contato}>Contato</h1>
        <p className={styles.numer}>+55 (47) 996429894</p>
    </footer>
</div>
 )
}