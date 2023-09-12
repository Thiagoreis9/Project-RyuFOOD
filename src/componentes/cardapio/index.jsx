import Pratos from "../pratos";
import { useState } from "react";

import { produtos } from "../../dados/data-produtos";
import "./style.css";

const Cardapio = () => {
  const retornarProdutos = () => {
    return produtos;
  };

  const [listaProdutos, setListaProdutos] = useState(retornarProdutos);
  const [textoDigitado, setTextoDigitado] = useState("");
  const [botaoClicado, setBotaoClicado] = useState("");

  const handleFiltrarCategoria = (categoria) => {
    setListaProdutos(
      produtos.filter((produto) => produto.categoria === categoria)
    );
    setTextoDigitado("");
    setBotaoClicado(categoria);
  };

  const buscarProdutos = (textoDigitado) => {
    setListaProdutos(
      produtos.filter(
        (produto) =>
          produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
          produto.categoria
            .toLowerCase()
            .includes(textoDigitado.toLowerCase()) ||
          produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
      )
    );
    setTextoDigitado(textoDigitado);
  };

  return (
    <div className="container">
      <div className="filtros">
        <div className="categorias">
          <button
            className={botaoClicado === "Entradas" ? "acenderBtn" : "apagarBtn"}
            onClick={() => handleFiltrarCategoria("Entradas")}
          >
            <img src="assets/entrada.png" alt="" />
            <p>Entradas</p>
          </button>
          <button
            className={botaoClicado === "Massas" ? "acenderBtn" : "apagarBtn"}
            onClick={() => handleFiltrarCategoria("Massas")}
          >
            <img src="assets/massa.png" alt="" />
            <p>Massas</p>
          </button>
          <button
            className={botaoClicado === "Carnes" ? "acenderBtn" : "apagarBtn"}
            onClick={() => handleFiltrarCategoria("Carnes")}
          >
            <img src="assets/carne.png" alt="" />
            <p>Carnes</p>
          </button>
          <button
            className={botaoClicado === "Bebidas" ? "acenderBtn" : "apagarBtn"}
            onClick={() => handleFiltrarCategoria("Bebidas")}
          >
            <img src="assets/bebidas.png" alt="" />
            <p>Bebidas</p>
          </button>
          <button
            className={botaoClicado === "Saladas" ? "acenderBtn" : "apagarBtn"}
            onClick={() => handleFiltrarCategoria("Saladas")}
          >
            <img src="assets/salada.png" alt="" />
            <p>Saladas</p>
          </button>
          <button
            className={botaoClicado === "Sobremesas" ? "acenderBtn" : "apagarBtn"}
            onClick={() => handleFiltrarCategoria("Sobremesas")}
          >
            <img src="assets/sobremesa.png" alt="" />
            <p>Sobremesas</p>
          </button>
        </div>
        <div className="input-filtro">
          <img src="assets/lupa.png" alt="ícone" />
          <input
            type="text"
            value={textoDigitado}
            onChange={(event) => buscarProdutos(event.target.value)}
            placeholder="Pesquise aqui um dos pratos do nosso cardápio (Por nome, categoria ou ingredientes)"
          />
        </div>
      </div>

      <div className="cardapio">
        <h2>Cardápio</h2>

        <div className="cardapio-cards">
          {listaProdutos.map((produto, index) => (
            <Pratos
              key={index}
              imagem={produto.imagem}
              nome={produto.nome}
              categoria={produto.categoria}
              descricao={produto.descricao}
              preco={produto.preco}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardapio;
