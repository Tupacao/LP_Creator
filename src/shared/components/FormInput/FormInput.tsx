import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

interface FormInputProps {
  label: string;
  type: string;
  placeholder?: string;
  value?: string;
  functionOnChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  id: string;
}

export default function FormInput({
  label,
  type,
  placeholder,
  value = '',
  functionOnChange,
  required = false,
  id,
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
      id={id}
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
      InputProps={{
        inputProps: {
          'data-testid': `${id}-input`, // Adicione o data-testid ao input
        },
      }}
    />
  );
}
