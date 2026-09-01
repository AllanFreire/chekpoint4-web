const Footer = () => {
return (
        <footer className="rodape">
        <div className="rodape__conteudo">
            <a className="rodape__marca" href="#inicio">EcoTrend</a>

            <nav>
            <ul className="rodape__links">
                <li><a href="#sobre">Sobre nos</a></li>
                <li><a href="#ajuda">Ajuda</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
            </nav>
        </div>

        <p className="rodape__copyright">(c) 2026 EcoTrend. Consuma com mais consciencia.</p>
        </footer>
)
}

export default Footer