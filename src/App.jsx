import { useState, useEffect } from 'react'
import Header from './components/Header'
import Produtos from './components/Produtos'
import Carrinho from './components/Carrinho'
import Footer from './components/Footer'

const App = () => {
  const [carrinho, setCarrinho] = useState(() => {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
  });
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((atual) => [...atual, produto]);
  };

  return (
    <div className="pagina" id="inicio">
      <Header
        quantidadeItens={carrinho.length}
        aoClicarCarrinho={() => setCarrinhoAberto(true)}
      />
      <Produtos adicionarAoCarrinho={adicionarAoCarrinho} />
      <Carrinho
        carrinho={carrinho}
        aberto={carrinhoAberto}
        fechar={() => setCarrinhoAberto(false)}
      />
      <Footer />
    </div>
  )
}

export default App
