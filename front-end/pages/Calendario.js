import styles from '../styles/calendario.module.css'
import Navbar from "../components/navbar"

export default function calendario() {
  return (
    <div className={styles.geral}>
   <div>
    <Navbar />
   </div>

    <h1 className={styles.hj}>Hoje</h1>
    <h1 className={styles.ama}>Amanhã</h1>
   
   <p className={styles.wv}>🔴 WKD vs VKS</p>
   <p className={styles.ca}>⚫ CAL vs AMC</p>
   </div>
  )
    }