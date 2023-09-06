import { produtos } from "../dados/data-produtos";

export const filtrarProdutos = (categoria) => {
  return produtos.filter((produto) => produto.categoria === categoria);
};

export const buscarProdutos = (textoDigitado) => {
  return produtos.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
      produto.categoria.toLowerCase().includes(textoDigitado.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
  );
};
