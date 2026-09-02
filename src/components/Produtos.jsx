import { useRef, useState, useEffect } from "react";
import { buscarProdutos } from "../services/produtosApi";
import { filtrarProdutos } from "../services/carrinho";

function Produtos({ adicionarAoCarrinho }) {
    const listaRef = useRef(null);
    const [filtroAtivo, setFiltroAtivo] = useState("todas");
     const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        buscarProdutos()
            .then(setProdutos)
            .catch((err) => console.error("Erro ao carregar produtos:", err));
    }, []);

function aplicarFiltro(categoria) {
    filtrarProdutos(listaRef.current, categoria);
    setFiltroAtivo(categoria);
}

return (
    <section id="sessao-produtos">
        <h2 id="titulo-produtos">Produtos</h2>

        <div className="filtros">
            <button
                className={filtroAtivo === "todas" ? "btn-filtro ativo" : "btn-filtro"}
                onClick={() => aplicarFiltro("todas")}>
                    Todas
            </button>
            <button
                className={filtroAtivo === "objetos" ? "btn-filtro ativo" : "btn-filtro"}
                onClick={() => aplicarFiltro("objetos")}>
                Objetos
            </button>
            <button
                className={filtroAtivo === "roupas" ? "btn-filtro ativo" : "btn-filtro"}
                onClick={() => aplicarFiltro("roupas")}>
                Roupas
            </button>
        </div>

        <div ref={listaRef} className="flex-produtos">
            {produtos.map((produto) => (
                <div
                    key={produto.id}
                    className="card-produto"
                    data-categoria={produto.categoria}>
                    <h3>{produto.nome}</h3>
                    <p className="preco">R$ {produto.preco}</p>
                    <button
                        className="btn-adicionar"
                        onClick={() => adicionarAoCarrinho(produto)}>
                        Adicionar ao Carrinho
                    </button>
                </div>
            ))}
        </div>
    </section>
    );}

export default Produtos;  