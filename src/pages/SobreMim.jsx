import { textos } from '../i18n/textos'

function SobreMim({ idioma }) {
    const t = textos[idioma].sobre

    return (
        <section>
            <h1>{t.titulo}</h1>
            <p>{t.apresentacao}</p>
            <h2>{t.formacaoTitulo}</h2>
            <p>{t.formacao}</p>
            <h2>{t.areasTitulo}</h2>
            <p>{t.areas}</p>
            <h2>{t.interessesTitulo}</h2>
            <p>{t.interesses}</p>
            <h2>{t.objetivosTitulo}</h2>
            <p>{t.objetivos}</p>
            <h2>{t.destaquesTitulo}</h2>
            <p>{t.destaque1}</p>
            <p>{t.destaque2}</p>
            <p>{t.fechamento}</p>
        </section>
    )
}

export default SobreMim