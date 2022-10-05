import styles from '../styles/footer.module.css'

export default function footer() {
    return (
	<div>
  <footer className={styles.footer}>
    <p className={styles.follow}>Nos siga</p>
	<p className={styles.contact}>Contato</p>
	<p className={styles.number}>+55 (47) 99642-9894</p>
	<img src="eliti.png"/>
  </footer>
    </div>
);
};