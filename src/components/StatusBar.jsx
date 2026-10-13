function StatusBar({mudarIdioma}) {
    return (
        <footer className="statusbar">
            <p>UTF-8</p>
            <p>Markdown</p>
            <p onClick={() => mudarIdioma("pt")} className="idioma">PT</p>
            <p onClick={() => mudarIdioma("en")} className="idioma">EN</p>
        </footer>
    )
}

export default StatusBar