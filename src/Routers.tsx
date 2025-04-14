import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Sites from './pages/sites/Sites.tsx';
import LPCreator from './pages/creator/LPCreator';
import PreCreator from './pages/preCreator/PreCreator';
import ProtectedRoute from './shared/authentication/ProtectedRoute.tsx';
import Teste from './pages/teste/Teste.tsx';

function Routers() {
  return (

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/creator' element={<ProtectedRoute><LPCreator /></ProtectedRoute>}>
          <Route path='data' element={<ProtectedRoute><PreCreator /></ProtectedRoute>} />
          <Route path='lp/:name' element={<ProtectedRoute><LPCreator /></ProtectedRoute>} />
        </Route>
        <Route path='/sites' element={<ProtectedRoute><Sites /></ProtectedRoute>} />
        <Route path='/user' element={<ProtectedRoute><h1>Dados do Usuário</h1></ProtectedRoute>} />
        <Route path='*' element={<h1>Página não encontrada</h1>} />
        <Route path='/teste' element={<Teste/>} />
      </Routes>

  );
}

export default Routers;