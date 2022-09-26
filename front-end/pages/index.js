import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className={styles.geral}>
      <Navbar />
      <div>
        <img className={styles.lol} src='./lol.png' />
        <img className={styles.cs} src='./cs.png' />
      </div>
      <div>
        <img className={styles.vava} src='./vava.png'/>
        <img className={styles.ff} src='./corno.png'/>
      </div>
    </div>
  )
}
