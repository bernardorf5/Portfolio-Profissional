import { textos } from '../i18n/textos'

function SobreMim({ idioma }) {
    const t = textos[idioma].sobre

    return (
        <section>
            <h1>{t.titulo}</h1>
            <p>{t.apresentacao}</p>
            <h2>{t.areasTitulo}</h2>
            <p>{t.areas}</p>
            <h2>{t.destaquesTitulo}</h2>
            <p>{t.destaque1}</p>
            <p>{t.destaque2}</p>
            <p>{t.fechamento}</p>
        </section>
    )
}

export default SobreMim