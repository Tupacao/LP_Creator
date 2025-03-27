import { faLock, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography } from '@mui/material';

interface SectionBoxProps {
  title: string;
  color: boolean;
  clickFunction?: () => any;
}

export default function SectionBox({ title, color, clickFunction }: SectionBoxProps) {
  return (
    <Box
      onClick={clickFunction}
      sx={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        color: 'primary.main',
        padding: '10px',
        backgroundColor: color ? 'primary.light' : 'background.default',
        width: '100px',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      <Typography>{title}</Typography>
      <FontAwesomeIcon icon={(title != 'Footer' && title != 'Header') ? faTrash : faLock} />
    </Box>
  );
}
