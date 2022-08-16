import styles from 'components/Buscador/Buscador.module.scss';

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

function Buscador({ busca, setBusca }: Props) {
  return (
    <div className={styles.buscador}>
      <input
        type='text'
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder='busque sua receita'
      />
    </div>
  );
}

export default Buscador;
