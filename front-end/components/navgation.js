import styles from '../styles/Home.module.css'
import Link from  'next/link'

export default function Navgation() {
    return (
        <div>
            <div className={styles.seta}>
                <Link href='/table'>
                    <a>↩</a>
                </Link>
            </div>
        </div>
    )
}