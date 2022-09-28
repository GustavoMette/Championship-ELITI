import Navbar from '../components/navbar'              
import styles from '../styles/chaves.module.css'

export default function chaves() {
    return (
        <div className={styles.all}>
        <div>
        <Navbar />
        </div>
        <div className={styles.allrounds}>
        <div className={styles.round1}>
          <h1>RODADA 1</h1>
        </div>
        <div className={styles.round2}>
          <h1>RODADA 2</h1>
        </div>  
        <div className={styles.finalround}>
          <h1>RODADA FINAL</h1>
        </div>
        </div>
        <div className={styles.champion}>
          <h1>CAMPEÃO</h1>
        </div>
        <img className={styles.teamimg} src="./teamlogo.png"/>
        <div className={styles.fights}>
        <div className={styles.r1fight1}>
            <h2>BATSTRIK</h2>
            <h2>WAKANDA</h2>
        </div>
        <div className={styles.r1fight2}>
            <h2>LORDFIRE</h2>
            <h2>AMCOM</h2>
        </div>
        <div className={styles.r1fight3}>
            <h2>CALVOS</h2>
            <h2>ESPARTANOS</h2>
        </div>
        <div className={styles.r1fight4}>
            <h2>REDS</h2>
            <h2>VIKINGS</h2>
        </div>
        <div className={styles.r2fight1}>
            <h2>BATSTRIK</h2>
            <h2>LORDFIRE</h2>
        </div>
        <div className={styles.r2fight2}>
            <h2>CALVOS</h2>
            <h2>VIKINGS</h2>
        </div>
        <div className={styles.final}>
            <h2>CALVOS</h2>
            <h2>LORDFIRE</h2>
        </div>
        </div>
        </div>
    )
}