import { Button, Link } from '@mui/material';

interface ButtonProps {
  text: string;
  href: string;
  functionOnClick?: any;
}

export default function ButtonRedirect({
  text,
  href,
  functionOnClick,
}: ButtonProps) {
  return (
    <>
      <Button
        component={Link}
        href={href}
        onClick={functionOnClick}
        variant='contained'
        sx={{ width: '40%' }}
      >
        {text}
      </Button>
    </>
  );
}
