import logo from 'assets/logo.svg';
import styles from './Item.module.scss';
import cardapio from '../Itens.json';

type Props = typeof cardapio[0];

function Item(props: Props) {
  const { title, photo, category, description, id, price, serving, size } =
    props;
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={`
              ${styles.item__tipo} 
              ${styles[`item__tipo__${category.label.toLocaleLowerCase()}`]}`}
          >
            {category.label}
          </div>
          <div className={styles.item__porcao}>{size}g</div>
          <div className={styles.item__qtdpessoas}>{`Serve ${serving} ${
            serving <= 1 ? 'pessoa' : 'pessoas'
          }`}</div>
          <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
