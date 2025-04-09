import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonRedirect from './ButtonRedirect';
import { MemoryRouter } from 'react-router-dom'; // Importe MemoryRouter

describe('ButtonRedirect Component', () => {
  test('Should render the button', () => {
    render(<ButtonRedirect text='teste' />);
    const button = screen.getByText('teste');
    expect(button).toBeInTheDocument();
  });

  test('Should display the correct text and link', () => {
    render(
        <MemoryRouter>
          <ButtonRedirect text='teste' href='/teste' />
        </MemoryRouter>
    );
    const button = screen.getByText('teste');
    expect(button).toHaveTextContent('teste');
    expect(button).toHaveAttribute('href', '/teste');
  });

  test('Should call onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(
        <ButtonRedirect
            text='teste'
            onClick={handleClick} // Use onClick
        />
    );
    const button = screen.getByText('teste');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Should be disabled when disabled prop is true', () => {
    render(<ButtonRedirect text='teste' disabled={true} />);
    const button = screen.getByText('teste');
    expect(button).toBeDisabled();
  });
});