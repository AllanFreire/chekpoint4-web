const Header = ({quantidadeItens, aoClicarCarrinho}) => {
return (
        <header className="cabecalho">
        <a className="marca" href="#inicio">
            <h1 className="marca__nome">EcoTrend</h1>
        </a>

        <nav className="navegacao">
            <ul>
            <li><a href="#perfil">Perfil</a></li>
            <li>
                <button className="navegacao__carrinho" onClick={aoClicarCarrinho}>
                    🛒 {quantidadeItens > 0 && <span className="carrinho__contador">{quantidadeItens}</span>}
                </button>
            </li>
            </ul>
        </nav>
        </header>
)
}

export default Header