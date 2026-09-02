export function finalizarCompra(carrinho){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(!carrinho || carrinho.length === 0){
                reject(new Error("Carrinho Vazio"));
                return;
            }

            setTimeout(() => {
                const numeroPedido = Math.floor(Math.random() * 100000);
                resolve({
                    sucesso: true,
                    numeroPedido,
                    total: carrinho.reduce((soma, item) => soma + item.preco, 0),
                });
            }, 1000);
        }, 1000);
    });
}