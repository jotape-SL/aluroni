import styles from 'components/Buscador/Buscador.module.scss';

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

function Buscador({ busca, setBusca }: Props) {
  return <div>Buscador</div>;
}

export default Buscador;
