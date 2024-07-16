import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cartao from './componentes/Cartao'
import ListaCartoes from './componentes/ListaCartoes'
import Botao from './componentes/Botao'
import TesteEstado from './componentes/TesteEstado'
import Gato from './componentes/Gato'
import './meuCss.css'

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

        <Gato/>
        <TesteEstado/>

        <Botao/>
        
        <Cartao nome={pessoa.nome} imagem={pessoa.img} descricao={pessoa.descricao} />

        <ListaCartoes pessoas={pessoas} />

      </div>
    </>
  )
}

export default App
