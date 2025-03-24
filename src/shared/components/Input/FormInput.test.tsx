import {fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormInput from './FormInput';

describe('FormInput', () => {
    test('Should render FormInput', () => {
        render(<FormInput label='teste' type='text' />);
        expect(screen.getByLabelText('teste')).toBeInTheDocument();
    })

    test('Should render label, type and placeholder correctly', () => {
        render(<FormInput label='label' type='type' placeholder='placeholder' />);
        const formInput = screen.getByLabelText('label');
        expect(formInput).toBeInTheDocument();
        expect(formInput).toHaveAttribute('type', 'type');
        expect(formInput).toHaveAttribute('placeholder', 'placeholder');
    })

    test('Should call functionOnChange when change', () => {
        const handleChange = jest.fn();
        render(<FormInput label='label' type='type' placeholder='placeholder' functionOnChange={handleChange} />);
        const formInput = screen.getByLabelText('label');
        fireEvent.change(formInput, {target: {value: 'teste'}});
        expect(handleChange).toHaveBeenCalledTimes(1);
    })
})