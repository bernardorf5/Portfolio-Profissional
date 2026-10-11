import { textos } from '../i18n/textos'
import { projetos } from '../data/projetos'

function Projetos({idioma}) {
    const t = textos[idioma].projetos

    return (
        <section>
            <h1>{t.titulo}</h1>
            {projetos.map((projeto) => (
                <article key={projeto.id}>
                    <h2>{projeto.nome}</h2>
                    <p>{projeto.periodo[idioma]}</p>
                    <p>{projeto.descricao[idioma]}</p>
                    <ul>
                        {projeto.tecnologias.map((tec) => (
                            <li key={tec}>{tec}</li>
                        ))}
                    </ul>
                    <a href={projeto.github} target="_blank" rel="noreferrer">{t.ver}</a>
                </article>
            ))}
        </section>
    )
}

export default Projetos