import Cartao from "./Cartao";
//como parâmetro (props) a lista de pessoas (objetos)
export default function ListaCartoes({pessoas}) {
    return (
        <div class= "d-flex ">
            {pessoas.map(pessoa => (
                <Cartao key={pessoa.id} nome={pessoa.nome} imagem={pessoa.img} descricao={pessoa.descricao} />
            ))}
        </div>
    )
}