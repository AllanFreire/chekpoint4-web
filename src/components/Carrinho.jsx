import { useState } from "react";
import {finalizarCompra} from "../services/checkout";

function Carrinho({carrinho, aberto, fechar}) {
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState(null);

  const handleFinalizarCompra = async () => {
    setMensagem(null);
    setCarregando(true);

    try{
      const resultado = await finalizarCompra(carrinho);
      setMensagem({
        tipo: "sucesso",
        texto: `Pedido #${resultado.numeroPedido} confirmado! Total: R$ ${resultado.total.toFixed(2)}`
      });
    }catch (erro) {
      setMensagem({tipo: "erro", texto: erro.message});
    }finally{
      setCarregando(false);
    }
  };


 return (
    <>
      {aberto && <div className="carrinho__overlay" onClick={fechar}></div>}

      <aside className={`carrinho__sidebar ${aberto ? "carrinho__sidebar--aberto" : ""}`}>
        <div className="carrinho__cabecalho">
          <h2>Carrinho</h2>
          <button onClick={fechar} aria-label="Fechar carrinho">✕</button>
        </div>

        {carrinho.length === 0 ? (
          <p>Nenhum produto no carrinho.</p>
        ) : (
          <ul>
            {carrinho.map((item, indice) => (
              <li key={`${item.id}-${indice}`}>
                {item.nome} - R$ {item.preco}
              </li>
            ))}
          </ul>
        )}

        <button onClick={handleFinalizarCompra} disabled={carregando || carrinho.length === 0}>
          {carregando ? "Processando..." : "Finalizar Compra"}
        </button>

        {carregando && <div className="spinner" aria-label="Carregando"></div>}

        {mensagem && (
          <p className={mensagem.tipo === "sucesso" ? "mensagem-sucesso" : "mensagem-erro"}>
            {mensagem.texto}
          </p>
        )}
      </aside>
    </>
  );
}

export default Carrinho;