import React from 'react';
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
    </main>
  );
}

export default Cardapio;
