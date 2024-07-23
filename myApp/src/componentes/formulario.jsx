// https://api-produtos-iota.vercel.app/produtos

import React, { useState } from 'react';

export default function Formulario() {
    let [id, setId] = useState(0);
    function handleId(evento){
        setId(evento.target.value);
        console.log(id);
    }

    let [nome, setNome] = useState('');
    function handleNome(evento){
        setNome(evento.target.value);
    }
    let [preco, setPreco] = useState(0);
    function handlePreco(evento){
        setPreco(evento.target.value);
    }

    function cadastrarProduto( objProduto){
        fetch('https://api-produtos-iota.vercel.app/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objProduto)
        }).then(response => response.json())
        .then(data => console.log(data)).catch(error => console.log(error))
        .finally(()=> location.reload());
    }

    function handleSubmit(evento){
        evento.preventDefault();
        cadastrarProduto({id: id, nome: nome, preco: preco});
        console.log({id: id, nome: nome,preco: preco});
        handleId({target: {value: ''}});
        handleNome({target: {value: ''}});
        handlePreco({target: {value: ''}});
        console.log({id: id, nome: nome,preco: preco});
    }
    return(
        // id, nome e preco
        <form>
            <label htmlFor="id">ID</label>
            <input type="number" id="id" name="id" onChange={(e)=>handleId(e)}/>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" onChange={(e)=> handleNome(e)} />
            <label htmlFor="preco">Preço</label>
            <input type="number" id="preco" name="preco" onChange={(e)=>handlePreco(e)}/>
            <input type="submit" value="Cadastrar" onClick={(e)=> handleSubmit(e)} />
        </form>
    )
}