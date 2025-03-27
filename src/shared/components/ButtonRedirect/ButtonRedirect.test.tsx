import {fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonRedirect from './ButtonRedirect';

describe('ButtonRedirect', ()=>{
    test('Should render the button', () => {
        render(<ButtonRedirect text='teste' href=''/>);
        const button = screen.getByText('teste');
        expect(button).toBeInTheDocument();
    })

    test('Should display the correct text and link', () => {
        render(<ButtonRedirect text='teste' href='/teste'/>);
        const button = screen.getByText('teste');
        expect(button).toHaveTextContent('teste');
        expect(button).toHaveAttribute('href', '/teste');
    })

    test('Should call functionOnclick when cliked', () => {
        const handleClick = jest.fn();
        render(<ButtonRedirect text='teste' href='/teste' functionOnClick={handleClick}/>);
        const button = screen.getByText('teste');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})