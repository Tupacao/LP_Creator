import { render, screen } from '@testing-library/react';
import TittleText from './TittleText';

describe('TittleText', () => {
  test('Should render TittleText', () => {
    render(<TittleText titleText='Teste' />);

    expect(screen.getByText('Teste')).toBeInTheDocument();
  });
});
