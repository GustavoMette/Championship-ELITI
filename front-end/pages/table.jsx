import Link from 'next/link'
import styles from '../styles/table.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Link href='/table'>
   <a>Voltar</a>
   </Link>
 <div>
   <div className={styles.logot}>
     <img className={styles.elitit} src='./eliti_champions.png' width={477} height={77} />
   </div>

   <div className={styles.topnavt} >
     <a href="#home" >Home</a>
     <a href="#news">Calendario</a>
     <a href="#contact">Chaves</a>
     <a href="#about">Times</a>
     <a href="#register">Cadastre-se</a>
   </div>
 </div>
 </div>
)
}