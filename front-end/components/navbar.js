import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function navbar() {
   return (
      <div>
         <div className={styles.logo}>
            <img className={styles.eliti} src='../eliti_champions.png' width={477} height={77} />
         </div>
         <div className={styles.topnav}>
            <Link href='/'>
               <a>Home</a>
            </Link>
            <div id={styles.passar_mouse}>
               <Link href='/calendario'>
                  <a>Calendario</a>
               </Link>
               <div id={styles.mostrar}>
                  <a>
                     <li id={styles.l}>lol</li>
                     <li id={styles.c}>csgo</li>
                     <li id={styles.v}>valorant</li>
                     <li id={styles.f}>freefire</li>
                  </a>
               </div>

            </div>
            <div id={styles.passar_mouse2}>
               <Link href='/chaves'>
                  <a>Chaves</a>
               </Link>
               <div id={styles.mostrar2}>
                  <a>
                     <li id={styles.l}>lol</li>
                     <li id={styles.c}>csgo</li>
                     <li id={styles.v}>valorant</li>
                     <li id={styles.f}>freefire</li>
                  </a>
               </div>

            </div>
            <div id={styles.passar_mouse3}>
               <a href="#about">Times</a>
               <div id={styles.mostrar3}>
                  <a>
                     <li id={styles.l}>lol</li>
                     <li id={styles.c}>csgo</li>
                     <li id={styles.v}>valorant</li>
                     <li id={styles.f}>freefire</li>
                  </a>
               </div>

            </div>
            <a href="#register">Cadastre-se</a>
         </div>
      </div>
   )
}