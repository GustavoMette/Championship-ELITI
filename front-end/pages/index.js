import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
<<<<<<< HEAD
    <div className={styles.geral}>
=======
    <div className={styles.container}>
       <Link href='/table'>
      <a>Voltar</a>
      </Link>
    <div>
>>>>>>> be1646132967ef9b75fdbfb27f7950c6c7b63bd7
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
      </div>
    </div>
    </div>
  )
}
