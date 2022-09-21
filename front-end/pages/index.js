import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.logo}>
        <img className={styles.eliti} src='./eliti_champions.png' width={477} height={77} />
      </div>

      <div className={styles.topnav} >
        <a href="#home" >Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  )
}
