import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.geral}>
      <div className={styles.logo}>
        <img className={styles.eliti} src='./eliti_champions.png' width={477} height={77} />
      </div>

      <div className={styles.topnav} >
        <a href="#home" >Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
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
