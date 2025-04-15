import { fireEvent, render, screen } from '@testing-library/react';
import DescriptionText from './DescriptionText';

describe('DescriptionText', () => {
  test('Should render DescriptionText', () => {
    render(<DescriptionText descriptionText='teste' setDescription={() => {}} />);

    const descriptionText = screen.getByPlaceholderText('Escreva sua descrição');

    expect(descriptionText).toBeInTheDocument();
    expect(descriptionText).toHaveTextContent('teste');
  });

  test('Should call setDescription when changed', () => {
    const seDescription = jest.fn();
    render(<DescriptionText descriptionText='teste' setDescription={seDescription} />);

    const descriptionText = screen.getByPlaceholderText('Escreva sua descrição');
    expect(descriptionText).toBeInTheDocument();

    fireEvent.change(descriptionText, { target: { value: 'Nova descrição' } });
  
    expect(seDescription).toHaveBeenCalledWith('Nova descrição');
  });

});
