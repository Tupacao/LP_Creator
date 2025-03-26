import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography } from '@mui/material';

interface SectionBoxProps {
  title: string;
  color: boolean;
}

export default function SectionBox({ title, color }: SectionBoxProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        color: 'primary.main',
        padding: '10px',
        backgroundColor: color ? 'primary.light' : 'background.default',
        width: '100px',
        borderRadius: '4px',
      }}
    >
      <Typography>{title}</Typography>
      <FontAwesomeIcon icon={faLock} />
    </Box>
  );
}
