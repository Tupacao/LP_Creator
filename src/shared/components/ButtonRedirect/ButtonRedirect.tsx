import { Button, Link } from '@mui/material';

interface ButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export default function ButtonRedirect({
                                           text,
                                           href,
                                           onClick,
                                           disabled = false,
                                           type = 'button'
                                       }: ButtonProps) {
    return (
        <Button
            disabled={disabled}
            component={href ? Link : 'button'}
            href={href}
            onClick={onClick}
            type={type}
            variant='contained'
            sx={{ width: '40%' }}
        >
            {text}
        </Button>
    );
}