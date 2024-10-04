import styles from './sobre.module.css'
import { Header } from "../components/header";

export default function Sobre() {
  return (
    <div className={styles.container}>
        <Header />
        <p>Sobre</p>
    </div>
  )
}
