import styles from "../styles/login.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function login () {
  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.itens}>
        <h1 className={styles.login}>FAÇA SEU LOGIN</h1>
        <div>
          <h1>Email</h1>
          <input id={styles.forms} placeholder="Digite seu Email"></input>
        </div>
        <div>
          <h1>Senha</h1>
          <input id={styles.forms} placeholder="Digite sua Senha"></input>
        </div>
        <button className={styles.botao}>completo</button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
