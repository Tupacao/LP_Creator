import { render, screen } from '@testing-library/react';
import TitleText from './TitleText';

describe('TitleText', () => {
  test('Should render TitleText', () => {
    render(<TitleText titleText='Teste' />);

    expect(screen.getByText('Teste')).toBeInTheDocument();
  });
});
