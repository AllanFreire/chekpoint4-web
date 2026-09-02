import Header from './components/Header'
import Footer from './components/Footer'
import Carrinho from './components/Carrinho'
import Produtos from './components/Produtos'


const App = () => {
  return (
    <div className="pagina" id="inicio">
      <Header />
      <Carrinho/>
      <Footer />
      <Produtos/>
    </div>
  )
}

export default App
