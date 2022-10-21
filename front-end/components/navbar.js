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
            
                  <a>Calendario</a>
     
               <div id={styles.mostrar}>
                  <a>
                  <Link href='/lol/calendariolol'>
                     <li id={styles.l}>lol</li>
                  </Link>
                  <Link href='/csgo/calendariocs'>
                     <li id={styles.c}>csgo</li>
                     </Link>
                     <Link href='/valorant/calendariovava'>
                     <li id={styles.v}>valorant</li>
                     </Link>
                     <Link href='/freefire/calendarioff'>
                     <li id={styles.f}>freefire</li>
                     </Link>
                  </a>
               </div>

            </div>
            <div id={styles.passar_mouse2}>
               
                  <a>Chaves</a>
               
               <div id={styles.mostrar2}>
                  <a>
                  <Link href='/lol/chaveslol'>
                     <li id={styles.l}>lol</li>
                  </Link>
                  <Link href='/csgo/chavescs'>
                     <li id={styles.c}>csgo</li>
                     </Link>
                     <Link href='/valorant/chavesvava'>
                     <li id={styles.v}>valorant</li>
                     </Link>
                     <Link href='/freefire/chavesff'>
                     <li id={styles.f}>freefire</li>
                     </Link>
                  </a>
               </div>

            </div>
            <div id={styles.passar_mouse3}>
               <a>Times</a>
               <div id={styles.mostrar3}>
                  <a>
                  <Link href='/lol/timeslol'>
                     <li id={styles.l}>lol</li>
                  </Link>
                  <Link href='/csgo/timescs'>
                     <li id={styles.c}>csgo</li>
                     </Link>
                     <Link href='/valorant/timesvava'>
                     <li id={styles.v}>valorant</li>
                     </Link>
                     <Link href='/freefire/timesff'>
                     <li id={styles.f}>freefire</li>
                     </Link>
                  </a>
               </div>

            </div>
            <Link href='/register'>
            <a href="#register">Cadastre-se</a>
            </Link>
         </div>
      </div>
   )
}