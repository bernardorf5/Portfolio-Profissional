import Contato from "../pages/Contato"
import Experiencia from "../pages/Experiencia"
import Projetos from "../pages/Projetos"
import SobreMim from "../pages/SobreMim"

function Editor ({arquivoAberto, idioma}) {
    return (
        <main className="editor">
            {arquivoAberto === "sobre" && <SobreMim idioma={idioma} />}
            {arquivoAberto === "exp" && <Experiencia idioma={idioma}/>}
            {arquivoAberto === "projetos" && <Projetos idioma={idioma}/>}
            {arquivoAberto === "contato" && <Contato idioma={idioma}/>}
        </main>
    )
}
export default Editor