import styles from '../../styles/chaves.module.css'
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"

export default function chavesff() {
  return (
    <div className={styles.all}>
    <div className={styles.nav}>
    <Navbar />
    </div>
    <div className={styles.allrounds}>
    <div className={styles.round1}>
      <h1>1 FASE</h1>
    </div>
    <div className={styles.round2}>
      <h1>2 FASE</h1>
    </div>  
    <div className={styles.final}>
      <h1>FASE FINAL</h1>
    </div>
    </div>
    <div className={styles.champion}>
      <h1>CAMPEÃO</h1>
    </div>
    <img className={styles.teamimg} src="/teamlogo.png"/>
    <div className={styles.teams1}>
    <div className={styles.r1team1}>
        <p>BATSTRIK</p>
    </div>
    <div className={styles.r1team2}>
        <p>WAKANDA</p>
    </div>
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

    <div className={styles. finalc}>
    <div className={styles.final1}>
        <p>CALVOS</p>
    </div>
    <div className={styles.final2}>
        <p>VIKINGS</p>
    </div>
    </div>  

  {/* LINHA HORIZONTAL E VERTICA */}

    <div className={styles.horizontal1}>
      <h1>—</h1>
    </div>
    <div className={styles.horizontal2}>
      <h1>—</h1>
    </div>
    <div className={styles.horizontal3}>
      <h1>—</h1>
    </div>
    <div className={styles.horizontal4}>
      <h1>—</h1>
    </div>
    <div className={styles.horizontal5}>
      <h1>—</h1>
    </div>
    <div className={styles.horizontal6}>
      <h1>—</h1>
    </div>

    <div className={styles.vertical1}>
      <h1>|</h1>
    </div>
    <div className={styles.vertical2}>
      <h1>|</h1>
    </div>
    <div className={styles.vertical3}>
      <h1>|</h1>
    </div>
    <div className={styles.vertical4}>
      <h1>|</h1>
    </div>
    <div className={styles.vertical5}>
      <h1>|</h1>
    </div>
    <div className={styles.vertical6}>
      <h1>|</h1>
    </div>

    <div className={styles.vertical7}>
      <h1>|</h1>
    </div>
    <div className={styles.vertical8}>
      <h1>|</h1>
    </div>
    <div className={styles.vertical9}>
      <h1>|</h1>
    </div>
    <div className={styles.vertical10}>
      <h1>|</h1>
    </div>
    <div className={styles.vertical11}>
      <h1>|</h1>
    </div>
    <div className={styles.vertical12}>
    <h1>|</h1>
    </div>

    <div className={styles.horizontal7}>
    <h1>—</h1>
    </div>
     <div className={styles.horizontal8}>
    <h1>—</h1>
    </div>
    <div className={styles.horizontal9}>
    <h1>—</h1>
    </div>
    <Footer />
    </div>
  );
};