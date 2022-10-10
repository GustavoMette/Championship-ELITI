import styles from '../styles/footer.module.css'

export default function footer() {
    return (
	<div className={styles.all}>
  <footer className={styles.footer}>
    <p className={styles.follow}>Nos siga</p>
	<p className={styles.contact}>Contato</p>
  <a href='https://api.whatsapp.com/send?phone=5547996429894'>
	<p className={styles.number}>+55 (47) 99642-9894</p>
  </a>
  <a href='https://www.eliti.com.br/'>
	<img className={styles.eliti} src="ELITI.png"/>
  </a>
  <a href='
https://instagram.com/escolaeliti?igshid=YmMyMTA2M2Y='>
  <img className={styles.insta} src="insta.png"/>
  </a>
  <a href="https://discord.gg/fudFy7Zz5e">
  <img className={styles.discord} src="discord.png"/>
  </a>
  <a href="https://api.whatsapp.com/send?phone=5547996429894&text=Ol%C3%A1%2C%20andei%20visitando%20o%20site%20do%20Campeonato%20da%20Eliti%2C%20eu%20gostaria%20de%20saber%20um%20pouco%20mais%20sobre%20o%20projeto.">
  <img className={styles.whats} src="whats.png"/>
  </a>
  </footer>
  </div>
);
};