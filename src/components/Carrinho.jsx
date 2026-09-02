import { useState } from "react";

function Carrinho() {
  const [carrinho] = useState(() => {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
  });

  return (
    <section>
      <h2>Carrinho</h2>

      {carrinho.length === 0 ? (
        <p>Nenhum produto no carrinho.</p>
      ) : (
        <ul>
          {carrinho.map((item) => (
            <li key={item.id}>
              {item.nome} - R$ {item.preco}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Carrinho;