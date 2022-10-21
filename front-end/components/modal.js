import styles from "../styles/modal.module.css";
export default function modal() {
    return (
        <div id={styles.modal} className={styles.container}>
            <div  className={styles.modal}>
                <button className={styles.fechar}>X</button>
                <form>
                    <button>OPEN</button>
                </form>

            </div>
        </div>
    );
}