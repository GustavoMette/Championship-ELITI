import styles from '../styles/calendario.module.css'
import Navbar from "../components/navbar"

export default function calendario() {
  return (
    <div className={styles.allcalendario}>
   <div>
    <Navbar />
   </div>
   <div className={styles.principal}>
   <h1>HOJE</h1>
   </div>

   </div>
  )
    }