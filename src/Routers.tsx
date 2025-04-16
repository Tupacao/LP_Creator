import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Sites from './pages/sites/Sites.tsx';
import LPCreator from './pages/Creator/LPCreator';
import PreCreator from './pages/PreCreator/PreCreator';
import LandingPage from './pages/landingPage/LandingPage';
import ProtectedRoute from './shared/authentication/ProtectedRoute.tsx';

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
        <Route path='/landingpage' element={<LandingPage />} />
        <Route path='*' element={<h1>Página não encontrada</h1>} />
      </Routes>

  );
}

export default Routers;