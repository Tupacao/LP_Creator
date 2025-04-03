import { Typography } from '@mui/material';

export default function TitleText({ titleText }: { titleText: string }) {
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
