import StatusBar from './components/StatusBar'
import TitleBar from './components/TitleBar'
import Explorer from './components/Explorer'
import Tabs from './components/Tabs'
import Editor from './components/Editor'
import { useState } from 'react'

function App() {
  const [arquivoAberto, setArquivoAberto] = useState("sobre")
  const [idiomaAtual, setIdiomaAtual] = useState("pt")

  return (
    <div className="app">
      <TitleBar />
      <Explorer aoSelecionar={setArquivoAberto} arquivoAberto={arquivoAberto} idioma={idiomaAtual} />
      <Tabs arquivoAberto={arquivoAberto} idioma={idiomaAtual} />
      <Editor arquivoAberto={arquivoAberto} idioma={idiomaAtual}/>
      <StatusBar mudarIdioma={setIdiomaAtual}/>
    </div>
  )
}

export default App
