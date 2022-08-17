import styles from './Ordenador.module.scss';
import opcoes from './opscoes.json';
import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

function Ordenador() {
  const [aberto, setAberto] = useState(false);
  return (
    <button
      className={styles.ordenador}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>Ordenar Por</span>
      {aberto ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={`${styles.ordenador__options} ${
          aberto && styles['ordenador__options--ativo']
        }`}
      >
        {opcoes.map((opcao) => (
          <div className={styles.ordenador__option} key={opcao.value}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}

export default Ordenador;
