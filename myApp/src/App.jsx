import React from 'react'
import Rotas from './rotas/rotas'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <> 
      <h1>App</h1> 
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
         
      <h1>rodapé</h1>
    </>

  )
}

export default App
