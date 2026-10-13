import { textos } from '../i18n/textos'
import { contatos } from '../data/contatos'
import FormularioContato from '../components/FormularioContato'

function Contato({ idioma }) {
    const t = textos[idioma].contato

    return (
        <section>
            <h1>{t.titulo}</h1>
            <p>{t.intro}</p>
            <h2>{t.canais}</h2>
            <ul>
                {contatos.map((contato) => (
                    <li key={contato.id}>
                        <a href={contato.link} target={contato.externo ? "_blank" : undefined} rel={contato.externo ? "noreferrer" : undefined}>
                            {contato.nome} {contato.detalhe}
                        </a>
                    </li>
                ))}
            </ul>

            <FormularioContato idioma={idioma} />
        </section>
    )
}

export default Contato