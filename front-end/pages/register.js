import styles from '../styles/register.module.css'
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function register() {
  return (
    <div className={styles.body} > 
    <Navbar/>
    <div>
    <Footer />
    </div>
    </div>
  )
  }
