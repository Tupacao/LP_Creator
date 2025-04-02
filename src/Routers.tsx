import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login.tsx';
import Register from './pages/Register/Register';
import Sites from './pages/sites/Sites.tsx';
import LPCreator from './pages/Creator/LPCreator';
import PreCreator from './pages/preCreator/PreCreator.tsx';

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/creator'>
          <Route path='data' element={<PreCreator />} />
          <Route path='lp/:name' element={<LPCreator />} />
        </Route>
        <Route path='/sites' element={<Sites />} />
        <Route path='/user' element={<h1>Dados do Usuário</h1>} />
        <Route path='*' element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
