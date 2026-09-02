import produtos from "../data/produtos.json";

function Produtos({adicionarAoCarrinho}) {
    return(
        <section id="sessao-produtos">
        <h2 id="titulo-produtos">Produtos</h2>

        <div className="flex-produtos">
            {produtos.map((produto) => (
                <div key={produto.id} className="card-produto">
                    <h3>{produto.nome}</h3>
                    <p className="preco">R$ {produto.preco}</p>
                    <button className="btn-adicionar" onClick={() => adicionarAoCarrinho(produto)}>
                        Adicionar ao Carrinho
                    </button>
                </div>
            ))}
        </div>
    </section>
)
}

export default Produtos;
