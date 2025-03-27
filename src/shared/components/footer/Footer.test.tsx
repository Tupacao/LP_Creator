import Footer from './Footer.tsx';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

// const TITLE_MOCK = 'Footer';
// const TEXT_MOCK = 'Para fazer com que ao clicar na logo seja redirecionado para a página inicial';
// const BUTTON_MOCK = 'Botão';

describe('Footer', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
  });

  it('renderiza o rodapé com os elementos corretos', () => {
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Para fazer com que ao clicar na logo seja redirecionado para a página inicial/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Botão/i })).toBeInTheDocument();
  });
});
