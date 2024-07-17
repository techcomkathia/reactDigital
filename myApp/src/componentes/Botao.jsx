import { useState } from "react"
import styled from "styled-components"
import { Cores } from "./Cores"
// import './Botao.css'

const BotaoStyled = styled.button`
    background-color: ${Cores.primary};
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: ${Cores.secondary};
    }
`

const BotaoGrande = styled(BotaoStyled)`
    font-size: 1.5rem;
    padding: 15px;
    width: 400px;

    &:hover {
        background-color: ${Cores.tertiary};
    }
`


export default function Botao() {
    let [contagem, setContagem] = useState(0)

    function contar() {
        setContagem(contagem + 1)
    }

  return (
    <>
        <h1>{contagem}</h1>
        <button>Sem estilo</button>
        <BotaoStyled onClick={contar} className="py-5">Click para contar</BotaoStyled>
        <BotaoGrande >Click para contar no outro botao</BotaoGrande>
    </>
  )
}