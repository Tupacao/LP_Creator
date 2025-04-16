import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LPCreator from '../creator/LPCreator';
import { MemoryRouter } from 'react-router-dom';

describe('LPCreator', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <LPCreator />
      </MemoryRouter>,
    );
  });

  test('Should render inicial page layout', () => {
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getAllByText('Footer')).toHaveLength(2);
    expect(screen.getByText('Preview')).toBeInTheDocument();
    expect(screen.getByText('Salvar')).toBeInTheDocument();
    expect(screen.getByText('Apagar')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('Should add new section when click', () => {
    const button = screen.getByTestId('add-section');
    fireEvent.click(button);
    expect(screen.getByText('Section 2')).toBeInTheDocument();
  });

  test('Should remove one section when click', () => {
    fireEvent.click(screen.getByText('Section 1'));
    fireEvent.click(screen.getByText('Sim'));
    expect(screen.queryByText('Section 1')).not.toBeInTheDocument();
  });

  test('Should left-click not be allowed', () => {
    expect(screen.getByTestId('left-click')).toHaveStyle('cursor: not-allowed');
  });

  test('Should left-click be allowed', () => {
    fireEvent.click(screen.getByTestId('right-click'));
    expect(screen.getByTestId('left-click')).toHaveStyle('cursor: pointer');
  });

  test('Should right-click not be allowed', () => {
    const button = screen.getByTestId('right-click');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.getByTestId('right-click')).toHaveStyle(
      'cursor: not-allowed',
    );
  });

  test('Should right-click be allowed', () => {
    expect(screen.getByTestId('right-click')).toHaveStyle('cursor: pointer');
  });

  test('Should change reactComponent when clicked', async () => {
    const buttonChange = screen.getByText('Header 1');
    expect(buttonChange).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Type 1')).toBeInTheDocument();
    });

    fireEvent.click(buttonChange);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Type 2')).toBeInTheDocument();
    });
  });
});
