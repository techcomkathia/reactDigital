import {Route, BrowserRouter, Link} from 'react-router-dom'
import Home from './Home'
import Produtos from './Produtos'


export default function Layout() {
    return (
        <div>
            <header>Cabeçalho</header>
            <BrowserRouter>
                <Route component= {Home} path='/'></Route>
                <Route component= {Produtos} path='/produtos'></Route>            
            </BrowserRouter>
            <footer>Rodapé</footer>
        </div>
    )
}