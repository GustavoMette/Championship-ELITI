import styles from "../styles/register.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function register () {
  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.itens}>
        <h1 className={styles.login}>FAÇA SEU REGISTRO</h1>
        <div>
          <h1>Nome Completo</h1>
          <input id={styles.forms} placeholder=""></input>
        </div>
        <div>
          <h1>Nome do Usuario</h1>
          <input id={styles.forms} placeholder=""></input>
        </div>
        <div>
          <h1>Email</h1>
          <input id={styles.forms} placeholder=""></input>
        </div>
        <div>
          <h1>Senha</h1>
          <input id={styles.forms} placeholder=""></input>
        </div>
        <button className={styles.botao}>completo</button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
