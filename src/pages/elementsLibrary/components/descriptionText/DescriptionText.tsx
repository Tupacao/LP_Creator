import { Typography } from '@mui/material';

interface DescriptionTextProps {
  descriptionText: string;
  isStrong?: boolean;
}

export default function DescriptionText({
  descriptionText,
  isStrong = false,
}: DescriptionTextProps) {
  return (
    <Typography
      data-testid='description-text'
      fontSize={'16px'}
      fontFamily={'Poppins, sans-serif'}
      fontWeight={isStrong ? 'bold' : 'normal'}
    >
      {descriptionText}
    </Typography>
  );
}
