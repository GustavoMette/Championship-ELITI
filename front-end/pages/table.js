import styles from '../styles/.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
    <h1> hello</h1>
    <Link href=''>
      <a>Voltar</a>
      </Link>
    </div>
  )
}