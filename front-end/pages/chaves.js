import styles from '../styles/chaves.module.css'
import Footer from "../components/footer"

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


        <div className={styles.r1team1}>
            <h2>BATSTRIK</h2>
        </div>
        <div className={styles.r1team2}>
            <h2>WAKANDA</h2>
        </div>
        <Footer/>
        
        </div>
    )
}
