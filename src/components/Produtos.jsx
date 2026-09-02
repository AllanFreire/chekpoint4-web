import produtos from "../data/produtos.json";

function Produtos() {
  const adicionarAoCarrinho = (produto) => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push(produto);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  };

  return (
    <section>
      <h2>Produtos</h2>

      {produtos.map((produto) => (
        <div key={produto.id}>
          <h3>{produto.nome}</h3>
          <p>R$ {produto.preco}</p>

          <button onClick={() => adicionarAoCarrinho(produto)}>
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </section>
  );
}

export default Produtos;