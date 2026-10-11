import { textos } from '../i18n/textos'
import { experiencias } from '../data/experiencias'

function Experiencia({ idioma }) {
    const t = textos[idioma].experiencias

    return (
        <section>
            <h1>{t.titulo}</h1>
            {experiencias.map((exp) => (
                <article key={exp.id}>
                    <h2>{exp.instituicao}</h2>
                    <p>{exp.cargo[idioma]}</p>
                    <p>{exp.periodo[idioma]}</p>
                    <p>{exp.descricao[idioma]}</p>
                </article>
            ))}
        </section>
    )
}

export default Experiencia