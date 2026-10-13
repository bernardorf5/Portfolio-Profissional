import { textos } from '../i18n/textos'

function StatusBar({ mudarIdioma, idioma }) {
    const t = textos[idioma].ui

    return (
        <footer className="statusbar">
            <p>Ln 1, Col 1</p>
            <p>{t.espacos}</p>
            <p>UTF-8</p>
            <p>Markdown</p>
            <div className="idiomas">
                <p className={idioma === "pt" ? "idioma ativo" : "idioma"} onClick={() => mudarIdioma("pt")}>PT</p>
                <p className={idioma === "en" ? "idioma ativo" : "idioma"} onClick={() => mudarIdioma("en")}>EN</p>
            </div>
        </footer>
    )
}

export default StatusBar