import StatusBar from './components/StatusBar'
import TitleBar from './components/TitleBar'
import Explorer from './components/Explorer'
import Tabs from './components/Tabs'
import Editor from './components/Editor'

function App() {
  return (
    <div className="app">
      <TitleBar />
      <Explorer />
      <Tabs />
      <Editor />
      <StatusBar />
    </div>
  )
}

export default App
