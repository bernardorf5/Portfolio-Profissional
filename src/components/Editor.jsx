import Contato from "../pages/Contato"
import Experiencia from "../pages/Experiencia"
import Projetos from "../pages/Projetos"
import SobreMim from "../pages/SobreMim"
import { arquivos } from "../data/arquivos"
import { textos } from "../i18n/textos"

function Editor({ arquivoAberto, idioma }) {
    const t = textos[idioma].ui
    const atual = arquivos.find((arquivo) => arquivo.id === arquivoAberto)

    return (
        <main className="editor">
            <p className="breadcrumb">{t.raiz} › {atual.nome[idioma]}</p>
            {arquivoAberto === "sobre" && <SobreMim idioma={idioma} />}
            {arquivoAberto === "exp" && <Experiencia idioma={idioma}/>}
            {arquivoAberto === "projetos" && <Projetos idioma={idioma}/>}
            {arquivoAberto === "contato" && <Contato idioma={idioma}/>}
        </main>
    )
}
export default Editor