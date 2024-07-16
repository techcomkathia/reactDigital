import React, {useState} from 'react'

export default function TesteEstado(){
    let [cor, setCor] = useState('red')
    function mudarCor(cor){
        setCor(cor)
    }

    return(
        <div>
            <h1 style={{backgroundColor: cor}}>Teste de estado</h1>
            <button onClick={() => mudarCor('red')}>Vermelho</button>
            <button onClick={() => mudarCor('blue')}>Azul</button>
            <button onClick={() => mudarCor('green')}>Verde</button>
        </div>      
    )
}