import styles from '../styles/calendario.module.css'
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function calendario() {
  return (
    <div className={styles.allcalendario}>
   <div>
    <Navbar />
   </div>

<div className={styles.table}>
    <h1 className={styles.hj}>Hoje</h1>
    <h1 className={styles.ama}>Amanhã</h1>
   
   <p className={styles.o}>🔴 WKD vs VKS</p>
   <p className={styles.o}>⚫ CAL vs AMC</p>
   <p className={styles.o}>⚫ WKD vs RED</p>
   <p className={styles.o}>⚫ CAL vs ESP</p>
   <p className={styles.o}>⚫ AMC vs VKS</p>
   </div>
   <Footer />
   </div>
  );
    };

