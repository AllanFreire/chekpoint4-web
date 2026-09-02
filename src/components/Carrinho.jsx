import { useState, useEffect } from "react";

function Carrinho() {
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  return (
    <div>
      <button
        onClick={() =>
          adicionarAoCarrinho({
            id: 1,
            nome: "Notebook",
            preco: 3500,
          })
        }
      >
        Adicionar
      </button>

      <ul>
        {carrinho.map((item, index) => (
          <li key={index}>
            {item.nome} - R$ {item.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrinho;