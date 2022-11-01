import styles from '../styles/teamregister.module.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function teamregister () {
    return (
        <div className={styles.body}>
        <Navbar />
        <div className={styles.itens}>
          <h1 className={styles.login}>CADASTRAR TIME</h1>
          <div>
            <h1>Nome do time</h1>
            <input id={styles.forms} placeholder=""></input>
            <h1>Sigla</h1>
            <input className={styles.menor}></input>
          </div>
          <div>
            <button className={styles.selecao}>CSGO</button>
            <button className={styles.selecao}>VALORANT</button>
            <button className={styles.selecao}>Free Fire</button>
            <button className={styles.selecao}>Legue of Legends</button>
          </div>
          <button className={styles.botao}>completo</button>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
}
