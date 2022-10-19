import styles from "../styles/login.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

<<<<<<< HEAD
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
=======
export default function login() {
  return (
    <div className={styles.body} > 
    <Navbar/>
<div className={styles.itens}>
    <h1>JOGADOR</h1>

<div>
    <h1>Nome Completo</h1>
    <input placeholder='Nome Completo'></input>
</div>

<div>
    <h1>Nome de Usuario</h1>
    <input placeholder='Nome de Usuario'></input>
>>>>>>> 6926199d1200058f3cb618b01278c346ee68162b
    </div>
  );
}
