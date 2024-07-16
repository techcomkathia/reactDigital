import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cartao from './componentes/Cartao'
import ListaCartoes from './componentes/ListaCartoes'

function App() {
  const [count, setCount] = useState(0)

  let pessoa = {
    nome: 'Ana',
    img: 'https://www.w3schools.com/howto/img_avatar2.png',
    descricao: 'Desenvolvedora Full Stack'
  }

  let pessoas = [
    {nome: 'Ana', img: 'https://www.w3schools.com/howto/img_avatar2.png', descricao: 'Desenvolvedora Full Stack'},
    {nome: 'João', img: 'https://www.w3schools.com/howto/img_avatar.png', descricao: 'Desenvolvedor Front-end'},
    {nome: 'Maria', img: 'https://www.w3schools.com/howto/img_avatar2.png', descricao: 'Desenvolvedora Back-end'}
  ]

  return (
    <>
      <div>
        
        <Cartao nome={pessoa.nome} imagem={pessoa.img} descricao={pessoa.descricao} />

        <ListaCartoes pessoas={pessoas} />

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
