import Navbar from '../../components/navbar'              
import styles from '../styles/chaves.module.css'

export default function keyff() {
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
        <div className={styles.final}>
          <h1>RODADA FINAL</h1>
        </div>
        </div>
        <div className={styles.champion}>
          <h1>CAMPEÃO</h1>
        </div>
        <img className={styles.teamimg} src="./teamlogo.png"/>


        <div className={styles.r1team1}>
            <p>BATSTRIK</p>
        </div>
        <div className={styles.r1team2}>
            <p>WAKANDA</p>
        </div>

        <div className={styles.r1team3}>
            <p>LORDFIRE</p>
        </div>
        <div className={styles.r1team4}>
            <p>AMCOM</p>
        </div>

        <div className={styles.r1team5}>
            <p>CALVOS</p>
        </div>
        <div className={styles.r1team6}>
            <p>ESPARTANOS</p>
        </div>

        <div className={styles.r1team7}>
            <p>REDS</p>
        </div>
        <div className={styles.r1team8}>
            <p>VIKINGS</p>
        </div>

        <div className={styles.r2team1}>
            <p>WAKANDA</p>
        </div>
        <div className={styles.r2team2}>
            <p>LORDFIRE</p>
        </div>

        <div className={styles.r2team3}>
            <p>CALVOS</p>
        </div>
        <div className={styles.r2team4}>
            <p>VIKINGS</p>
        </div>

        <div className={styles.final1}>
            <p>CALVOS</p>
        </div>
        <div className={styles.final2}>
            <p>VIKINGS</p>
        </div>  

      {/* LINHA HORIZONTAL E VERTICA */}

        <div className={styles.horizontal1}>
          <h1>———</h1>
        </div>
        <div className={styles.horizontal2}>
          <h1>———</h1>
        </div>
        <div className={styles.horizontal3}>
          <h1>———</h1>
        </div>
        <div className={styles.horizontal4}>
          <h1>———</h1>
        </div>
        <div className={styles.horizontal5}>
          <h1>———</h1>
        </div>
        <div className={styles.horizontal6}>
          <h1>———</h1>
        </div>

        <div className={styles.vertical}>
          <h1>│</h1>
        </div>

          </div>
    )
}