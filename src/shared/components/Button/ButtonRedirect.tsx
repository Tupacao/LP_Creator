import { Button, Link } from '@mui/material';

interface ButtonProps {
  text: string;
  href: string;
  functionOnClick?: any;
  able?: boolean;
}

export default function ButtonRedirect({
  text,
  href,
  functionOnClick,
  able = false,
}: ButtonProps) {
  return (
    <>
      <Button
        disabled={able}
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
