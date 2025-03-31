import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import Sites from './pages/sites/Sites';
import Register from './pages/Register/Register';
import PreCreator from './pages/PreCreator/PreCreator';

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Teste</h1>} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/creator'>
          <Route path='data' element={<PreCreator/>} />
          <Route path='lp/:name' element={<h1>Criador de LP</h1>} />
        </Route>
        <Route path='/sites' element={<Sites />} />
        <Route path='/user' element={<h1>Dados do Usuário</h1>} />
        <Route path='*' element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
