import styles from 'components/Buscador/Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

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
      <CgSearch />
    </div>
  );
}

export default Buscador;
