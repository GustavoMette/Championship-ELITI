import Link from 'next/link'
import styles from '../styles/table.module.css'

export default function Home() {
  return (<div className={styles.container}>
    <Link href='/table'>
   <a>Voltar</a>
   </Link>
 <div>
   <div className={styles.logot}>
     <img className={styles.elitit} src='./eliti_champions.png' width={477} height={77} />
   </div>

   <div className={styles.topnavt} >
     <a href="#home" >Home</a>
     <a href="#news">Calendario</a>
     <a href="#contact">Chaves</a>
     <a href="#about">Times</a>
     <a href="#register">Cadastre-se</a>
   </div>
 </div>
 <div className="table">
        <table>
          <thead>
            <tbody>
              <h1 className="holderscs">Jogadores Titulares</h1>
              <tr>
                <th>Nick</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Turma</th>
              </tr>

              <tr>
                <td>Strend</td>
                <td>Gustavo</td>
                <td>81 anos</td>
                <td>1° turma</td>
              </tr>
              <tr>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
              </tr>
              <tr>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
              </tr>

              <tr>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
              </tr>
              <tr>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
              </tr>
            </tbody>
          </thead>
        </table>
      </div>
 </div>
     
)
}