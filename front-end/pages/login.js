import styles from '../styles/login.module.css'
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function freefire() {
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
    </div>

<div>
    <h1>Email</h1>
    <input placeholder='Email'></input>
 </div>
    <button className={styles.botao} >completo</button>
    
</div>


    <div>
    <Footer />
    </div>
    </div>
  )
  }
