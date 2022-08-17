import React from 'react';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';

type IOpcao = typeof filtros[0];

function Filtros() {
  function selecionarFiltro(opcao: IOpcao) {}
  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => {
        return (
          <button
            className={styles.filtros__filtro}
            key={opcao.id}
            onClick={() => selecionarFiltro(opcao)}
          >
            {opcao.label}
          </button>
        );
      })}
    </div>
  );
}

export default Filtros;
