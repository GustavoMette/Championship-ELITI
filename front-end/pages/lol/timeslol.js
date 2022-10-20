import styles from '../../styles/table.module.css'
import Link from 'next/link'
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"

export default function timeslol() {
  return (
    <div className={styles.container}>
      <Navbar />
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