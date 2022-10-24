import styles from '../styles/teamregister.module.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function teamregister () {
    return (
        <div className={styles.body}>
            <Navbar />
            <div className={styles.titolo}>
            <h1>CADASTRAR TIME</h1>
            </div>
            <p>nome do time</p>
            <Footer />
        </div>
    );
}
