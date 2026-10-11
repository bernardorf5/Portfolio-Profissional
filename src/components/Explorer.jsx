const arquivos = [{id: "sobre", nome: "Sobremim.md"}, {id: "projetos", nome: "Projetos.md"}, {id: "exp", nome: "Experiencia.md"}, {id: "contato", nome: "Contato.md"}]

function Explorer({aoSelecionar}) {
    return (
        <aside className="explorer">
            <ul>
                {arquivos.map((arquivo) => (
                    <li key={arquivo.id} onClick={() => aoSelecionar(arquivo.id)}> {arquivo.nome} </li>
                ))}
            </ul>
        </aside>
    )
}

export default Explorer