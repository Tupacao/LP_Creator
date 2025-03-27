import { Box, Typography } from '@mui/material';

interface ChangeBoxProps {
  title: string;
  color: boolean;
  onClickFunction?: () => void;
}

export default function ChangeBox({
  title,
  color,
  onClickFunction,
}: ChangeBoxProps) {
  return (
    <Box
      onClick={onClickFunction}
      sx={{
        padding: '10px',
        width: '100px',
        textAlign: 'center',
        borderRadius: '4px',
        backgroundColor: color ? 'primary.light' : 'background.default',
        cursor: 'pointer',
      }}
    >
      <Typography fontSize={'20px'} fontWeight={'bold'}>
        {title}
      </Typography>
    </Box>
  );
}
