import styles from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

function Cardapio() {
  return (
    <main>
      <nav className={styles.menu}>
        <div className='logo'>
          <Logo />
        </div>
      </nav>
        <header className={styles.header}>
          <div className={styles.header__text}> A casa do código e da massa!</div>
        </header>
    </main>
  );
}

export default Cardapio;
