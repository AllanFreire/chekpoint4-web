import produtos from "../data/produtos.json";

function Produtos({adicionarAoCarrinho}) {
    return(
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
