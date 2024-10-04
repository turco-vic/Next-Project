import styles from './contato.module.css'
import { Header } from '../components/header'

export default function Contato() {
  return (
    <div className={styles.container}>
        <Header />
        <p className={styles.text}>Página de Contato</p>
    </div>
  );
}
