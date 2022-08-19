import logo from 'assets/logo.svg';
import styles from './Item.module.scss';

function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={logo} alt='' />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>Macarrao</h2>
          <p>Descricao do macarrao</p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__tipo}>massa</div>
          <div className={styles.item__porcao}>500g</div>
          <div className={styles.item__qtdpessoas}>serve 2 pessoas</div>
          <div className={styles.item__valor}>R$ 50</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
