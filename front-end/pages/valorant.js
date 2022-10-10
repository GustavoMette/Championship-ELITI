import Link from 'next/link'
import styles from '../styles/table.module.css'
import Footer from "../components/footer"

export default function valorant() {
  return (
    <div className={styles.container}>
  <div className={styles.seta}>
    <Link href='/'>
   <a>↩</a>
   </Link>
   </div>
   <div className={styles.logot}>
     <img className={styles.elitit} src='./eliti_champions.png' width={477} height={77} />
   </div>

   <div className={styles.topnavt} >
    <Link href='/'>
   <a>Home</a>
      </Link>
     <a href="#news">Calendario</a>
     <a href="#contact">Chaves</a>
     <a href="#about">Times</a>
     <a href="#register">Cadastre-se</a>
   </div>
    <div className={styles.teams}>
   <p className={styles.esp}> Espartanos </p>
   <p className={styles.red}> Reds </p>
   <p className={styles.wak}> Wakanda </p>
   <p className={styles.vik}> Vikings </p>
   <p className={styles.amc}> Amcom </p>
   <p className={styles.cal}> Calvos </p>
   </div>
   <div className={styles.buttons}>
   <p className={styles.espb}>⬜</p>
   <p className={styles.redb}>⬜</p>
   <p className={styles.wakb}>⬜</p>
   <p className={styles.vikb}>⬜</p>
   <p className={styles.amcb}>⬜</p>
   <p className={styles.calb}>⬜</p>
   </div>
   <Footer />
 </div>
  )
    }