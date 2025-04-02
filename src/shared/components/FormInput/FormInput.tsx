import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

interface FormInputProps {
    label: string;
    type: string;
    placeholder?: string;
    value?: string;
    functionOnChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export default function FormInput({
                                      label,
                                      type,
                                      placeholder,
                                      value = '',
                                      functionOnChange,
                                      required = false
                                  }: FormInputProps) {
    return (
        <TextField
            label={label}
            variant='outlined'
            type={type}
            placeholder={placeholder}
            value={value}
            required={required}
            color='primary'
            sx={{
                '& .MuiInputBase-input': {
                    color: 'text.secondary',
                },
                '& .MuiInputLabel-root': {
                    color: 'text.primary',
                },
            }}
            onChange={functionOnChange}
            fullWidth
        />
    );
}