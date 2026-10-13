import { textos } from '../i18n/textos'
import { projetos } from '../data/projetos'

function Projetos({idioma}) {
    const t = textos[idioma].projetos

    return (
        <section>
            <h1>{t.titulo}</h1>
            <div className="timeline">
                {projetos.map((projeto) => (
                    <article key={projeto.id} className="projeto">
                        <h2>{projeto.nome}</h2>
                        <p className="periodo">{projeto.periodo[idioma]}</p>
                        <p>{projeto.descricao[idioma]}</p>
                        {projeto.imagem && <img src={projeto.imagem} alt={projeto.nome} />}
                        <ul className="tecnologias">
                            {projeto.tecnologias.map((tec) => (
                                <li key={tec}>{tec}</li>
                            ))}
                        </ul>
                        <a href={projeto.github} target="_blank" rel="noreferrer" className="botao">{t.ver}</a>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projetos