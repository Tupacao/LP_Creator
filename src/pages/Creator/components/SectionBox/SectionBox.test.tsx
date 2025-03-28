import { fireEvent, render, screen } from '@testing-library/react';
import SectionBox from './SectionBox';

describe('SectionBox', () => {
  test('Should render SectionBox', () => {
    render(<SectionBox title='Teste' color={false} />);
    expect(screen.getByText('Teste')).toBeInTheDocument();
  });

  test('Should render SectionBox with primary color', () => {
    render(<SectionBox title='Teste' color={true} />);
    const sectionBox = screen.getByText('Teste');
    expect(sectionBox).toHaveStyle('backgroundColor: primary.light');
  });

  test('Should render SectionBox with background color', () => {
    render(<SectionBox title='Teste' color={false} />);
    const sectionBox = screen.getByText('Teste');
    expect(sectionBox).toHaveStyle('backgroundColor: background.default');
  });

  test('Should render SectionBox with cursor default', () => {
    render(<SectionBox title='Header' color={false} />);
    const boxHeader = screen.getByTestId('section-box-Header');
    expect(boxHeader).toHaveStyle('cursor: default');

    render(<SectionBox title='Footer' color={false} />);
    const boxFooter = screen.getByTestId('section-box-Footer');
    expect(boxFooter).toHaveStyle('cursor: default');
  });

  test('Should render SectionBox with cursor pointer', () => {
    render(<SectionBox title='Teste' color={false} />);
    const sectionBox = screen.getByTestId('section-box-Teste');
    expect(sectionBox).toHaveStyle('cursor: pointer');
  });

  test('Should render Modal from SectionBox', () => {
    render(<SectionBox title='Teste' color={false} />);
    const sectionBox = screen.getByText('Teste');
    fireEvent.click(sectionBox);
    expect(
      screen.getByText('Deseja excluir a seção Teste?'),
    ).toBeInTheDocument();
  });

  test('Should not render Modal from SectionBox', () => {
    render(<SectionBox title='Header' color={false} />);
    const sectionHeader = screen.getByText('Header');
    fireEvent.click(sectionHeader);
    expect(
      screen.queryByText('Deseja excluir a seção Header?'),
    ).not.toBeInTheDocument();

    render(<SectionBox title='Footer' color={false} />);
    const sectionFooter = screen.getByText('Footer');
    fireEvent.click(sectionFooter);
    expect(
      screen.queryByText('Deseja excluir a seção Footer?'),
    ).not.toBeInTheDocument();
  });

  test('Should call handleOpenFunction when cliked', () => {
    render(<SectionBox title='Teste' color={false} />);
    const sectionBox = screen.getByText('Teste');
    fireEvent.click(sectionBox);
    expect(
      screen.getByText('Deseja excluir a seção Teste?'),
    ).toBeInTheDocument();
  });

  test('Should call handleCloseFunction when cliked', () => {
    render(<SectionBox title='Teste' color={false} />);
    const sectionBox = screen.getByText('Teste');
    fireEvent.click(sectionBox);
    
    const closeButton = screen.getByText('Não');
    fireEvent.click(closeButton);
    expect(
      screen.queryByText('Deseja excluir a seção Teste?'),
    ).not.toBeInTheDocument();
  });
});
