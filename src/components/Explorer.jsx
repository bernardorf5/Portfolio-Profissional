import { arquivos } from '../data/arquivos'

function Explorer({ aoSelecionar, arquivoAberto, idioma }) {
    return (
        <aside className="explorer">
            <ul>
                {arquivos.map((arquivo) => (
                    <li
                        key={arquivo.id}
                        className={arquivo.id === arquivoAberto ? "ativo" : ""}
                        onClick={() => aoSelecionar(arquivo.id)}
                    >
                        {arquivo.nome[idioma]}
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Explorer