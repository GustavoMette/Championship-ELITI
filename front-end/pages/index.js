import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.geral}>
      <Navbar />
      <div>
      <Link href='/lol'>
        <img className={styles.lol} src='./lol.png' />
        </Link>
        <Link href='/csgo'>
        <img className={styles.cs} src='./cs.png' />
        </Link>
      </div>
      <div>
      <Link href='/valorant'>
        <img className={styles.vava} src='./vava.png'/>
      </Link>
      <Link href='/freefire'>
        <img className={styles.ff} src='./freefire.png'/>
       </Link>
      </div>
    </div>
  )
}
