import styles from '../../styles/calendario.module.css'
import Navbar from "../components/navbar"

export default function calendaryff() {
  return (
    <div className={styles.allcalendario}>
   <div>
    <Navbar />
   </div>

    <h1 className={styles.hj}>Hoje</h1>
    <h1 className={styles.ama}>Amanhã</h1>
   
   <p className={styles.wv}>🔴 WKD vs VKS</p>
   <p className={styles.ca}>⚫ CAL vs AMC</p>
   <p className={styles.wr}>⚫ WKD vs RED</p>
   <p className={styles.ce}>⚫ CAL vs ESP</p>
   <p className={styles.av}>⚫ AMC vs VKS</p>
   </div>
  )
    }