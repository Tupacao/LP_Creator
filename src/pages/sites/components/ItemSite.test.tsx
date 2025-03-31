import { render, screen, fireEvent } from '@testing-library/react';
import ItemSite from './ItemSite';

const mockSite = {
  id: 1,
  name: 'Test Site',
  createdAt: '2024-03-27T12:00:00Z',
};

describe('ItemSite Component', () => {
  beforeEach(() => {
    render(<ItemSite site={mockSite} />);
  });

  it('should render site name and formatted date', () => {
    expect(screen.getByText('Test Site')).toBeInTheDocument();
    expect(screen.getByText('27/03/2024')).toBeInTheDocument();
  });

  it('should open and close the modal when delete button is clicked', () => {
    const deleteButton = screen.getByLabelText('delete');
    fireEvent.click(deleteButton);

    expect(screen.getByText('Confirmar Exclusão')).toBeInTheDocument();

    const cancelButton = screen.getByText('Cancelar');
    fireEvent.click(cancelButton);

    expect(screen.queryByText('Confirmar Exclusão')).not.toBeInTheDocument();
  });

  it('should close the modal when clicking on Excluir button', () => {
    const deleteButton = screen.getByLabelText('delete');
    fireEvent.click(deleteButton);

    const confirmButton = screen.getByText('Excluir');
    fireEvent.click(confirmButton);

    expect(screen.queryByText('Confirmar Exclusão')).not.toBeInTheDocument();
  });
});
