import { Typography } from '@mui/material';

export default function TittleText({ titleText }: { titleText: string }) {
  return (
    <Typography
      variant='h5'
      fontFamily={'Poppins, sans-serif'}
      fontWeight={'bold'}
    >
      {titleText}
    </Typography>
  );
}
