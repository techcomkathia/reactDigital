import {Routes, Route} from 'react-router-dom';

import Home from '../pages/home';
import Produtos from '../pages/produtos';

export default function Rotas() {
     
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Produtos" element={<Produtos />} />
        </Routes>
    )
}