import { arquivos } from '../data/arquivos'
import { textos } from '../i18n/textos'

function Explorer({ aoSelecionar, arquivoAberto, idioma }) {
    const t = textos[idioma].ui

    return (
        <aside className="explorer">
            <p className="explorer-titulo">{t.explorador}</p>
            <p className="pasta">▾ {t.pasta}</p>
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