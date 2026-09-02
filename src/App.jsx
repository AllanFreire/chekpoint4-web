import Header from './components/Header'
import Produtos from './components/Produtos'
import Carrinho from './components/Carrinho'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="pagina" id="inicio">
      <Header />
      <Produtos/>
      <Carrinho/>
      <Footer />
    </div>
  )
}

export default App
