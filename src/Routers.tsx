import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import LPCreator from './pages/Creator/LPCreator';

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/sites' element={<h1>Sites Criados</h1>} />
        <Route path='/creator' element={<LPCreator />} />
        <Route path='/user' element={<h1>Dados do Usuário</h1>} />
        <Route path='*' element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
