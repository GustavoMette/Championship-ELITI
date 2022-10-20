import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.geral}>  
      <Navbar />
      <div className={styles.games}>
        <div>
      <Link href='/lol/timeslol'>
        <img className={styles.lol} src='./lol.png' />
        </Link>
        <Link href='/csgo/timescs'>
        <img className={styles.cs} src='./cs.png' />
        </Link> 
      </div>
      <div>
      <Link href='/valorant/timesvava'>
        <img className={styles.vava} src='./vava.png'/>
      </Link>
      <Link href='/freefire/timesff'>
        <img className={styles.ff} src='./freefire.png'/>
       </Link>
      </div>
    </div> 
    <footer>
        <Footer />
    </footer>
    </div>
  )
}
