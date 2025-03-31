import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

interface FormInputProps {
  label: string;
  type: string;
  placeholder?: string;
  functionOnChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  label,
  type,
  placeholder,
  functionOnChange,
}: FormInputProps) {
  return (
    <>
      <TextField
        label={label}
        variant='outlined'
        type={type}
        placeholder={placeholder}
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
      />
    </>
  );
}
