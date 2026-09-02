export function adicionarProdutoAoCarrinho(container, produto) {
    const card = document.createElement("div");
    card.className = "card-produto";
    card.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>
    `;

    container.appendChild(card);
}

export function filtrarProdutos(container, categoria) {
    const cards = container.querySelectorAll(".card-produto");

    cards.forEach((card) => {
        const cardCategoria = card.dataset.categoria;
        const deveMostrar = categoria === "todas" || cardCategoria === categoria;
        card.style.display = deveMostrar ? "" : "none";
    });
}