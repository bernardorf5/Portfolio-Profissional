import logo from '../assets/logo.svg'

function TitleBar() {
    return (
        <header className="titlebar">
            <img src={logo} alt="Logo BF" />
            <span>Bernardo Ramos Ferreira · Portfólio</span>
        </header>
    )
}

export default TitleBar