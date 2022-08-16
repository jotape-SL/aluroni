import styles from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Buscador from 'components/Buscador';
import { useState } from 'react';

function Cardapio() {
  const [busca, setBusca] = useState('');
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
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__text}></h3>
        <Buscador busca={busca} setBusca={setBusca} />
      </section>
    </main>
  );
}

export default Cardapio;
