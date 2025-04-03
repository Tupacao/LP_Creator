import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@mui/material';

export default function IconBox() {
  return (
    <Box
      data-testid='icon-box'
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 1,
        width: '30px',
        height: '30px',
        backgroundColor: 'black',
        borderRadius: '50%',
        color: 'white',
      }}
    >
      <FontAwesomeIcon icon={faX} />
    </Box>
  );
}
