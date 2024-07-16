import React from "react"

export default function Cartao({nome, imagem, descricao}) {
    return (
        <div class="card mx-4" style={{width: "18rem"}}>
            <img src={imagem} class="card-img-top" alt="nome"/>
            <div class="card-body">
                <h5 class="card-title">{nome}</h5>
                <p class="card-text">{descricao}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}