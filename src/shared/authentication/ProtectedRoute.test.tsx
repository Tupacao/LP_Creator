import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from './AuthContext';

// Mock do AuthContext
jest.mock('./AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe('ProtectedRoute Component', () => {
  const MockComponent = () => <div>Conteúdo Protegido</div>;

  test('renders children when authenticated', () => {
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
    });

    render(
      <BrowserRouter>
        <ProtectedRoute>
          <MockComponent />
        </ProtectedRoute>
      </BrowserRouter>,
    );

    expect(screen.getByText('Conteúdo Protegido')).toBeInTheDocument();
  });

  test('redirects to /login when not authenticated', () => {
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      isLoading: false,
    });

    render(
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<div>Login Page</div>} />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <MockComponent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>,
    );

    expect(screen.getByText('Login Page')).toBeInTheDocument();
    expect(screen.queryByText('Conteúdo Protegido')).not.toBeInTheDocument();
  });

  test('renders loading indicator when isLoading is true', () => {
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      isLoading: true,
    });

    render(
      <BrowserRouter>
        <ProtectedRoute>
          <MockComponent />
        </ProtectedRoute>
      </BrowserRouter>,
    );

    expect(screen.getByText('Carregando...')).toBeInTheDocument();
    expect(screen.queryByText('Conteúdo Protegido')).not.toBeInTheDocument();
  });
});
