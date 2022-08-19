import Item from './Item';
import cardapio from './Itens.json';
import styles from './Itens.module.scss';

function Itens() {
  return (
    <div>
      {cardapio.map((item) => {
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
