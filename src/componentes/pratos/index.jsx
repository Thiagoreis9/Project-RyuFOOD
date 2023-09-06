import "./style.css";

const Pratos = (props) => {
  return (
    <div className="prato-card">
      <img src={ props.imagem } alt="" />
      <div className="prato-infos">
        <h3>{ props.nome }</h3>
        <h4>{ props.categoria }</h4>
        <p>{ props.descricao }</p>
        <h5>R$ { props.preco }</h5>
      </div>
    </div>
  );
};

export default Pratos;
