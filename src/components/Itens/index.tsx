import { useState, useEffect } from 'react';
import Item from './Item';
import cardapio from './Itens.json';
import styles from './Itens.module.scss';

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: String;
}

function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(novaLista);
  }, [lista]);

  return (
    <div>
      {lista.map((item) => {
        return (
          <div className={styles.itens}>
            <Item key={item.id} {...item} />
          </div>
        );
      })}
    </div>
  );
}

export default Itens;
