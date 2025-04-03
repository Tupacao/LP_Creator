import { render, screen } from '@testing-library/react';
import TextBox from './TextBox';

describe('TextBox', () => {
  test('Should render TextBox', () => {
    render(<TextBox />);
    expect(screen.getByText('Lorem, ipsum dolor.')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('ENTRE EM CONTATO')).toBeInTheDocument();
  });

});