import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function navbar() {
    return (
   <div>
      <div className={styles.logo}>
      <img className={styles.eliti} src='../eliti_champions.png' width={477} height={77} />
  </div>
   <div className={styles.topnav}>
      <Link href='/'>
   <a>Home</a>
      </Link>
      <a href="#news">Calendario</a>
     <a href="#contact">Chaves</a>
     <a href="#about">Times</a>
     <a href="#register">Cadastre-se</a>
 </div>
 </div>  
    )
}