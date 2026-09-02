import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Produtos from './components/Produtos'
import Carrinho from './components/Carrinho'
import Footer from './components/Footer'
import { adicionarProdutoAoCarrinho } from './services/carrinho'

const App = () => {
  const [carrinho, setCarrinho] = useState(() => {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
  });
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const carrinhoRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (produto) => {
    adicionarProdutoAoCarrinho(carrinhoRef.current, produto); // DOM puro: cria o card visual
    setCarrinho((atual) => [...atual, produto]); // state: mantém badge e localStorage vivos
  };

  return (
    <div className="pagina" id="inicio">
      <Header
        quantidadeItens={carrinho.length}
        aoClicarCarrinho={() => setCarrinhoAberto(true)}
      />
      <Produtos adicionarAoCarrinho={adicionarAoCarrinho} />
      <Carrinho
        ref={carrinhoRef}
        carrinho={carrinho}
        aberto={carrinhoAberto}
        fechar={() => setCarrinhoAberto(false)}
      />
      <Footer />
    </div>
  )
}

export default App