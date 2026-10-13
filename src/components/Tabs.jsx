import { arquivos } from '../data/arquivos'

function Tabs({ arquivoAberto, idioma }) {
    const atual = arquivos.find((arquivo) => arquivo.id === arquivoAberto)

    return (
        <nav className="tabs">
            <span className="aba">{atual.nome[idioma]}</span>
        </nav>
    )
}

export default Tabs