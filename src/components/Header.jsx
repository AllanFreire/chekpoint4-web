const Header = () => {
return (
        <header className="cabecalho">
        <a className="marca" href="#inicio">
            <h1 className="marca__nome">EcoTrend</h1>
        </a>

        <nav className="navegacao">
            <ul>
            <li><a href="#perfil">Perfil</a></li>
            <li><a className="navegacao__carrinho" >🛒</a></li>
            </ul>
        </nav>
        </header>
)
}

export default Header