import cardapio from './Itens.json';

function Itens() {
  return (
    <div>
      {cardapio.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
}

export default Itens;
