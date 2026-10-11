function StatusBar({mudarIdioma}) {
    return (
        <footer className="statusbar">
            <p>UTF-8</p>
            <p>Markdown</p>
            <p onClick={() => mudarIdioma("pt")}>PT</p>
            <p onClick={() => mudarIdioma("en")}>EN</p>
        </footer>
    )
}

export default StatusBar