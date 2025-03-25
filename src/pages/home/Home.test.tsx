import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// Mocks para os componentes Header e Footer
jest.mock('../../shared/components/header/Header', () => () => <div data-testid="mock-header">Mock Header</div>);
jest.mock('../../shared/components/footer/Footer', () => () => <div data-testid="mock-footer">Mock Footer</div>);

describe('Home', () => {
  it('renderiza o componente Home com o título correto', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { name: /Bem-vindo ao LP_Creator/i, level: 1 })).toBeInTheDocument();

    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });

});